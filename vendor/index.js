import { User } from "/lib/user.js";
import { Stall } from "/lib/stall.js";

async function func() {
    const user = await User.loggedInUser()
    if (user == undefined) {
        window.location.href = "/"
        return;
    }
    const stall = await Stall.getStallById(user.stall)
    if (stall == undefined) {
        window.location.href = "/"
        return;
    }
    const stallNameElement = document.getElementsByTagName("h1")[0]
    stallNameElement.textContent = stall.name
    
    const params = new URLSearchParams(window.location.search);
    let filter = params.get("filter") ?? "active"
    if (filter != "active" && filter != "received" && filter != "preparing" && filter != "ready" && filter != "completed") {
        filter = "active"
    }

    const selectedElement = document.getElementById(filter)
    if (selectedElement != undefined) {
        selectedElement.classList.add("selected")
    }
    
    const orders = await stall.getAllOrders()
    let orderComponents = ""
    for (const order of orders) {
        if (filter == "active") {
            if (order.status == "completed") {
                continue;
            }
        } else if (order.status != filter) {
            continue;
        }
        let customer = await User.getUserById(order.user);
        if (customer == undefined) {continue;}
        let component = orderComponent.replace("%%id%%", order.id)
        component = component.replace("%%number%%", order.number)
        component = component.replace("%%statusclass%%", order.status)
        component = component.replace("%%statustext%%", order.status.toUpperCase())
        component = component.replace("%%customer%%", customer.name)

        let total = 1.1*order.calculateSubtotal()
        component = component.replace("%%price%%", total.toFixed(2))

        let orderItems = order.orderitems
        component = component.replace("%%itemcount%%", orderItems.length)

        let items = ""
        orderItems.forEach(item => {
            let c = itemComponent.replace("%%qty%%", item.qty).replace("%%name%%", item.name)
            items = items + c
        })
        component = component.replace("%%items%%", items)
        orderComponents = orderComponents + component 
    }
    const ordersComponent = document.getElementById("orders")
    ordersComponent.innerHTML = orderComponents 
}
const itemComponent = `
<span>%%qty%%x %%name%%</span>
`
const orderComponent = `
<a href="/vendor/order.html?id=%%id%%" class="order border">
                <div>
                    <div class="ordertitle">
                        <h3>Order #%%number%%</h3>
                        <span class="status %%statusclass%%">%%statustext%%</span>
                    </div>
                    <div class="ordermeta">
                        <span>%%customer%%</span>  
                        <span>%%itemcount%% items | $ %%price%%</span>  
                    </div>
                    <hr>
                    <div class="orderitems">
                        %%items%%
                    </div>
                </div>
            </a>
`

await func()

