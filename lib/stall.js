import { Database } from "./database.js";
import { MenuItem } from "./menuitem.js";
import {
    doc,
    setDoc,
    getDoc,
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

    static async getStallById(id) {
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
