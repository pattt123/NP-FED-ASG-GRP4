import { Database } from "./database.js";
import { OrderItem } from "./orderitem.js";
import {
    doc,
    setDoc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export class Order {
    constructor(id, number, user, stall, orderitems, instructions, status) {
        this.id = id ?? crypto.randomUUID();
        this.number = number
        this.user = user;
        this.stall = stall;
        this.instructions = instructions ?? "";
        this.orderitems = orderitems;
        this.status = status
    }

    async write() {
        const reference = doc(Database, "orders", this.id);
        const objectOrderItems = []
        this.orderitems.forEach(orderitem => {
            objectOrderItems.push(orderitem.asObject())
        })
        await setDoc(reference, {
            id: this.id,
            number: this.number,
            user: this.user,
            stall: this.stall,
            orderitems: objectOrderItems,
            instructions: this.instructions,
            status: this.status,
        })
    }

    async read() {
        const reference = doc(Database, "orders", this.id)
        const snapshot = await getDoc(reference)
        if (!snapshot.exists()) { return this; }
        const order = snapshot.data()
        this.number = order.number
        this.user = order.user
        this.stall = order.stall
        const orderitems = []
        order.orderitems.forEach(obj => {
            orderitems.push(OrderItem.asOrderItem(obj))
        })
        this.orderitems = orderitems
        this.instructions = order.instructions
        this.status = order.status
        return this;
    }

    calculateSubtotal() {
        return OrderItem.calculatePrice(this.orderitems) 
    }

    static async getOrderById(id) {
        const reference = doc(Database, "orders", id);
        const snapshot = await getDoc(reference);
        if (!snapshot.exists()) { return undefined; }
        const order = snapshot.data();
        const orderitems = []
        order.orderitems.forEach(orderitem => {
            orderitems.push(OrderItem.asOrderItem(orderitem))
        });
        return new Order(
            order.id,
            order.number,
            order.user,
            order.stall,
            orderitems,
            order.instructions,
            order.status,
        );
    }

    static async getOrdersByUser(userId) {
        const q = query(collection(Database, "orders"), where("user", "==", userId));
        const querySnapshot = await getDocs(q);
        const orders = [];
        querySnapshot.forEach((doc) => {
            const order = doc.data();
            const orderitems = []
            order.orderitems.forEach(orderitem => {
                orderitems.push(OrderItem.asOrderItem(orderitem))
            });
            orders.push(new Order(
                order.id,
                order.number,
                order.user,
                order.stall,
                orderitems,
                order.instructions,
                order.status,
            ));
        });
        return orders;
    }
}
