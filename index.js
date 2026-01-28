import { User } from "./lib/user.js";
import { Stall } from "./lib/stall.js";
import { MenuItem } from "./lib/menuitem.js";
import { OrderItem } from "./lib/orderitem.js";
import { Order } from "./lib/order.js";

const user = new User("b0360268-689d-4c75-86d4-7de162878ac8", "testuser", "anothertestpassword", "Test User", Date.now(), "a8ba12f0-8767-4eec-8edb-2e7f50d3bdc1")
user.write()
user.logIn()
const stall = new Stall("a8ba12f0-8767-4eec-8edb-2e7f50d3bdc1", "Chicken Rice", "Best in singapore", "https://img.potassium.sh", [])
const menuitems = [
    new MenuItem("faf3de77-d2aa-4bd3-92c2-d6ee494c46ec", stall.id, "Steamed Chicken Rice", "Steamed chicken with rice", "https://img.potassium.sh/", 2.40),
    new MenuItem("9cefcc40-760a-4292-bdee-5c7ec7f874ea", stall.id, "Roast Chicken Rice", "Roasted chicken with rice", "https://img.potassium.sh/", 2.50),
]
stall.menuitems = menuitems
stall.write()
const orderitems = [
    OrderItem.fromMenuItem(menuitems[0], 2),
    OrderItem.fromMenuItem(menuitems[1], 1)
]
const order = new Order("bdfec476-1f94-4016-89b0-8646c044174c", user.id, stall.id, orderitems)
order.write()
console.log(order)
