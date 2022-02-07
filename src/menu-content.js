import blueMilk from "./menu-images/blue-milk.jpg";
import fuzzyTauntaun from "./menu-images/fuzzy-tauntaun.jpg";
import tatooineSunset from "./menu-images/tatooine-sunset.jpeg";
import yatooniBoska from "./menu-images/yatooni-boska.jpg";
import tatooniJunko from "./menu-images/tatooni-junko.jpg";

const createMenu = () => {
    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("h1-m");
    menuHeader.textContent = "Menu";
    const cocktailsHeader = document.createElement("h2");
    cocktailsHeader.classList.add("h2-m");
    cocktailsHeader.textContent = "Cocktails";

    const cocktails = [
        {
            name: "Blue Milk",
            desc: "A classic for a reason",
            pic: blueMilk
        },
        {
            name: "Fuzzy Tauntaun",
            desc: "Numbing foam gives this drink a unique kick",
            pic: fuzzyTauntaun
        },
        {
            name: "Tatooine Sunset",
            desc: "The bittersweet taste of twilight",
            pic: tatooineSunset
        },
        {
            name: "Yatooni Boska",
            desc: "Fermented dewback sweat (trust us — try it)",
            pic: yatooniBoska
        },
        {
            name: "Tatooni Junko",
            desc: "A strong Hutt drink to start the night right",
            pic: tatooniJunko
        }
    ];
    const allMenuItems = document.createElement("div");
    for (let i = 0; i < cocktails.length; i++) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item-container");

        const menuText = document.createElement("div");
        menuText.classList.add("menu-text-container");
        const itemName = document.createElement("p");
        itemName.classList.add("menu-item-name");
        itemName.textContent = cocktails[i].name;
        const itemDesc = document.createElement("p");
        itemDesc.classList.add("menu-item-desc");
        itemDesc.textContent = cocktails[i].desc;
        menuText.append(itemName, itemDesc);

        const picContainer = document.createElement("div");
        picContainer.classList.add("pic-container");
        const itemPic = document.createElement("img");
        itemPic.classList.add("menu-item-pic");
        itemPic.src = cocktails[i].pic;
        picContainer.append(itemPic);
        menuItem.append(menuText, picContainer);

        allMenuItems.append(menuItem);
    }
    const menuContainer = document.createElement("section");
    menuContainer.classList.add("content-container");
    menuContainer.append(menuHeader, cocktailsHeader, allMenuItems);

    const baseContainer = document.querySelector(".base-container");
    baseContainer.after(menuContainer);
}

export default createMenu;