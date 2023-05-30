class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;
    constructor() {
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new Api;
        this.api.getData("/src/data/data.json").then((data) => {
            this.main = new Main(data, this);
        });


    }

}


//*Encrypter **

class EncrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main, placeholder, app) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Encrypter");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Clik Encrypter", app);
    }
}
// Decrypter **
class DecrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main, placeholder, app) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Clik Decrypter", app);
    }
}


//MAIN ***
class Main {
    encrypterView;
    decrypterView;
    htmlElement;
    app;
    constructor(data, app) {
        this.app = app;

        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));
        this.encrypterView = new EncrypterView(this, data.encrypt, this.app);
        this.decrypterView = new DecrypterView(this, data.decrypt, this.app);
    }
}




class Body {
    htmlElement;
    view;
    inputHtmlElement;
    constructor(view, placeholder) {
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input");
        this.htmlElement.appendChild(this.inputHtmlElement);
        this.htmlElement.placeholder = placeholder;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}
class Header {
    htmlElement;
    view;
    headingHtmlElement;

    constructor(view, headingText) {
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.innerHTML = headingText;
        this.headingHtmlElement.classList.add("view__heading");
        this.htmlElement.appendChild(this.headingHtmlElement);

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}
class Footer {
    htmlElement;
    view;
    buttonHtmlElement;
    constructor(view, footerButton, app) {
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement = this.buttonClicked ;
        this.buttonHtmlElement.innerText = footerButton;
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}




const app = new App();
console.log(app);