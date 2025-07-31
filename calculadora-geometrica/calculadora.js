const pi = 3.14;
let opcao = "";

do {
  opcao = prompt(
    "Calculadora Geométrica\n" +
      "Escolha um dos calculos abaixo:\n" +
      "1 - Área do triângulo\n" +
      "2 - Área do retângulo\n" +
      "3 - Área do quadrado\n" +
      "4 - Área do trapézio\n" +
      "5 - Área do círculo\n" +
      "\nSair"
  );

  switch (opcao) {
    case "1":
      let base1 = parseFloat(prompt("Informe o número da base:"));
      let altura1 = parseFloat(prompt("Informe o número da altura:"));

      function triangulo() {
        return (base1 * altura1) / 2;
      }
      alert("O resultado da área do triângulo é: " + triangulo());
      break;
    case "2":
      let base2 = prompt("Informe o número da base:");
      let altura2 = prompt("Informe o número da altura:");

      function retangulo() {
        return base2 * altura2;
      }
      alert("O resultado da área do retângulo é: " + retangulo());
      break;
    case "3":
      let lado = prompt("Informe o lado:");

      function quadrado() {
        return lado * lado;
      }
      alert("O resultado do quadrado é: " + quadrado());
      break;
    case "4":
      let baseM = prompt("Informe o número da base maior:");
      let baseN = prompt("Informe o número da base menor:");
      let altura = prompt("Informe o número da base altura:");

      function trapezio() {
        return ((baseM + baseN) * altura) / 2;
      }
      alert("O resultado do trapézio é: " + trapezio());
    case "5":
      let n1 = prompt("Informe o número do círculo:");

      function numeroPi() {
        return pi * n1 * n1;
      }
      alert("O resultado do círculo é: " + numeroPi());
      break;
    default:
      alert("Informações inválida!");
  }
} while (opcao !== "sair");
