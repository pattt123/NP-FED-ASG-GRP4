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
        dishesHTML += `
        <div class="dish">
            <div class="dishtext">
                <h2>${menuitem.name}</h2>
            </div>
            <div id="details">
                <section class="images">
                    <img src="${menuitem.image}" alt="photo of ${menuitem.name}">
                </section> 
                <div class="dishsubtext">
                    <span id="subtext">
                        <span id="description">${menuitem.description}</span>
                        <section id="dishbottom">
                            <span id="price">$${menuitem.price}</span>
                            <button id="addtocart">+</button>
                        </section>
                    </span>
                </div>    
            </div>       
        </div>
        `;
    });

    // Insert into containers
    document.getElementById("dishes").innerHTML = dishesHTML;
    document.getElementById("stalldetails").innerHTML = detailsHTML;
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', loadStallPage);