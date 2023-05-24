class Api {
    url;
    data = {};
    
    constructor(url) {
        this.url = url;
        this.getData();
    }

    getData(){
        fetch(this.url).then(
            (reponse) => {
                return reponse.json();
            }
        ).then( (data) => {
            this.data = data;
        })
        console.log(this.data);
    }
}