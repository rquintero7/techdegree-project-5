const searchBar = document.getElementById("SearchBar");
let grid = document.querySelectorAll(".grid-container a");
searchBar.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // console.log(searchBox.value);
    for (let i = 0; i < grid.length; i++) {
        const searchInput = grid[i].getAttribute("data-caption");
        if (searchInput.toLowerCase().includes(searchTerm)) {
            grid[i].style.display = "";
        } else {
            grid[i].style.display = "none";
        }
    }
});