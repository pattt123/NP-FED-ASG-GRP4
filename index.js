import { Stall } from "/lib/stall.js";
constructor(id, name, description, image, menuitems) {
        this.id = id ?? crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.image = image;
        this.menuitems = menuitems;
    }
