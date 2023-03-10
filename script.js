/** Exercice 1 : Jouez À Un Jeu De Devinettes */
/**
 * @author : Maké Gilles-Chris
 * @description :  nous devons deviner le nombre aleatoire choisir par l'ordinateur(Ecrire une fonction qui nous demande d'entrer un nombre et
 *                 en suite comparele nombre entrer a un nombre aleatoire que l'ordinateur fournir)
 * @param : Deviner le numbercomputeur : Number
 * @param : Verifier si le nombre entrer par l'utilisateur est un number
 *          et non un string et superieur à 0 : Object
 * @param : Jeu de Devinettes : function
 * @returns :
 * - la valeur choisir par l'ordinateur : Number
 */

//1ere partie: la fonction pour qui permet d'executer le jeu qui a pour nom PlayTheGame

function playTheGame() {
    // Demander à l'utilisateur s'il souhaite jouer au jeu
    let question = confirm("Souhaitez-vous jouer au jeu ???");
    if (!question) {
        alert("Pas de problème, au revoir");
        return;
    }
    //2. Si sa réponse est vraie, suivez ces étapes :
    //1. Demande à l'utilisateur d'entrer un nombre entre 0 et 10
    let userNumber;
    while (true) {
        userNumber = prompt("Entrez un nombre entre 0 et 10 :");
        if (isNaN(userNumber)) {
            alert("Désolé, ce n'est pas un nombre, essayez à nouveau");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Désolé, ce n'est pas un bon chiffre, essayez à nouveau");
        } else {
            break; // sortie de la boucle
        }
    }

    let computerNumber = Math.round(Math.random() * 10);
    console.log(computerNumber) // afficher la vrai valeur du computeur
    compareNumbers(userNumber, computerNumber); // appel de la fonction de la partie deux
}


function compareNumbers(userNumber, computerNumber) {
    let count = 0; // compteur de tentatives
    while (count < 3) {
        //1. si le nombre de l'utiisateur est egale au nombre de l'ordianteur

        if (userNumber == computerNumber) {

            alert("WINNER"); //afficher winner

            return; // arrêtez le jeu

        } else if (userNumber > computerNumber) {

            alert("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrez un nouveau numéro :");
        } else {
            alert("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrez un nouveau numéro :");
        }
        count++;
    }
    alert("Hors de chances");
}