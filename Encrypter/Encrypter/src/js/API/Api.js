class Api {
    async getData(url) {     // Definieert een asynchrone functie genaamd "getData" met een URL-parameter.
        let dataToBeReturned = {};
        await fetch(url).then(
            (repsponse) => {
                return repsponse.json();  // Zet de response om naar een JSON-object en geeft het terug.
            }
        ).then((data) => {
            dataToBeReturned = data.data;
        })
        return dataToBeReturned; // Geeft de waarde van "dataToBeReturned" terug als het resultaat van de functie.
    }
    }


