import { User } from "/lib/user.js";
import { Order } from "/lib/order.js";
import { Stall } from "/lib/stall.js";

/**
 * Loads the order history page by fetching user orders, displaying them,
 * and setting up the status filter functionality.
 */
async function loadOrderHistory() {
    // Check if user is logged in, redirect to login if not
    const user = await User.loggedInUser();
    if (!user) {
        window.location.href = "/account/login.html";
        return;
    }

    // Fetch all orders for the user
    const orders = await Order.getOrdersByUser(user.id);

    // Store orders for filtering
    let filteredOrders = orders;
    let currentFilter = 'all';

    // Function to render orders
    const renderOrders = async () => {
        const ordersContainer = document.getElementById('orders');
        if (!ordersContainer) return;
        ordersContainer.innerHTML = '';

        if (!filteredOrders || filteredOrders.length === 0) {
            ordersContainer.insertAdjacentHTML('beforeend', `
                <div class="empty-orders">
                    <p>No orders yet. Your past orders will appear here.</p>
                </div>
            `);
            return;
        }

        for (const order of filteredOrders) {
            const stall = await Stall.getStallById(order.stall);

            const totalItems = (order.orderitems || []).reduce((sum, item) => sum + (item.qty || 0), 0);
            const subtotal = typeof order.calculateSubtotal === 'function' ? order.calculateSubtotal() : 0;
            const total = subtotal + (subtotal * 0.1);

            const displayItems = (order.orderitems || []).slice(0, 3).map(item => `${item.qty}x ${item.name}`).join(', ');
            const moreItems = (order.orderitems || []).length > 3 ? '...' : '';

            const statusClass = order.status === 'completed' ? 'completed' : 'active';
            const statusText = order.status === 'completed' ? 'COMPLETED' : 'ACTIVE';

            const orderNumber = order.number || (order.id ? order.id.slice(-6) : '—');

            const orderHtml = `
                <a href="/order/index.html?id=${order.id}" class="order-link">
                    <div class="order border">
                        <div>
                            <div class="ordertitle">
                                <h3>Order #${orderNumber}</h3>
                                <span class="status ${statusClass}">${statusText}</span>
                            </div>
                            <div class="ordersubtitle">
                                <img src="${stall && stall.image ? stall.image : 'https://via.placeholder.com/40'}" width="40" height="40" alt="stall image" />
                                <div class="ordermeta">
                                    <span>${stall && stall.name ? stall.name : 'Unknown Stall'}</span>
                                    <span>${totalItems} items | $${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <hr />
                            <div class="orderitems">
                                ${displayItems}${moreItems}
                            </div>
                        </div>
                    </div>
                </a>
            `;
            ordersContainer.insertAdjacentHTML('beforeend', orderHtml);
        }
    };

    // Initial render
    await renderOrders();

    // Set up filter functionality
    const filterLinks = Array.from(document.querySelectorAll('#filterbar a'));
    filterLinks.forEach(link => {
        link.setAttribute('href', '#');
        link.setAttribute('role', 'button');
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            filterLinks.forEach(l => l.classList.remove('selected'));
            link.classList.add('selected');

            const filterText = (link.textContent || '').trim().toLowerCase();
            currentFilter = filterText;

            if (filterText === 'all') {
                filteredOrders = orders;
            } else if (filterText === 'active') {
                filteredOrders = orders.filter(order => order.status !== 'completed');
            } else if (filterText === 'completed') {
                filteredOrders = orders.filter(order => order.status === 'completed');
            } else {
                filteredOrders = orders;
            }

            await renderOrders();
        });
    });
}

loadOrderHistory();