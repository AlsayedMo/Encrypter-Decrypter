class Cleaner {
    Clean(whatToClean){   // Definieert een methode genaamd "Clean" met een parameter "whatToClean".
        document.querySelector(whatToClean).innerHTML = "";
        
    }
}
// Selecteert het element op basis van de gegeven selector en wijzigt de innerHTML naar een lege string.
