import { User } from "./lib/user.js";

const user = new User("b0360268-689d-4c75-86d4-7de162878ac8", "testuser", "anothertestpassword", "Test User", Date.now(), "a8ba12f0-8767-4eec-8edb-2e7f50d3bdc1")
user.write()
