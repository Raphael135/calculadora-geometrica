const x = 10;
const y = 30;

if (x == y) {
  console.log("x é igual a y");
} else {
  console.log("x não é igual a y");
}

if (x < y) {
  console.log("x é menor do que y");
} else if (x > y) {
  console.log("x é maior do que y");
} else {
  console.log("x é igual a y");
}

const cor = "roxo";

switch (cor) {
  case "vermelho":
    console.log("a cor é vermelho");
    break;
  case "verde":
    console.log("a cor é verde");
    break;
  case "azul":
    console.log("a cor é azul");
    break;
  default:
    console.log("...");
}

const contador = 5;

switch (contador) {
  case 5:
    console.log("5");
  case 4:
    console.log("4");
  case 3:
    console.log("3");
  case 2:
    console.log("2");
  case 1:
    console.log("1");
  default:
    console.log("BOOOOMMM!");
}

const sexo = "não binario";

switch (sexo) {
  case "M":
  case "m":
    console.log("Masculino");
    break;
  case "F":
  case "f":
    console.log("Feminino");
    break;
  default:
    console.log("Parabéns, você é animal seu merda!!!");
}
