// Step 1: Read the stall ID from the URL params
const params = new URLSearchParams(window.location.search);
let id = params.get("id");

// Step 2: Get the stall using Stall.getStallByID
let stall = Stall.getStallByID(id);

// Step 3: If stall doesn't exist, redirect back one page
if (!stall) {
    window.history.back();
}

// Assuming you have elements with IDs like 'stallName', 'stallDesc', 'stallImg'
document.getElementById("stallName").textContent = stall.name;
document.getElementById("stallDesc").textContent = stall.description;
document.getElementById("stallImg").src = stall.imageURL;

let detailsHTML = "";
detailsHTML += `
<span id="stallimage">
                <img src="${stall.image}" alt="">
            </span>
            <div>
                <h3 id="name">${stall.name}</h3>
                <span>${stall.description}</span>
            </div> `

let dishesHTML = "";
stall.dishes.forEach(dish => {
    dishesHTML += `
    <div class="dish">
            <div class="dishtext">
                <h2>${MenuItem.name}</h2>
                <span id="like"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10aHVtYnMtdXAtaWNvbiBsdWNpZGUtdGh1bWJzLXVwIj48cGF0aCBkPSJNMTUgNS44OCAxNCAxMGg1LjgzYTIgMiAwIDAgMSAxLjkyIDIuNTZsLTIuMzMgOEEyIDIgMCAwIDEgMTcuNSAyMkg0YTIgMiAwIDAgMS0yLTJ2LThhMiAyIDAgMCAxIDItMmgyLjc2YTIgMiAwIDAgMCAxLjc5LTEuMTFMMTIgMmEzLjEzIDMuMTMgMCAwIDEgMyAzLjg4WiIvPjxwYXRoIGQ9Ik03IDEwdjEyIi8+PC9zdmc+" alt="image"></span>
            </div>
            <div id="details">
                <section class="images">
                    <img src="${MenuItem.image}" alt="photo of best seller">
                </section> 
                <div class="dishsubtext">
                        <span id="subtext">
                            <span>${MenuItem.description}</span>
                            <section id="dishbottom">
                                <span id="price">${MenuItem.price}}</span>
                                <button id="addtocart-${MenuItem.id}"><img src="https://cdn-icons-png.flaticon.com/128/3917/3917172.png" alt=""></button>
                            </section>
                        </span>
                </div>    
            </div>       
        </div>
  `;
});

// Insert into container
document.getElementById("dishes").innerHTML = dishesHTML;
document.getElementById("header").innerHTML = detailsHTML;