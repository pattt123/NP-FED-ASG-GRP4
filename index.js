import { User } from "./lib/user.js";

let same = new User("0", "myusername", "mypassword");
same.write();
let user = new User(undefined, "myusername", "mypassword");
user.write();
same.password = "newpassword";
same.write();
