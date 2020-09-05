var option1 = "Piedra";
var option2 = "Papel";
switch (true){
    case (option1 === option2):
        console.log("Empate");
        break
    case (option1 === "Piedra" && option2 === "Tijera"):
        console.log("Humano gana.");
        console.log(option1 + " gana a " + option2);
        break
    case (option1 === "Papel" && option2 === "Piedra"):
        console.log("Humano gana.");
        console.log(option1 + " gana a " + option2);
        break
    case (option1 === "Tijera" && option2 === "Papel"):
        console.log("Humano gana.");
        console.log(option1 + " gana a " + option2);
        break
    default:
        console.log("Maquina gana.");
        console.log(option2 + " gana a " + option1);
}