let cartData = [
    {
        id: 1,
        name: "Hokkien Mee",
        description: "Stir-fried noodles with seafood.",
        price: 6.00,
        quantity: 1,
        image: "https://admin.misstamchiak.com/wp-content/uploads/2016/12/16069838051_c75eb4dd99_o-e1481721167937.jpg"
    },
    {
        id: 2,
        name: "Fried Kway Teow",
        description: "Stir-fried noodles with black sauce.",
        price: 5.50,
        quantity: 1,
        image: "https://www.feastingathome.com/wp-content/uploads/2025/01/Char-Kway-Teow-12.jpg"
    },
    {
        id: 3,
        name: "Oyster Omelette",
        description: "Wok-fried golden eggs with oysters.",
        price: 5.00,
        quantity: 1,
        image: "https://hungrygowhere.com/wp-content/uploads/2023/08/05-ev-best-oyster-omelette-singapore-hougang-fried-oyster-and-kway-teow-hungrygowhere.jpg"
    }
];

function toggleCart() {
    const overlay = document.getElementById('overlay');
    const cartTray = document.getElementById('cartTray');
    overlay.classList.toggle('active');
    cartTray.classList.toggle('active');
}

function updateQuantity(id, change) {
    const item = cartData.find(item => item.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCart();
    }
}

function removeItem(id) {
    cartData = cartData.filter(item => item.id !== id);
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
                    </div>
                `;
    } else {
        cartItemsContainer.innerHTML = cartData.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <div class="item-details">
                            <div class="item-name">${item.name}</div>
                            <div class="item-description">${item.description}</div>
                            <div class="item-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                                <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                                <button class="remove-btn" onclick="removeItem(${item.id})">×</button>
                            </div>
                        </div>
                    </div>
                `).join('');
    }

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('platform').textContent = `$${platform}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}
function checkout() {
    if (cartData.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const { total } = calculateTotals();
    alert(`Proceeding to checkout with total: $${total.toFixed(2)}`);
}

// Initialize cart
renderCart();