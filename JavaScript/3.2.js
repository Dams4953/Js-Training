let Tab1 = [1, 2, 3, 4, 5];
let Tab2 = [100, 101, 102];
let i;
let somme = 0;
let moyenne = 0;
const taille1 = 5;
const taille2 = 3;

for (i = 0; i < Tab1.length; i++){
    somme += Tab1 [i];
    moyenne = somme / taille1;
} console.log(moyenne);

moyenne = 0;
somme = 0;

for (i = 0; i < Tab2.length; i++){
    somme += Tab2 [i];
    moyenne = somme / taille2;
} console.log(moyenne);