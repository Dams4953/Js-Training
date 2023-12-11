let n;
let tab1 = [];
let i = 0;
let NombreDeNombres = prompt("Entrez le nombre de nombres que vous voulez");
let NombresAleatoires = multiRand(NombreDeNombres);

function rand10(){
    return Math.floor (Math.random() * 10) +1;
}

function multiRand(n){
    for (i=0; i < n; i++){
    tab1.push(rand10());
}
    return tab1;
}

if (NombreDeNombres > 0){
    console.log(NombresAleatoires);
}

