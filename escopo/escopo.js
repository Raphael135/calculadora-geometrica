let pokemon = "Charmander";

function evoulir() {
  pokemon = "Charmeleon";
}

console.log(pokemon);
evoulir();
console.log(pokemon);

function criarAnimal() {
  let animal = "Gato";
  return animal;
}

console.log(criarAnimal());

function avaliarNota(nota) {
  if (nota > 60) {
    let aprovado = true;
    let situacao = "Aprovado";
  } else {
    let aprovado = false;
    let situacao = "Reprovado";
  }

  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}

avaliarNota(83);
avaliarNota(49);

function ola() {
  var texto = "Olá, mundo!";
}

// console.log(texto);
