import { User } from "/lib/user.js";
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

    // Get cart from localStorage (simple array format from browse/tray.js)
    const cartData = (() => {
        try {
            const saved = localStorage.getItem('cart');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Failed to parse cart', e);
            return [];
        }
    })();

    if (!cartData || cartData.length === 0) {
        window.location.href = `/browse/hawker.html`;
        return;
    }

    // Get stall from first item in cart (all items should be from same stall)
    const stallId = cartData[0].stall;
    if (!stallId) {
        window.location.href = `/browse/hawker.html`;
        return;
    }

    // Get stall from stallId
    const stall = await Stall.getStallById(stallId)
    if (stall == undefined) {
        localStorage.removeItem("cart");
        window.location.href = "/";
        return;
    }

    // Display stall name
    document.querySelector(".stall-name").textContent = stall.name;

    // Generate HTML for cart items and create OrderItem objects
    const itemsContainer = document.querySelector("#left .partborder");
    let itemsHtml = "";
    const orderItems = [];

    for (const cartItem of cartData) {
        // Get full menu item details if available
        let menuItem = null;
        try {
            menuItem = await MenuItem.getMenuItemByStallIdAndId(stallId, cartItem.id);
        } catch (e) {
            console.warn('Could not fetch full menu item', e);
        }

        // Use fetched menuItem or fall back to cart item data
        const itemData = menuItem || cartItem;
        
        itemsHtml = itemsHtml + `
            <div class="menu-item">
                <div class="item-image">
                    <img src="${itemData.image}" alt="${itemData.name}" />
                </div>
                <div class="item">
                    <div class="item-header">
                        <div class="quantity-name">
                            <span class="item-quantity">${cartItem.quantity}x</span>
                            <span class="item-name">${itemData.name}</span>
                        </div>
                        <span class="item-price">$${(itemData.price * cartItem.quantity).toFixed(2)}</span>
                    </div>
                    <div class="item-description">${itemData.description}</div>
                </div>
            </div>
        `;

        // Create OrderItem for calculation (name, qty, price)
        const orderItem = new OrderItem(
            itemData.name,
            cartItem.quantity,
            itemData.price || cartItem.price
        );
        orderItems.push(orderItem);
    }

    // Clear existing items and add new ones
    const existingItems = itemsContainer.querySelectorAll(".menu-item");
    existingItems.forEach(item => item.remove());
    itemsContainer.insertAdjacentHTML("beforeend", itemsHtml);

    // Calculate subtotal using Order class method
    const subtotal = OrderItem.calculatePrice(orderItems)

    // Calculate platform fee (fixed $1.49) and total
    const platform = 1.49;
    const total = subtotal + platform;

    // Display pricing information
    document.querySelector("#pricing .priceamt").textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector("#pricing .price:nth-child(2) .priceamt").textContent = `$${platform.toFixed(2)}`;
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
        const savedOrder = await order.write();

        // Debug: log returned value and order instance
        console.log("savedOrder:", savedOrder, "order:", order);

        // Determine order id from return value or instance
        const orderId = savedOrder?.id || order.id || savedOrder?.ref?.id || (savedOrder?.path && savedOrder.path.split('/').pop());

        if (!orderId) {
            console.error("No order id returned. Aborting redirect.");
            // re-enable button so user can retry
            placeOrderButton.textContent = "Place Order";
            placeOrderButton.style.pointerEvents = "auto";
            return;
        }

        // Remove ordered items from cart
        localStorage.removeItem("cart");

        // Redirect to order details page using resolved id
        window.location.href = `/order/index.html?id=${orderId}`;
    });
}

loadCheckout()
