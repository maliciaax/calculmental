let nbreBonneReponse = 0
let nbreCoupJoue = 0
let mesImagesErreur = [
    "erreur.gif",
    "erreur2.gif",
    "erreur3.gif"
];

let mesImagesReussite = [
    "reussite.gif",
    "reussite2.gif"
];

let messageErreur = document.createElement("p");
messageErreur.innerText = "T'asbuses man..";

let messageReussite = document.createElement("p");
messageReussite.innerText = "Bravo tu gères";

function tirageNombre(min, max) {
    // cette fonction tire un nombre au hasard entre min et max
    let nombre = Math.floor(Math.random() * (max-min+1)) + min
    return nombre
}
function ecrireNombre(ID, valeur) {
    document.querySelector(ID).value = valeur
    // document.getElementById(ID).value = valeur // autre possibilité
}
function lireNombre(ID) {
    return Number(document.querySelector(ID).value)
}
// Partie du code qui s'exécute dès l'appel du script dans la page web
for (let t=0; t < 50; t++) {
    console.log(tirageNombre(5,50))
}

function repondre() {
    nbreCoupJoue++;
    let resultatJuste = lireNombre("#nombreA") - lireNombre("#nombreB");
    let resultatUser = lireNombre("#reponse");

    let resultContainer = document.querySelector("#result-container");

    if (resultatUser === resultatJuste) {
        document.querySelector("#reponse").style.backgroundColor = "#77FF00"; // Vert
        nbreBonneReponse++;
        resultContainer.appendChild(imageAlea(mesImagesReussite)); // GIF réussite
        resultContainer.appendChild(messageReussite.cloneNode(true)); // Message réussite
    } else {
        document.querySelector("#reponse").style.backgroundColor = "#FFAA00"; // Orange
        resultContainer.appendChild(imageAlea(mesImagesErreur)); // GIF erreur
        resultContainer.appendChild(messageErreur.cloneNode(true)); // Message erreur
    }

    reussite(nbreBonneReponse, nbreCoupJoue);
    document.querySelector("#repondre").disabled = true;
}

function reussite(bonne, coup) {
    // modifier la barre de réussite (MetroUI)
    let progression = Math.round((bonne / coup) * 100);
    document.querySelector("#progression").value = progression;
    document.querySelector("#preussite").innerText = "Réussite : " + bonne + " bonne(s) réponse(s) sur " + coup;
}

function init() {
    // Effacer le conteneur de résultats
    let resultContainer = document.querySelector("#result-container");
    resultContainer.innerHTML = "";

    // Réinitialiser les champs de la soustraction
    ecrireNombre("#nombreA", tirageNombre(1, 50));
    ecrireNombre("#nombreB", tirageNombre(1, 50));
    document.querySelector("#reponse").value = "";
    document.querySelector("#reponse").style.backgroundColor = "white";
    document.querySelector("#repondre").disabled = false;

}

function imageAlea(listeImages) {
    let img = document.createElement("img");
    let randomIndex = Math.floor(Math.random() * listeImages.length);
    img.src = listeImages[randomIndex];
    img.style.width = "150px";
    img.style.margin = "10px";
    return img;
}


init()