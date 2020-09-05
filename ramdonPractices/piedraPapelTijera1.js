function versus(option1, option2){
    if(option1 != option2){
        if (option1 === "Piedra" && option2 === "Tijera"){
            console.log("Humano gana.");
            console.log(option1 + " gana a " + option2);
        }
        else if (option1 === "Papel" && option2 === "Piedra"){
            console.log("Humano gana.");
            console.log(option1 + " gana a " + option2);
        }
        else if (option1 === "Tijera" && option2 === "Papel"){
            console.log("Humano gana.");
            console.log(option1 + " gana a " + option2);
        }
        else{
            console.log("Maquina gana.");
            console.log(option2 + " gana a " + option1);
        }
    }
    else{
        console.log("Empate.")
    }
}