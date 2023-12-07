let min = prompt("saisissez un chiffre");
let max = prompt("saisissez un autre chiffre");
let current = prompt("saisissez un dernier chiffre");

    if ((current > min) && ( current < max)){
            console.log("ok");
        } else if (min > max){
            console.log("t'es pas net non ...");
        } else {
            console.log("pas ok");
        }

