import { Stall } from "/lib/stall.js";
import { MenuItem } from "/lib/menuitem.js";
import { Database } from "/lib/database.js";
import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadStalls() {
    try {
        // Fetch all stalls from Firestore
        const stallsRef = collection(Database, "stalls");
        const snapshot = await getDocs(stallsRef);
        
        const stallsContainer = document.getElementById("stalls");
        stallsContainer.innerHTML = ""; // Clear existing content
        
        // Iterate through all stalls and create elements
        for (const doc of snapshot.docs) {
            const stallData = doc.data();
            const stallId = stallData.id;
            
            // Create stall link and container
            const stallLink = document.createElement("a");
            stallLink.href = `/browse/stall.html?id=${stallId}`;
            
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
            subtext.innerHTML = "<span>Best Sellers:</span>";
            
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
            
            // You could add best-selling items here if needed
            // For now, just show the main stall image
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
    } catch (error) {
        console.error("Error loading stalls:", error);
    }
}

// Load stalls when page loads
loadStalls();