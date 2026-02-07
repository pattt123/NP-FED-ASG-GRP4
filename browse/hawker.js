import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";

async function loadHawkerPage() {
    // Step 1: Get the ID from URL params FIRST
    const params = new URLSearchParams(window.location.search); 
    let id = params.get("id");
    // Step 2: Get the hawker data
    let hawker = await Stall.getStallById(id);
    // Step 3: Check if hawker exists
    if (!hawker) {
        window.history.back();
        return;  // Added return to stop execution
    }

    // Build hawker details HTML

    let detailsHTML = `
        <span id="hawkerimage">
            <img src="${hawker.image}" alt="${hawker.name}">
        </span>                             
        <div>
            <h3 id="name">${hawker.name}</h3>
            <span>${hawker.description}</span>
        </div>
    `;
    // Build stalls HTML
    let stallsHTML = "";
    hawker.stalls.forEach(stall => {
        stallsHTML += `
        <div class="stall">
            <div class="stalltext">
                <h2>${stall.name}</h2>
                <span id="like"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB
                c3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtdGh1bWJzLXVwLWljb24gbHVjaWRlLXRodW1icy11cCI+PHBhdGggZD0iTTE1IDUuODggMTQgMTBoNS44M2EyIDIyIDAgMCAxIDEuOTIgMi41NmwtMi4zMyA4QTIgMiAwIDAgMSAxNy41IDIySDRhMiAyIDAgMCAxLTItdjhhMiAyIDAgMCAxIDItMmgyLjc2YTIgMiAwIDAgMCAxLjc5LTEuMTFMMTIgMmEzLjEzIDMuMTMgMCAwIDEgMyAzLjg4WiIvPjxwYXRoIGQ9Ik03IDEwdjEyIi8+PC9zdmc+" alt="image"></span>
            </div>
            <div id="details">
                <section class="images">
                    <img src="${stall.image}" alt="photo of ${stall.name}">
                </section>
