//////////////////////////// Metodo forEach /////////////////////////////////
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
  console.log(numero);
});

const letras = ["A", "B", "C", "D", "E"];

letras.forEach(function (letra, indice) {
  console.log(`Indice ${indice}: letra ${letra}`);
});

const tarefas = [
  {
    id: 1,
    texto: "Estudar",
    completo: false,
  },
  {
    id: 2,
    texto: "trabalhar",
    completo: false,
  },
  {
    id: 3,
    texto: "Limpar a casa",
    completo: true,
  },
];

tarefas.forEach(function (tarefa, indice, minhasTarefas) {
  console.log(`${indice + 1}: ${tarefa.texto}`);
  console.log(minhasTarefas);
});

//////////////////////////// Metodo map /////////////////////////////////

const vetorDeTextosDasTarefas = tarefas.map(function (tarefa) {
  return `Tarefa ${tarefa.id}: ${tarefa.texto}`;
});

console.log(vetorDeTextosDasTarefas);

//////////////////////////// Metodo filter /////////////////////////////////

const tarefa1 = tarefas.filter(function (tarefa) {
  return tarefa.id === 1;
});

console.log(tarefa1);

//////////////////////////// Metodo reduce /////////////////////////////////

const vetor = [1, 2, 3, 4]
const valorInicial = 0

const soma = vetor.reduce(function (acumulador, elementoAtual) {
  return acumulador + elementoAtual
}, valorInicial)

console.log(soma)