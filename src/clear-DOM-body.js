const clearDOMBody = () => {
    const contentDiv = document.querySelector(".content-container");
    if (contentDiv) {
        const contentContainer = document.createRange();
        contentContainer.selectNode(contentDiv);
        contentContainer.deleteContents();
    }
}

export default clearDOMBody;