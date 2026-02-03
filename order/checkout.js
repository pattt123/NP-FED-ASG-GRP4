import { User } from "/lib/user.js";
import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";
import { Order } from "/lib/order.js";
import { OrderItem } from "/lib/orderitem.js";

import { Database } from "/lib/database.js";


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

    // Get stall ID from URL parameters, redirect if not provided
    const params = new URLSearchParams(window.location.search);
    const stallId = params.get("stall");
    if (!stallId) {
        window.location.href = "/";
        return;
    }

    // Retrieve stall data, redirect if stall not found
    const stall = await Stall.getStallById(stallId);
    if (!stall) {
        window.location.href = "/";
        return;
    }

    // Get cart from localStorage and find items for this stall
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const stallCart = cart.find(c => c.stallId === stallId);
    if (!stallCart || !stallCart.items.length) {
        window.location.href = `/browse/hawker.html?stall=${stallId}`;
        return;
    }

    // Set back button link
    document.getElementById("back").href = `/browse/hawker.html?stall=${stallId}`;

    // Display stall name
    document.querySelector(".stall-name").textContent = stall.name;

    // Load stall menu items
    await stall.read();
    const menuItems = {};
    stall.menuitems.forEach(item => {
        menuItems[item.id] = item;
    });

    // Generate HTML for cart items
    const itemsContainer = document.querySelector("#left .partborder");
    const itemsHtml = stallCart.items.map(cartItem => {
        const menuItem = menuItems[cartItem.id];
        if (!menuItem) return "";

        return `
            <div class="menu-item">
                <div class="item-image">
                    <img src="${menuItem.image}" alt="${menuItem.name}" />
                </div>
                <div class="item">
                    <div class="item-header">
                        <div class="quantity-name">
                            <span class="item-quantity">${cartItem.qty}x</span>
                            <span class="item-name">${menuItem.name}</span>
                        </div>
                        <span class="item-price">$${(menuItem.price * cartItem.qty).toFixed(2)}</span>
                    </div>
                    <div class="item-description">${menuItem.description}</div>
                </div>
            </div>
        `;
    }).join("");

    // Clear existing items and add new ones
    const existingItems = itemsContainer.querySelectorAll(".menu-item");
    existingItems.forEach(item => item.remove());
    itemsContainer.insertAdjacentHTML("beforeend", itemsHtml);

    // Create order items for calculation
    const orderItems = stallCart.items.map(cartItem => {
        const menuItem = menuItems[cartItem.id];
        return OrderItem.fromMenuItem(menuItem, cartItem.qty);
    });

    // Calculate subtotal using Order class method
    const tempOrder = new Order(null, null, null, null, orderItems, null, null);
    const subtotal = tempOrder.calculateSubtotal();

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
        const updatedCart = cart.filter(c => c.stallId !== stallId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Redirect to order details page
        window.location.href = `/order/index.html?id=${order.id}`;
    });
}

