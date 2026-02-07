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

    // Get order ID and optional success flag from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');
    const showSuccess = urlParams.get('success') === '1';
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

    // Update order number and header
    const orderNumber = order.number || order.orderNumber || (order.id ? order.id.slice(-6) : '—');
    const headerH1 = document.querySelector("header h1");
    if (headerH1) headerH1.textContent = `Order #${orderNumber}`;

    // Update status
    const statusElement = document.querySelector("header .status");
    if (statusElement) {
        statusElement.textContent = (order.status || '').toString().toUpperCase();
        statusElement.className = `status ${order.status || ''}`;
    }

    // Get stall information
    const stallId = order.stallId || order.stall || '';
    const stall = stallId ? await Stall.getStallById(stallId) : undefined;
    const itemsHeaderSpan = document.querySelector("#items span");
    if (stall && itemsHeaderSpan) {
        itemsHeaderSpan.textContent = stall.name;
    }

    // Display order items
    const itemsContainer = document.querySelector("#items");
    if (itemsContainer) {
        let itemsHtml = `<h2>Items</h2><span>${stall && stall.name ? stall.name : 'Stall'}</span>`;
        for (const orderItem of (order.orderitems || [])) {
            const price = typeof orderItem.price === 'number' ? orderItem.price : 0;
            const qty = orderItem.qty || 0;
            itemsHtml += `
                <div class="item">
                    <span><span class="itemqty">${qty}x</span> ${orderItem.name}</span>
                    <span class="itemprice">$${price.toFixed(2)}</span>
                </div>
            `;
        }
        itemsContainer.innerHTML = itemsHtml;
    }

    // Display special instructions (check both property names)
    const instructionsElement = document.querySelector("#special-instructions");
    if (instructionsElement) {
        const instructions = order.specialInstructions || order.instructions || "No special instructions.";
        instructionsElement.textContent = instructions;
    }

    // Calculate and display pricing
    const subtotal = order.calculateSubtotal();
    const platform = 1.49; // Fixed platform fee
    const total = subtotal + platform;

    document.querySelector("#pricing .price:nth-child(1) .priceamt").textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector("#pricing .price:nth-child(2) .priceamt").textContent = `$${platform.toFixed(2)}`;
    document.querySelector("#totalpaid .priceamt").textContent = `$${total.toFixed(2)}`;

    // Show success popup only when redirected from checkout
    if (showSuccess) {
        try {
            alert("Order Successful");
        } catch (e) {
            console.log('Unable to show success alert', e);
        }
    }
}

loadOrder();