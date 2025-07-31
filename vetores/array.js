const vetor = ["A", 10, "oi", 1.5, true];

const numeros = [1, 2, 3, 4, 5];
const frutas = ["maçãs", "laranjas", "peras", "uvas"];
console.log(frutas[0]);

//Adicionar um elemento
frutas[4] = "melancia";
console.log(frutas);

// Alterar o valor de um elemento
frutas[1] = "limão";
console.log(frutas);

// Adicionar  um elemento no final do vetor
frutas.push("morangos");
console.log(frutas);

// Adicionar um elemento no inicio do vetor
frutas.unshift("mangas");
console.log(frutas);

// Remover um elemento no final do vetor
const fruta_removida = frutas.pop(); // Aqui ele retorna o valor removido do final do array em uma constante
console.log(frutas);
console.log(fruta_removida);

// Remover um elemento no começo do vetor
const fruta_removida2 = frutas.shift(); // // Aqui ele retorna o valor removido do começo do array em uma constante
console.log(frutas);
console.log(fruta_removida2);

// Retorna o indice de um elemento no vetor
console.log(frutas.indexOf("peras"));

// Retorna se o elemento passado é um array ou não
console.log(Array.isArray(frutas));
