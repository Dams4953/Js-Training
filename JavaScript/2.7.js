let n;
let cpt = 0;
let x = 0;


n = parseInt(prompt("Combien de fois voulez-vous taper un nombre ?"));

for (i = 1; i <= n; i++){
    cpt = parseInt(prompt("tapez un chiffre"));
    x = x + cpt;
} 
console.log(x);
    
