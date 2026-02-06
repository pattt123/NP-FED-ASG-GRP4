import { OrderItem } from "./orderitem.js"
import { MenuItem } from "./menuitem.js"

export class Tray {
    constructor(stall) {
        this.stall = stall
        this.items = new Map()
    }

    getItem(id) {
        return this.items.get(id)
    }
    setItem(id, qty) {
        this.items.set(id, qty)
        this.localStore()
    }
    addItem(id, qty) {
        let existing = this.items.get(id) ?? 0
        this.items.set(id, existing + qty)
        this.localStore()
    }
    removeItem(id, qty) {
        let existing = this.items.get(id) ?? 0
        let result = existing - qty
        if (result < 0) {
            result = 0
        }
        this.items.set(id, result)
        this.localStore()
    }
    
    localStore() {
        let objectitems = []
        this.items.forEach((value, key) => {
            objectitems.push({
                id: key,
                qty: value
            })
        })
        localStorage.setItem("tray", JSON.stringify({
            stall: this.stall,
            items: objectitems
        }));
    }

    async asOrderItems() {
        const items = []
        for (const [key, value] of this.items) {
            const menuItem = await MenuItem.getMenuItemByStallIdAndId(
                this.stall,
              key
            );
            if (menuItem === undefined) {
              continue;
            }
            const orderItem = OrderItem.fromMenuItem(menuItem, value);
            items.push(orderItem);
        }
        return items;    
    }

    async asMenuItems() {
        const items = []
        for (const [key, value] of this.items) {
            const menuItem = await MenuItem.getMenuItemByStallIdAndId(
                this.stall,
                key
            );
            if (menuItem === undefined) {
              continue;
            }
            items.push(menuItem)
        }
        return items;    
    }


    static loadFromLocalStore() {
        let data = localStorage.getItem("tray")
        if (data == undefined) return undefined;
        let object = JSON.parse(data)
        const tray = new Tray(object.stall)
        object.items.forEach(trayitem => {
            tray.addItem(trayitem.id, trayitem.qty)
        })
        return tray
    }

}
