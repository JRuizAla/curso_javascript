const maximo: number = 100;
const minimo: number = 1;
const numMagico: number = Math.round(
  Math.random() * (maximo - minimo) + minimo
);

console.log(numMagico);

let texto: string = "Escribe un numero entre 1 y 100";
while (true) {
  let guess: number = Input();
  if (guess === numMagico) {
    console.log("adivinaste!");
    break;
  } else if (guess === 0) {
    console.log("salir");
    break;
  } else if (guess > numMagico) {
    texto = "El numero es menor";
  } else if (guess < numMagico) {
    texto = "El numero es mayor";
  }
}
