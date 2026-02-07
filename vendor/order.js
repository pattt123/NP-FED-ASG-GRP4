import { User } from "/lib/user.js";
import { Stall } from "/lib/stall.js";
import { Order } from "/lib/order.js";

async function func() {
    const user = await User.loggedInUser()
    if (user == undefined) {
        window.location.href = "/"
        return;
    }
    const stall = await Stall.getStallById(user.stall)
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id")
    const order = await Order.getOrderById(id)
    if (order == undefined) {
        console.log("Order undefined")
        return;
    }
    console.log(order.stall)
    if (order.stall != stall.id) {
        console.log("Stall Mismatch")
        return;
    }

    const h1Element = document.getElementsByTagName("h1")[0]
    h1Element.textContent = h1Element.textContent.replace("-------", order.number)

    const stallNameElement = document.getElementById("stallname")
    stallNameElement.textContent = stall.name

    const customer = await User.getUserById(order.user)
    const customerElement = document.getElementById("customername")
    customerElement.textContent = customer.name

    const instructionsElement = document.getElementById("instructions")
    if (order.instructions != "") {
        instructionsElement.textContent = order.instructions 
    } else {
        instructionsElement.textContent = "None"
    }

    const statusElement = document.getElementById("status")
    statusElement.textContent = order.status.toUpperCase()
    statusElement.classList.replace("%%status%%", order.status)

    const subtotalElement = document.getElementById("subtotal")
    const subtotal = order.calculateSubtotal()
    subtotalElement.textContent = subtotalElement.textContent.replace("?", subtotal.toFixed(2))

    const feeElement = document.getElementById("fee")
    const fee = 0.1*subtotal
    feeElement.textContent = feeElement.textContent.replace("?", fee.toFixed(2))

    const totalElement = document.getElementById("total")
    const total = fee + subtotal
    totalElement.textContent = totalElement.textContent.replace("?", total.toFixed(2));


    const itemsElement = document.getElementById("items")
    let items = ""
    order.orderitems.forEach(item => {
        let component = itemComponent.replace("%%item%%", item.name)
        component = component.replace("%%qty%%", item.qty)
        component = component.replace("%%price%%", item.price)
        items = items + component
    })
    itemsElement.innerHTML = items

    const buttons = document.getElementsByTagName("button")
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i]
        button.addEventListener("click", async () => {
            order.status = button.classList.toString()
            await order.write()
            location.reload()
        })
    }
}

const itemComponent = `<div class="item">
                        <span><span class="itemqty">%%qty%%x</span> %%item%%</span>
                        <span class="itemprice">$%%price%%</span>
                    </div>`

await func()

