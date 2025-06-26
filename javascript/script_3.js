// Message d'accueil
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Demander le nombre d'étages
let etages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

//  fonction qui teste si une valeur est "Not a Number"(NaN)
if (isNaN(etages) || etages <= 0) {
    console.log("Petit beunet, saisi un nombre entier positif.");
} else {


    for (let i = 1; i <= etages; i++) {
        // Variable pour construire la ligne actuelle
        let ligne = "";

        // Boucle interne 1 : ajouter les espaces pour centrer la pyramide
        // Nombre d'espaces = nombre total d'étages - numéro étage actuel
        for (let j = 0; j < (etages - i); j++) {
            ligne += " ";  // += : opérateur de concaténation (ajouter à la string existante)
        }

        // Boucle interne 2 : ajouter les caractères '#' pour l'étage actuel
        // Nombre de '#' = numéro de l'étage actuel
        for (let k = 0; k < i; k++) {
            ligne += "#";
        }

        // Afficher la ligne complète dans la console
        console.log(ligne);
    }
}
