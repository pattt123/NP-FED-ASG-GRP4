import { Database } from "./database.js";
import { OrderItem } from "./orderitem.js";
import {
    doc,
    setDoc,
    getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export class Order {
    constructor(id, number, user, stall, orderitems, status) {
        this.id = id ?? crypto.randomUUID();
        this.number = number
        this.user = user;
        this.stall = stall;
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
            status: this.status
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
            orderitems.push(OrderItem.fromObject(obj))
        })
        this.orderitem = orderitems
        this.status = order.status
        return this;
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
            order.stall,
            order.user,
            orderitems,
            order.status,
        );
    }
}
