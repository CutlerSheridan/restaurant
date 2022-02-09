import createHome from "./home-content";
import createMenu from "./menu-content";
import createContact from "./contact-content";
import clearDOMBody from "./clear-DOM-body";

const createBase = (() => {
    const contentBase = document.querySelector("#content");
    const baseContainer = document.createElement("section");
    baseContainer.classList.add("base-container");

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
    baseContainer.append(header);
    contentBase.append(baseContainer);
    createHome();
})();

const controlTabs = (() => {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.addEventListener("click", (e) => {
        if (!e.target.classList.contains("active-tab")) {
            tabs.forEach(tab => tab.classList.remove("active-tab"));
            e.target.classList.add("active-tab");
            clearDOMBody();
            switch (e.target.id) {
                case "tab-home":
                    createHome();
                    break;
                case "tab-menu":
                    createMenu();
                    break;
                case "tab-contact":
                    createContact();
                    break;
            }
        }
    }))
})();