function performSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const hawkers = document.querySelectorAll("#hawkers .hawker");
  let found = false;

  hawkers.forEach(hawker => {
    const name = hawker.querySelector(".hawkertext h2").textContent.toLowerCase();
    const address = hawker.querySelector(".hawkersubtext span").textContent.toLowerCase();

    if (name.includes(input) || address.includes(input)) {
      hawker.style.display = "block"; // or "block" depending on your CSS
      found = true;
    } else {
      hawker.style.display = "none";
    }
  });

  // Handle "No results found"
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
