import { Database } from "./database.js";
import {
    doc,
    collection,
    setDoc,
    getDoc,
    getDocs,
    query
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
export class MenuItem {
    constructor(id, stall, name, description, image, price) {
        this.id = id ?? crypto.randomUUID();
        this.stall = stall
        this.name = name;
        this.description = description;
        this.image = image;
        if (typeof price != "number") {
            this.price = 0;
        } else {
            this.price = price
        }
    }

    async write() {
        const reference = doc(Database, "stalls", this.stall, "menuitems", this.id);
        await setDoc(reference, {
            id: this.id,
            name: this.name,
            description: this.description,
            image: this.image,
            price: this.price,
        })
    }

    async read() {
        const reference = doc(Database, "stalls", this.id, "menuitems", this.id)
        const snapshot = await getDoc(reference)
        if (!snapshot.exists()) { return this; }
        const menuitem = snapshot.data()
        this.name = menuitem.name
        this.description = menuitem.description
        this.image = menuitem.image
        this.price = menuitem.price
        return this;
    }

    static async getMenuItemByStallIdAndId(stallid, id) {
        const reference = doc(Database, "stalls", stallid, "menuitems", id);
        const snapshot = await getDoc(reference);
        if (!snapshot.exists()) { return undefined; }
        const menuitem = snapshot.data();
        return new MenuItem(
            menuitem.id,
            stallid,
            menuitem.name,
            menuitem.description,
            menuitem.image,
            menuitem.price,
        );
    }

    static async getMenuItemsByStallId(stallid) {
        const reference = collection(Database, "stalls", stallid, "menuitems");
        const q = query(reference);
        const snapshot = await getDocs(q);
        const menuitems = [];
        snapshot.forEach(menuitemSnapshot => {
            const menuitem = menuitemSnapshot.data()
            menuitems.push(
                new MenuItem(
                    menuitem.id,
                    stallid,
                    menuitem.name,
                    menuitem.description,
                    menuitem.image,
                    menuitem.price
                )
            )
        })
        return menuitems
    }
}
