import { User } from "/lib/user.js";
import { Tray } from "/lib/tray.js";
import { Order } from "/lib/order.js";
import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";
import { OrderItem } from "/lib/orderitem.js";

/**
 * Loads the checkout page by validating user authentication, retrieving stall and cart data,
 * displaying order items, calculating pricing, and setting up the order placement functionality.
 */
async function loadCheckout() {
    // Check if user is logged in, redirect to login if not
    const user = await User.loggedInUser();
    if (!user) {
        window.location.href = "/account/login.html";
        return;
    }

    // Get tray from localStorage and find items for this stall
    const tray = Tray.loadFromLocalStore()
    const stallId = tray.stall;
    if (!tray) {
        window.location.href = `/browse/hawker.html?stall=${stallId}`;
        return;
    }

    // Get stall from stallId
    const stall = await Stall.getStallById(stallId)
    if (stall == undefined) {
        localStorage.clear("tray")
        window.location.href = "/"
        return;
    }

    // Display stall name
    document.querySelector(".stall-name").textContent = stall.name;

    // Generate HTML for cart items
    const itemsContainer = document.querySelector("#left .partborder");
    let itemsHtml = "";
    for (const [key, value] of tray.items) {
        const menuItem = await MenuItem.getMenuItemByStallIdAndId(stallId, key)
        if (!menuItem) return "";
        itemsHtml = itemsHtml + `
            <div class="menu-item">
                <div class="item-image">
                    <img src="${menuItem.image}" alt="${menuItem.name}" />
                </div>
                <div class="item">
                    <div class="item-header">
                        <div class="quantity-name">
                            <span class="item-quantity">${value}x</span>
                            <span class="item-name">${menuItem.name}</span>
                        </div>
                        <span class="item-price">$${(menuItem.price * value).toFixed(2)}</span>
                    </div>
                    <div class="item-description">${menuItem.description}</div>
                </div>
            </div>
        `;

    }

    // Clear existing items and add new ones
    const existingItems = itemsContainer.querySelectorAll(".menu-item");
    existingItems.forEach(item => item.remove());
    itemsContainer.insertAdjacentHTML("beforeend", itemsHtml);

    // Create order items for calculation
    const orderItems = await tray.asOrderItems()

    // Calculate subtotal using Order class method
    const subtotal = OrderItem.calculatePrice(orderItems)

    // Calculate platform fee (10%) and total
    const fee = subtotal * 0.1;
    const total = subtotal + fee;

    // Display pricing information
    document.querySelector("#pricing .priceamt").textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector("#pricing .price:nth-child(2) .priceamt").textContent = `$${fee.toFixed(2)}`;
    document.querySelector("#totalpaid .priceamt").textContent = `$${total.toFixed(2)}`;

    // Set up event listener for placing the order
    document.getElementById("placeOrder").addEventListener("click", async () => {
        // Get special instructions from input
        const instructions = document.getElementById("instructions").value;

        // Generate unique order number
        const orderNumber = Date.now().toString().slice(-6);

        // Create new Order object
        const order = new Order(
            undefined,
            orderNumber,
            user.id,
            stallId,
            orderItems,
            instructions,
            "received"
        );

        // Show loading state on button
        const placeOrderButton = document.getElementById("placeOrder");
        placeOrderButton.textContent = "Placing Order...";
        placeOrderButton.style.pointerEvents = "none";

        // Save order to database
        await order.write();

        // Remove ordered items from cart
        localStorage.clear("tray")

        // Redirect to order details page
        window.location.href = `/order/index.html?id=${order.id}`;
    });
}

loadCheckout()
