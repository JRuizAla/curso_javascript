const max = 100;
const min = 1;
const numAleatorio = Math.round(Math.random()*(max-min)+min);

console.log(numAleatorio);

let mensaje = "Escribe un numero entre 1 y 100"
while(true){
  let adivina = prompt(mensaje, "0");
  if(adivina == numAleatorio){
    console.log("adivinaste!");
    break;
  }
  else if (adivina > numAleatorio){
    mensaje = "El numero es menor";
  }else if(adivina < numAleatorio){
    mensaje ="El numero es mayor";
  }else if (adivina === 0){
    console.log("salir");
    break;
  }
}
