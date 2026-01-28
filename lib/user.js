import { Database } from "./database.js";
import { Stall } from "./stall.js";
import {
    doc,
    setDoc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export class User {
    constructor(id, username, password, name, dob, stall) {
        this.id = id ?? crypto.randomUUID();
        this.stall = stall ?? "";
        this.username = username;
        this.password = password;
        this.name = name;
        this.dob = dob;
    }

    async write() {
        const reference = doc(Database, "users", this.id);
        await setDoc(reference, {
            id: this.id,
            username: this.username,
            password: this.password,
            name: this.name,
            dob: this.dob,
            stall: this.stall
        })
    }

    async read() {
        const reference = doc(Database, "users", this.id)
        const snapshot = await getDoc(reference)
        if (!snapshot.exists()) { return this; }
        const userData = snapshot.data()
        this.stall = userData.stall
        this.username = userData.username
        this.password = userData.password
        this.name = userData.name
        this.dob = userData.dob
        return this;
    }

    logIn() {
        localStorage.setItem("userid", this.id)
        localStorage.setItem("username", this.name)
    }

    async getStall() {
        if (this.stall == "") { return undefined; }
        return Stall.getStallById(this.stall)
    }

    static async getUserByUsername(username) {
        const users = collection(Database, "users");
        const q = query(users, where("username", "==", username));
        const snapshot = await getDocs(q);
        if (snapshot.empty) { return undefined; }
        const user = snapshot.docs[0].data();
        return new User(
            user.id,
            user.username,
            user.password,
            user.name,
            user.dob,
            user.stall
        );
    }

    static async getUserById(id) {
        const reference = doc(Database, "users", id);
        const snapshot = await getDoc(reference);
        if (!snapshot.exists()) { return undefined; }
        const user = snapshot.data();
        return new User(
            user.id,
            user.username,
            user.password,
            user.name,
            user.dob,
            user.stall
        );
    }

    static async loggedInUser() {
        const id = localStorage.getItem("userid")
        return await this.getUserById(id)
    }
}
