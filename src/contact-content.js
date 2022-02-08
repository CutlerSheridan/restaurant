const createContact = () => {
    const header = document.createElement("h1");
    header.classList.add("h1-c");
    header.textContent = "Contact";

    const textBlocks = [
        {
            headline: "Located:",
            textLines: [
                "Hangar 215, Mos Eisley Spaceport",
                "On the Great Mesra Plateau",
                "North of Anchorhead",
                "Southeast of the Jundland Wastes"
            ]
        },
        {
            headline: "Hours:",
            textLines: [
                "All day, every day",
                "That's right - even on Life Day"
            ]
        }
    ]
    const contactSections = document.createElement("div");
    for (let i = 0; i < textBlocks.length; i++) {
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("contact-block");
        const headline = document.createElement("h2");
        headline.classList.add("h2-c");
        headline.textContent = textBlocks[i].headline;
        containerDiv.append(headline);
        for (let n = 0; n < textBlocks[i].textLines.length; n++) {
            const newPara = document.createElement("p");
            newPara.textContent = textBlocks[i].textLines[n];
            containerDiv.append(newPara);
        }
        contactSections.append(containerDiv);
    }
    const contactContainer = document.createElement("section");
    contactContainer.classList.add("content-container");
    contactContainer.append(header, contactSections);

    const baseContainer = document.querySelector(".base-container");
    baseContainer.after(contactContainer);
}

export default createContact;