class Footer {
    htmlElement;
    view;
    buttonHtmlElement;
    app;
    constructor(view, footerButton) {
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked;
        this.buttonHtmlElement.innerText = footerButton;
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}