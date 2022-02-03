const createHome = (() => {
    const splashTile = document.createElement("div");
    splashTile.id = "splash-tile";
    const splashRestaurantName = document.createElement("h1");
    splashRestaurantName.classList.add("splash-text");
    splashRestaurantName.id = "restaurant-name";
    splashRestaurantName.textContent = "Mos Eisley Cantina";
    const splashRestaurantSlogan = document.createElement("h2");
    splashRestaurantSlogan.classList.add("splash-text");
    splashRestaurantSlogan.id = "restaurant-slogan";
    splashRestaurantSlogan.textContent = "Live music! Cheap drinks!";
    splashTile.append(splashRestaurantName, splashRestaurantSlogan);

    const photoCaption = document.createElement("span");
    photoCaption.classList.add("photo-caption");
    photoCaption.textContent = "Figrin D'an and the Modal Nodes";

    const gridContainer = document.createElement("section");
    gridContainer.classList.add("grid-container");
    const smallTileContent = [
        "url(\"/src/index-images/drinks.jpg\")",
        "Looking to get drunk cheap?  You won't find cheaper, stronger drinks anywhere on Tatooine!",
        "Toast your success or drown your sorrows while listening to the hottest bands in town!",
        'url("/src/index-images/maz-band.jpg")',
        'url("/src/index-images/patron.jpeg")',
        "We don't care what you are — Mind your own business and you're welcome anytime \n (No droids)"
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
    const testimonials = document.createElement("div");
    testimonials.classList.add("big-tile");
    testimonials.id = "testimonials";
    const testimonialsArray = [
        "I love it so much, my favorite bar",
        "I do all my business dealings here",
        "Can't be beat if you're looking for a good time",
        "Not for the faint-hearted"
    ];
    for (let i = 0; i < 4; i++) {
        const testimony = document.createElement("div");
        testimony.classList.add("testimony");
        testimony.textContent = testimonialsArray[i];
        testimonials.append(testimony);
    }
    gridContainer.append(fragment, testimonials);

    const homeFragment = document.createDocumentFragment();
    homeFragment.append(splashTile, photoCaption, gridContainer);
    return {homeFragment};
})();

const createBase = (() => {
    const contentBase = document.querySelector("#content");

    const header = document.createElement("header");
    const tabHome = document.createElement("div");
    tabHome.classList.add("active-tab");
    tabHome.id = "tab-home";
    tabHome.textContent = "About";
    const tabMenu = document.createElement("div");
    tabMenu.id = "tab-menu";
    tabMenu.textContent = "Menu";
    const tabContact = document.createElement("div");
    tabContact.id = "tab-contact";
    tabContact.textContent = "Contact";
    const tabs = [tabHome, tabMenu, tabContact];
    tabs.forEach(tab => {
        tab.classList.add("tab");
        header.append(tab);
    });
    contentBase.append(header, createHome.homeFragment);
})();