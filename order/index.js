import { User } from "/lib/user.js";
import { Order } from "/lib/order.js";
import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";

/**
 * Loads the order details page by retrieving the order from the URL parameter,
 * validating user authentication, and displaying order information.
 */
async function loadOrder() {
    // Check if user is logged in, redirect to login if not
    const user = await User.loggedInUser();
    if (!user) {
        window.location.href = "/account/login.html";
        return;
    }

    // Get order ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');
    if (!orderId) {
        window.location.href = "/";
        return;
    }

    // Fetch the order
    const order = await Order.getOrderById(orderId);
    if (!order) {
        window.location.href = "/";
        return;
    }

    // Update order number in header
    document.querySelector("header h1").textContent = `Order #${order.orderNumber}`;

    // Update status
    const statusElement = document.querySelector("header .status");
    statusElement.textContent = order.status.toUpperCase();
    statusElement.className = `status ${order.status}`;

    // Get stall information
    const stall = await Stall.getStallById(order.stallId);
    if (stall) {
        // Update stall name in items section
        document.querySelector("#items span").textContent = stall.name;
    }

    // Display order items
    const itemsContainer = document.querySelector("#items");
    let itemsHtml = `<h2>Items</h2><span>${stall ? stall.name : 'Stall'}</span>`;
    for (const orderItem of order.orderitems) {
        itemsHtml += `
            <div class="item">
                <span><span class="itemqty">${orderItem.qty}x</span> ${orderItem.name}</span>
                <span class="itemprice">$${orderItem.price.toFixed(2)}</span>
            </div>
        `;
    }
    itemsContainer.innerHTML = itemsHtml;

    // Display special instructions
    const instructionsElement = document.querySelector("#left .part.border p");
    instructionsElement.textContent = order.specialInstructions || "No special instructions.";

    // Calculate and display pricing
    const subtotal = order.calculateSubtotal();
    const fee = subtotal * 0.1; // 10% platform fee
    const total = subtotal + fee;

    document.querySelector("#pricing .price:nth-child(1) .priceamt").textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector("#pricing .price:nth-child(2) .priceamt").textContent = `$${fee.toFixed(2)}`;
    document.querySelector("#totalpaid .priceamt").textContent = `$${total.toFixed(2)}`;

    // Show success popup
    alert("Order placed successfully");
}

loadOrder();