export class OrderItem {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    asObject() {
        return {
            name: this.name,
            qty: this.qty,
            price: this.price,
        }
    }
    
    static asOrderItem(object) {
        return new OrderItem(object.name, object.qty, object.price)
    }

    static fromMenuItem(menuitem, qty) {
        return new OrderItem(menuitem.name, qty, menuitem.price)
    }
}
