import { Database } from "./database.js";
import { OrderItem } from "./orderitem.js";
import {
    doc,
    setDoc,
    getDoc,
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
            orderitems.push(OrderItem.fromObject(obj))
        })
        this.orderitem = orderitems
        this.instructions = order.instructions
        this.status = order.status
        return this;
    }

    calculateSubtotal() {
        let amount = 0
        this.orderitems.forEach(item => {
            let price = item.price*item.qty
            amount = amount + price
        })
        return amount
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
}
