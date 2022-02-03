import createHome from "./home-content";

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

console.log("hello");