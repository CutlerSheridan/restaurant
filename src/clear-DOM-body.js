const clearDOMBody = () => {
    const contentDiv = document.querySelector(".content-container");
    const contentContainer = document.createRange();
    contentContainer.selectNode(contentDiv);
    contentContainer.deleteContents();
}

export default clearDOMBody;