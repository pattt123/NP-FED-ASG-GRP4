import { Database } from "./database.js";
import { Generate } from "./id.js";
import {
    ref,
    set,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export class User {
    constructor(id, username, password) {
        if (id == undefined) {
            this.id = Generate();
        } else {
            this.id = id;
        }
        this.username = username;
        this.password = password;
    }

    write() {
        const reference = ref(Database, `users/${this.id}`);
        set(reference, this);
    }
}
