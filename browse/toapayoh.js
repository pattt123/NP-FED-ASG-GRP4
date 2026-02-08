import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";
import { Database } from "/lib/database.js";
import {
    collection,
    getDocs,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadStalls() {
    try {
        // Fetch stalls for Toa Payoh Food Centre (stall IDs: 894e7361-4ce1-453d-96c3-6f16573ea440 and 09876543-210f-edcb-a987-6543210fedcb)
        const toaPayohStallIds = [
            "894e7361-4ce1-453d-96c3-6f16573ea440", // Bob's Chicken Rice
            "09876543-210f-edcb-a987-6543210fedcb"   // Char Kway Teow King
        ];
        
        const stallsContainer = document.getElementById("stalls");
        stallsContainer.innerHTML = ""; // Clear existing content
        
        for (const stallId of toaPayohStallIds) {
            const stallsRef = collection(Database, "stalls");
            const q = query(stallsRef, where("__name__", "==", stallId));
            const snapshot = await getDocs(q);
            
            for (const doc of snapshot.docs) {
                const stallData = doc.data();
                
                // Create stall link
                const stallLink = document.createElement("a");
                stallLink.href = `/browse/stall.html?id=${stallData.id}`;
                
                const stallDiv = document.createElement("div");
                stallDiv.className = "stall";
                
                // Create stall text section
                const textSection = document.createElement("div");
                textSection.className = "stalltext";
                
                const stallName = document.createElement("h2");
                stallName.textContent = stallData.name;
                
                const stallDescription = document.createElement("p");
                stallDescription.style.color = "var(--color-zinc-700)";
                stallDescription.style.margin = "0.5rem 0";
                stallDescription.textContent = stallData.description;
                
                const subtext = document.createElement("div");
                subtext.className = "stallsubtext";
                
                textSection.appendChild(stallName);
                textSection.appendChild(stallDescription);
                textSection.appendChild(subtext);
                
                // Create images section
                const imagesSection = document.createElement("section");
                imagesSection.className = "images";
                
                // Add stall image (if available)
                if (stallData.image) {
                    const img1 = document.createElement("img");
                    img1.src = stallData.image;
                    img1.alt = stallData.name;
                    imagesSection.appendChild(img1);
                }
                
                // Add placeholder if no image
                if (!stallData.image) {
                    const img = document.createElement("img");
                    img.src = "https://via.placeholder.com/272x192?text=No+Image";
                    img.alt = "No image available";
                    imagesSection.appendChild(img);
                }
                
                stallDiv.appendChild(textSection);
                stallDiv.appendChild(imagesSection);
                
                stallLink.appendChild(stallDiv);
                stallsContainer.appendChild(stallLink);
            }
        }
    } catch (error) {
        console.error("Error loading stalls:", error);
    }
}

// Load stalls when page loads
loadStalls();