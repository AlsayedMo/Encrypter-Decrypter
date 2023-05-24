class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.api = new Api("/src/data/data.json");
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.encrypter.encrypt("hello");
        this.decrypter.decrypt("KHOOR");
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.main = new Main();
    }

}




//*Encrypter **

class EncrypterView {
    header;
    body;
    footer;

    constructor() {
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}




// Decrypter **

class DecrypterView {
    header;
    body;
    footer;

    constructor() {
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}




class Renderer {
}
class Cleaner {
}
class Main {
    encrypterView;
    decrypterView;

    constructor() {
        this.encrypterView = new EncrypterView();
        this.decrypterView = new DecrypterView();
    }
}


class Body {
}
class Header {
}
class Footer {
}


const app = new App();
console.log(app);