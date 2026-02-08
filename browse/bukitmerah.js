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

        const bukitMerahStallIds = [
            "fedcba98-7654-3210-fedc-ba9876543210", 
            "f6e5d4c3-b2a1-0987-6543-210fedcba987"  
        ];
        
        const stallsContainer = document.getElementById("stalls");
        stallsContainer.innerHTML = ""; 
        
        for (const stallId of bukitMerahStallIds) {
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
                
             
                const imagesSection = document.createElement("section");
                imagesSection.className = "images";
                
              
                if (stallData.image) {
                    const img1 = document.createElement("img");
                    img1.src = stallData.image;
                    img1.alt = stallData.name;
                    imagesSection.appendChild(img1);
                }
                
             
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


loadStalls();