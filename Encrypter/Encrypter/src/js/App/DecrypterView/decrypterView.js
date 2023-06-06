// Decrypter **
class DecrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, placeholder) {
        //Deze regels code creëren een nieuw HTML-element van het type <article> 
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");

        this.main = main;
        this.type = "DECRYPT";
        //Het render-gedeelte van de code voegt het gecreëerde htmlElement toe aan het
        // main.htmlElement, waardoor het zichtbaar wordt op de webpagina.
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        
        //Dit stelt de DecrypterView in staat om de header, body en footer van de weergave te beheren en te
        // communiceren met de bijbehorende componenten.
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Clik Decrypter");
    }
    getDataFromBody() {
        //Hiermee wordt de cipher-methode van het main-object
        // aangeroepen en wordt de tekst versleuteld of ontcijferd, 
        this.main.cipher(this.body.text, this.type);
    }
    changeBody(decryptedText) {

        //Hiermee wordt de inhoud van de body van
        // de DecrypterView bijgewerkt met de gedecodeerde tekst.
        this.body.changeBody(decryptedText);
    }

}