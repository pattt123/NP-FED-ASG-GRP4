import { Database } from "../lib/database.js";
import { MenuItem } from "../lib/menuitem.js";
import { OrderItem } from "../lib/orderitem.js";
import { Order } from "../lib/order.js";
import {
    doc,
    collection,
    setDoc,
    getDoc,
    getDocs,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


export class Stall {
    constructor(id, name, description, image, menuitems) {
        this.id = id ?? crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.image = image;
        this.menuitems = menuitems;
    }

    async write() {
        const reference = doc(Database, "stalls", this.id);
        await setDoc(reference, {
            id: this.id,
            name: this.name,
            description: this.description,
            image: this.image,
        })
        this.menuitems.forEach(menuitem => menuitem.write())
    }

    async read() {
        const reference = doc(Database, "stalls", this.id)
        const snapshot = await getDoc(reference)
        if (!snapshot.exists()) { return this; }
        const stallData = snapshot.data()
        this.name = stallData.name;
        this.description = stallData.description;
        this.image = stallData.image;
        this.menuitems = await MenuItem.getMenuItemsByStallId(this.id);
        return this;
    }

    async getAllOrders() {
        const ordersRef = collection(Database, "orders");
        const q = query(ordersRef, where("stall", "==", this.id));
        const querySnapshot = await getDocs(q);

        const orders = [];
        querySnapshot.forEach((doc) => {
            const order = doc.data();
            const orderitems = [];
            order.orderitems.forEach(orderitem => {
                orderitems.push(OrderItem.asOrderItem(orderitem));
            });
            orders.push(
                new Order(
                    order.id,
                    order.number,
                    order.user,
                    order.stall,
                    orderitems,
                    order.instructions,
                    order.status,
                )
            );
        });
        return orders;
}

    static async getStallById(id) {
        if (!id) return undefined;
        const reference = doc(Database, "stalls", id);
        const snapshot = await getDoc(reference);
        if (!snapshot.exists()) { return undefined; }
        const stall = snapshot.data();
        return new Stall(
            stall.id,
            stall.name,
            stall.description,
            stall.image,
            await MenuItem.getMenuItemsByStallId(id)
        );
    }
}
