import Drinks from "./index-images/drinks.jpg";
import MazBand from "./index-images/maz-band.jpg";
import AlienPatron from "./index-images/alien-patron.jpeg";

const createHome = () => {
    const splashTile = document.createElement("div");
    splashTile.id = "splash-tile";
    const splashRestaurantName = document.createElement("h1");
    splashRestaurantName.classList.add("splash-text", "h1-h");
    splashRestaurantName.textContent = "Chalmun's Spaceport Cantina";
    const splashRestaurantSlogan = document.createElement("h2");
    splashRestaurantSlogan.classList.add("splash-text", "h2-h");
    splashRestaurantSlogan.textContent = "Live music! Cheap drinks!";
    const splashLocation = document.createElement("h3");
    splashLocation.classList.add("splash-text", "h3-h");
    splashLocation.textContent = "Mos Eisley, Tatooine";
    splashTile.append(splashRestaurantName, splashRestaurantSlogan, splashLocation);

    const photoCaption = document.createElement("span");
    photoCaption.classList.add("photo-caption");
    photoCaption.textContent = "Figrin D'an and the Modal Nodes";

    const gridContainer = document.createElement("section");
    gridContainer.classList.add("grid-container");
    const smallTileContent = [
        `url("${Drinks}")`,
        "Looking to get drunk cheap?  You won't find cheaper, stronger drinks anywhere on Tatooine!",
        "Toast your success or drown your sorrows while listening to the hottest bands in town!",
        `url("${MazBand}")`,
        `url("${AlienPatron}")`,
        "We don't care what you are. Mind your own business and you're welcome anytime! \n (No droids)"
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
    testimonials.id = "testimonials";
    const testimonialsHeader = document.createElement("h2");
    testimonialsHeader.id = "testimonials-header";
    testimonialsHeader.textContent = "Testimonials";
    testimonials.append(testimonialsHeader);
    const testimonialsArray = [
        '"I do all my business here. A loud, rough bar perfect for private conversations."',
        '"If you can\'t make it to MY cantina, Chalmun\'s in Mos Eisley is the next best thing."',
        '"I play gigs everywhere on Tatooine but nothing beats Chalmun\'s."',
        '"Solo chuba killya."'
    ];
    const attirbutionsArray = [
        "- Figrin D'an",
        "- Oga Garra, Owner of Oga's Cantina on Batuu",
        "- Merl Tosche, Owner of Tosche Station",
        "- Jabba the Hutt"
    ];
    for (let i = 0; i < 4; i++) {
        const testimonyWrapper = document.createElement("div");
        testimonyWrapper.classList.add("testimony-wrapper");
        if (i % 2 === 0) {
            testimonyWrapper.classList.add("testimony-left");
        }
        const testimony = document.createElement("div");
        testimony.classList.add("testimony");
        testimony.textContent = testimonialsArray[i];
        const attribution = document.createElement("p");
        attribution.classList.add("attribution");
        attribution.textContent = attirbutionsArray[i];
        testimonyWrapper.append(testimony, attribution);
        testimonials.append(testimonyWrapper);
    }
    gridContainer.append(fragment);

    const homeContainer = document.createElement("section");
    homeContainer.classList.add("content-container");
    homeContainer.append(splashTile, photoCaption, gridContainer, testimonials);

    const baseContainer = document.querySelector(".base-container");
    baseContainer.after(homeContainer);
};

export default createHome;