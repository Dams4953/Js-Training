let ObjetSerieTélé = {};

 

function askTvSerie(){
    ObjetSerieTélé.nom = prompt("nom de la série :");
    ObjetSerieTélé.anneeDeProduction = prompt("Année de production :");
    ObjetSerieTélé.acteurs = prompt("Noms des acteurs");

    return ObjetSerieTélé;
}

let sériesTélé = askTvSerie();
let JSONsériesTélé = JSON.stringify(sériesTélé,null,2);

console.log(JSONsériesTélé);