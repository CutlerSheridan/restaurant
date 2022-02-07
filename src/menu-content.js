import fuzzyTauntaun from "./menu-images/fuzzy-tauntaun.jpg";

const createMenu = () => {
    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("h1-m");
    menuHeader.textContent = "Menu";
    const cocktailsHeader = document.createElement("h2");
    cocktailsHeader.classList.add("h2-m");
    cocktailsHeader.textContent = "Cocktails";

    const cocktails = [
        {
            name: "Fuzzy Tauntaun",
            desc: "Numbing foam gives this drink a special kick",
            pic: fuzzyTauntaun
        },
        {
            name: "Tester",
            desc: "test test test",
            pic: "../src/index-images/alien-patron.jpeg"
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

        const itemPic = document.createElement("img");
        itemPic.classList.add("menu-item-pic");
        itemPic.src = cocktails[i].pic;
        menuItem.append(menuText, itemPic);

        allMenuItems.append(menuItem);
    }
    const menuContainer = document.createElement("section");
    menuContainer.classList.add("content-container");
    menuContainer.append(menuHeader, cocktailsHeader, allMenuItems);

    const baseContainer = document.querySelector(".base-container");
    baseContainer.after(menuContainer);
}

export default createMenu;