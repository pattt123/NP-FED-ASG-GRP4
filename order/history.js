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
        ordersContainer.innerHTML = '';

        for (const order of filteredOrders) {
            const stall = await Stall.getStallById(order.stall);

            // Calculate total items and subtotal
            const totalItems = order.orderitems.reduce((sum, item) => sum + item.qty, 0);
            const subtotal = order.calculateSubtotal();
            const total = subtotal + (subtotal * 0.1); // Including fee

            // Get first 3 items for display
            const displayItems = order.orderitems.slice(0, 3).map(item => `${item.qty}x ${item.name}`).join(', ');
            const moreItems = order.orderitems.length > 3 ? '...' : '';

            // Determine status display
            const statusText = order.status === 'completed' ? 'COMPLETED' : 'ACTIVE';
            const statusClass = order.status === 'completed' ? 'completed' : 'active';

            const orderHtml = `
                <a href="/order/index.html?id=${order.id}" class="order-link">
                    <div class="order border">
                        <div>
                            <div class="ordertitle">
                                <h3>Order #${order.number}</h3>
                                <span class="status ${statusClass}">${statusText}</span>
                            </div>
                            <div class="ordersubtitle">
                                <img src="${stall ? stall.image : 'https://via.placeholder.com/40'}" width="40px" height="40px" />
                                <div class="ordermeta">
                                    <span>${stall ? stall.name : 'Unknown Stall'}</span>
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
    const filterLinks = document.querySelectorAll('#filterbar a');
    filterLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            // Remove selected class from all
            filterLinks.forEach(l => l.classList.remove('selected'));
            // Add to clicked
            link.classList.add('selected');

            const filterText = link.textContent.toLowerCase();
            currentFilter = filterText;

            if (filterText === 'all') {
                filteredOrders = orders;
            } else if (filterText === 'active') {
                filteredOrders = orders.filter(order => order.status !== 'completed');
            } else if (filterText === 'completed') {
                filteredOrders = orders.filter(order => order.status === 'completed');
            }

            await renderOrders();
        });
    });
}

loadOrderHistory();