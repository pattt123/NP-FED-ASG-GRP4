import { User } from "../lib/user.js";

function performSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const hawkers = document.querySelectorAll("#hawkers .hawker");
  let found = false;

  hawkers.forEach(hawker => {
    const name = hawker.querySelector(".hawkertext h2").textContent.toLowerCase();
    const address = hawker.querySelector(".hawkersubtext span").textContent.toLowerCase();

    if (name.includes(input) || address.includes(input)) {
      hawker.style.display = "block";
      found = true;
    } else {
      hawker.style.display = "none";
    }
  });

  let noResults = document.getElementById("noResults");
  if (!found) {
    if (!noResults) {
      noResults = document.createElement("div");
      noResults.id = "noResults";
      noResults.textContent = "No results found...";
      noResults.style.marginTop = "20px";
      noResults.style.fontWeight = "bold";
      document.getElementById("hawkers").appendChild(noResults);
    }
  } else {
    if (noResults) {
      noResults.remove();
    }
  }
}

async function initializeAuthButtons() {
  const authButtonsContainer = document.getElementById("authButtons");
  
  try {
    const user = await User.loggedInUser();
    
    // DEBUG: Log what user object looks like
    console.log("User object:", user);
    console.log("User is null/undefined:", user === null || user === undefined);
    
    if (user && user.id) {  // Check for actual user ID or relevant property
      console.log("User is logged in");
      // User is logged in - show Account Settings
      authButtonsContainer.innerHTML = `
        <a href="../account/index.html" id="accountsettings">Account Settings</a>
      `;
      
      // If user has a stall, add Edit Stall button
      if (user.stall && user.stall !== "") {
        const editStallButton = document.createElement("a");
        editStallButton.href = "../vendor/edit/index.html";
        editStallButton.id = "editstall";
        editStallButton.textContent = "Edit Stall";
        authButtonsContainer.appendChild(editStallButton);
      }
    } else {
      console.log("User is NOT logged in");
      // Keep default login button
    }
  } catch (error) {
    console.error("Error checking login status:", error);
  }
}

document.addEventListener("DOMContentLoaded", initializeAuthButtons);

window.performSearch = performSearch;