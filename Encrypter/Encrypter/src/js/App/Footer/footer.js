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
        //Het onclick-event van het button element wordt ingesteld op de buttonClicked methode.
        this.buttonHtmlElement.onclick = this.buttonClicked;
        //De tekst van het button element wordt ingesteld op de waarde van de footerButton parameter.
        this.buttonHtmlElement.innerText = footerButton;
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    buttonClicked = () => {
        //In de buttonClicked methode wordt de getDataFromBody methode aangeroepen
        // op de view property van het Footer object.
        this.view.getDataFromBody();
    }
}