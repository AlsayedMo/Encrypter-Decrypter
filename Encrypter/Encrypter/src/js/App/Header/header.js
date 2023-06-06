class Header {
    htmlElement;
    view;
    headingHtmlElement;

    constructor(view, headingText) {  // De constructor van de klasse, accepteert de parameters 'view' en 'headingText'.
        this.htmlElement = document.createElement("header");  // Maakt een nieuw HTML-element van het type 'header'.
        this.htmlElement.classList.add("view__header");  // Voegt de CSS-klasse "view__header" toe aan het HTML-element.

        this.headingHtmlElement = document.createElement("h1");  // Maakt een nieuw HTML-element van het type 'h1'.
        this.headingHtmlElement.innerHTML = headingText;  // Stelt de innerHTML van het 'h1'-element in op de waarde van 'headingText'.
        this.headingHtmlElement.classList.add("view__heading");  // Voegt de CSS-klasse "view__heading" toe aan het 'h1'-element.

        this.htmlElement.appendChild(this.headingHtmlElement);  // Voegt het 'h1'-element toe als een kind van het 'header'-element.

        this.view = view;  // Wijs de waarde van de parameter 'view' toe aan de eigenschap 'view'.
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);  // Voer de 'render' methode uit van het 'renderer' object van de 'app' eigenschap van het 'main' object van de 'view' eigenschap.
    }
}
