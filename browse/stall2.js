import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";

async function loadStallPage() {
  
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");

    let stall = await Stall.getStallById(id);
 
    if (!stall) {
        window.history.back();
        return;  
    }


    let detailsHTML = `
        <span id="stallimage">
            <img src="${stall.image}" alt="${stall.name}">
        </span>
        <div>
            <h3 id="name">${stall.name}</h3>
            <span>${stall.description}</span>
        </div>
    `;

   
    let dishesHTML = "";
    stall.menuitems.forEach(menuitem => {
       
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

 
    document.getElementById("dishes").innerHTML = dishesHTML;
    document.getElementById("stalldetails").innerHTML = detailsHTML;

 
    try {
        if (stall && stall.id) localStorage.setItem('lastStall', stall.id);
    } catch (e) {
        console.warn('Unable to save lastStall to localStorage', e);
    }
}


function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


function attachAddToCartHandlers() {
    document.querySelectorAll('.addtocart').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const id = this.dataset.id;
            const name = this.dataset.name || '';
            const description = this.dataset.desc || '';
            const price = parseFloat(this.dataset.price) || 0;
            const image = this.dataset.image || '';
          
            try {
                addToCart({ id, name, description, price, image, stall: localStorage.getItem('lastStall') });
            } catch (err) {
                console.error('addToCart not available', err);
            }
        });
    });
}


const originalLoad = loadStallPage;
async function loadStallPageWrapper() {
    await originalLoad();
    attachAddToCartHandlers();
}

document.addEventListener('DOMContentLoaded', loadStallPageWrapper);