let min;
let max;
let current;



min = prompt("saisissez un chiffre");
max = prompt("saisissez un autre chiffre");
current = prompt("saisissez un dernier chiffre");

    if ((current > min) && ( current < max)){
            console.log("ok");
        } else if (min > max){
            console.log("t'es pas net non ...");
        } else {
            console.log("pas ok");
        }

