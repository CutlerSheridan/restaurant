const createHomePage = (() => {
    const smallTileContent = [
        "url(\"/src/index-images/drinks.jpg\")",
        "cheap drinks lorum ipsum",
        "live music lorum ipsum",
        'url("/src/index-images/maz-band.jpg")',
        'url("/src/index-images/patron.jpeg")',
        "all welcome lorum ipsum"
    ];
    let smallTileTracker = 4;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < smallTileContent.length; i++) {
        const newTile = document.createElement("div");
        newTile.classList.add("small-tile");
        if (smallTileTracker > 2) {
            newTile.classList.add("img-tile");
            newTile.style.backgroundImage = smallTileContent[i];
        } else {
            newTile.classList.add("desc-tile");
            newTile.textContent = smallTileContent[i];
        }
        if (smallTileTracker === 4) {
            smallTileTracker = 1;
        } else {
            smallTileTracker++;
        }
        fragment.append(newTile);
    }
    const tilesGrid = document.querySelector(".grid-container");
    tilesGrid.childNodes[0].before(fragment);
})();