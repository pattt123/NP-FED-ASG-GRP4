// Sample food cart data
const sampleCart = [
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic pizza with tomato, mozzarella, and basil",
        price: 12.99,
        quantity: 1,
        image: "https://via.placeholder.com/80?text=Pizza"
    },
    {
        id: 2,
        name: "Cheeseburger",
        description: "Juicy beef patty with cheddar cheese and lettuce",
        price: 9.49,
        quantity: 2,
        image: "https://via.placeholder.com/80?text=Burger"
    },
    {
        id: 3,
        name: "Caesar Salad",
        description: "Crisp romaine, parmesan, and Caesar dressing",
        price: 7.99,
        quantity: 1,
        image: "https://via.placeholder.com/80?text=Salad"
    },
    {
        id: 4,
        name: "French Fries",
        description: "Golden crispy fries with sea salt",
        price: 3.99,
        quantity: 3,
        image: "https://via.placeholder.com/80?text=Fries"
    }
];

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
        saveCart();
        renderCart();
    }
}

function removeItem(id) {
    cartData = cartData.filter(item => item.id !== id);
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
    document.getElementById('platform').textContent = `$${platform.toFixed(2)}`;
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

// Initialize cart when page loads
loadCart();
renderCart();