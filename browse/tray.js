

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}


let cartData = [];

// Load cart from localStorage or use sample data
function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cartData = JSON.parse(savedCart);
    } else {
        cartData = sampleCart;
        saveCart();
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartData));
}

/**
 * Add an item to the cart. `item` should be an object with at least
 * `{id, name, price}`. Optional: `description`, `image`, `stall`.
 */
function addToCart(item) {
    if (!item || !item.id) return;
    // ensure cartData is loaded
    if (!cartData) cartData = [];
    const existing = cartData.find(i => String(i.id) === String(item.id));
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        const stallId = item.stall || localStorage.getItem('lastStall') || '';
        cartData.push({
            id: item.id,
            name: item.name || '',
            description: item.description || '',
            price: Number(item.price) || 0,
            quantity: 1,
            image: item.image || '',
            stall: stallId
        });
    }
    saveCart();
    renderCart();

    // open the tray so user sees the update
    try {
        const overlay = document.getElementById('overlay');
        const cartTray = document.getElementById('cartTray');
        if (overlay && cartTray) {
            overlay.classList.add('active');
            cartTray.classList.add('active');
        }
    } catch (e) { /* ignore */ }
}

function toggleCart() {
    const overlay = document.getElementById('overlay');
    const cartTray = document.getElementById('cartTray');
    overlay.classList.toggle('active');
    cartTray.classList.toggle('active');
}

function updateQuantity(id, change) {
    const item = cartData.find(item => String(item.id) === String(id));
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        saveCart();
        renderCart();
    }
}

function removeItem(id) {
    cartData = cartData.filter(item => String(item.id) !== String(id));
    saveCart();
    renderCart();
}

function calculateTotals() {
    const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const platform = 1.49;
    const total = subtotal + platform;
    return { subtotal, platform, total };
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const { subtotal, platform, total } = calculateTotals();

    if (cartData.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some items to get started</p>
                <button class="browse-btn" onclick="toggleCart(); window.location.href='/index.html'">Browse Hawkers</button>
            </div>
        `;
    } else {cartItemsContainer.innerHTML = cartData.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                        <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="remove-btn" onclick="removeItem('${item.id}')">×</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('platform').textContent = `$${platform.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    if (cartData.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const { total } = calculateTotals();
    // Save current cart and navigate to checkout page
    saveCart();
    window.location.href = `/order/checkout.html`;
}

function goToLastStall() {
    try {
        const last = localStorage.getItem('lastStall');
        if (last) {
            // close the tray first
            const overlay = document.getElementById('overlay');
            const cartTray = document.getElementById('cartTray');
            if (overlay) overlay.classList.remove('active');
            if (cartTray) cartTray.classList.remove('active');
            window.location.href = `/browse/stall.html?id=${encodeURIComponent(last)}`;
            return;
        }
    } catch (e) {
        console.warn('goToLastStall error', e);
    }
    // fallback
    window.history.back();
}

// Initialize cart when page loads
loadCart();
renderCart();