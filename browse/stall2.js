import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";

async function loadStallPage() {
    // Step 1: Get the ID from URL params FIRST
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");

    // Step 2: Get the stall data
    let stall = await Stall.getStallById(id);
    // Step 3: Check if stall exists
    if (!stall) {
        window.history.back();
        return;  // Added return to stop execution
    }

    // Build stall details HTML
    let detailsHTML = `
        <span id="stallimage">
            <img src="${stall.image}" alt="${stall.name}">
        </span>
        <div>
            <h3 id="name">${stall.name}</h3>
            <span>${stall.description}</span>
        </div>
    `;

    // Build dishes HTML
    let dishesHTML = "";
    stall.menuitems.forEach(menuitem => {
        // use data attributes on button so we can attach handler after
        dishesHTML += `
        <div class="dish">
            <div class="dishtext">
                <h2>${menuitem.name}</h2>
            </div>
            <div class="details">
                <section class="images">
                    <img src="${menuitem.image}" alt="photo of ${menuitem.name}">
                </section> 
                <div class="dishsubtext">
                    <div class="subtext">
                        <div class="description">${menuitem.description}</div>
                        <section class="dishbottom">
                            <span class="dish-price">$${menuitem.price}</span>
                            <button class="addtocart" 
                                data-id="${menuitem.id}"
                                data-name="${escapeHtml(menuitem.name)}"
                                data-desc="${escapeHtml(menuitem.description)}"
                                data-price="${menuitem.price}"
                                data-image="${menuitem.image}">+
                            </button>
                        </section>
                    </div>
                </div>    
            </div>       
        </div>
        `;
    });

    // Insert into containers
    document.getElementById("dishes").innerHTML = dishesHTML;
    document.getElementById("stalldetails").innerHTML = detailsHTML;

    // Save the current stall id so the tray can link back to this stall
    try {
        if (stall && stall.id) localStorage.setItem('lastStall', stall.id);
    } catch (e) {
        console.warn('Unable to save lastStall to localStorage', e);
    }
}

// simple escaping for inline data attributes
function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// attach handlers after DOM insertion
function attachAddToCartHandlers() {
    document.querySelectorAll('.addtocart').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const id = this.dataset.id;
            const name = this.dataset.name || '';
            const description = this.dataset.desc || '';
            const price = parseFloat(this.dataset.price) || 0;
            const image = this.dataset.image || '';
            // call addToCart from tray.js
            try {
                addToCart({ id, name, description, price, image, stall: localStorage.getItem('lastStall') });
            } catch (err) {
                console.error('addToCart not available', err);
            }
        });
    });
}

// after we insert HTML, attach handlers
const originalLoad = loadStallPage;
async function loadStallPageWrapper() {
    await originalLoad();
    attachAddToCartHandlers();
}
// Call the wrapper when page loads
document.addEventListener('DOMContentLoaded', loadStallPageWrapper);