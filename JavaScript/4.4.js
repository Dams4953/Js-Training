let inputAr = ['nom1', 'nom2', 'nom3', 'nom4', 'nom5'];
let nomAleatoire = [];
let selectInputAr;
let NombreAléatoire = Math.floor(Math.random() * inputAr.length);
let resultat = pickLearner(inputAr, NombreAléatoire);



function pickLearner (inputAr, n){
    if (n > 0 && n < inputAr.length){

        for (let i = 0; i < n; i++){
            selectInputAr = Math.floor(Math.random() * inputAr.length);
            nomAleatoire.push(inputAr[selectInputAr]);
        }
        return nomAleatoire
    }
}

console.log(resultat);