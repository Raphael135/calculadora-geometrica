const pessoa = {
  nome: "Raphael",
  sobrenome: "Rodolfo",
  idade: 22,
  passatempos: ["Ler livro", "Video game", "Anime"],
  endereco: {
    Rua: "Rua Maquerobi",
    Cidade: "São Paulo",
    Estado: "SP",
  },
};

// Acessar uma propriedade
console.log(pessoa.nome);

// Acessar um elemento de uma propriedade vetor
console.log(pessoa.passatempos[0]);

// Acessar uma propriedade de uma propriedade
console.log(pessoa.endereco.Estado);

// Definir uma nova propriedade
pessoa.email = "gomesrodolfo656@gmail.com";
console.log(pessoa);

// Criar um vetor de objetos
const tarefas = [
  {
    id: 1,
    texto: "Tirar o lixo",
    completo: false,
  },
  {
    id: 2,
    texto: "Varrer o chão",
    completo: true,
  },
  {
    id: 3,
    texto: "Lavar o carro",
    completo: false,
  },
];

// Acessar uma propriedade de um elemento especifico
console.log(tarefas[1].texto);

// Formatar um objeto em formato JSON
console.log(JSON.stringify(tarefas));
console.log(JSON.stringify(pessoa));

const carrinho1 = {
  dadosCliente: {
    nome: "Bruno",
    sobrenome: "Silva",
    idade: 36,
    email: "brunosilva03@gmail.com",
  },
  enderecoCliente: {
    rua: "Avenida Jabaquara",
    cidade: "São Pàulo",
    estado: "SP",
  },
  itensComprados: {
    item1: "Controle de Xbox",
    item2: "Monitor full hd LG",
    item3: "Xbox Series s",
    item4: "Assinatura 1 mês de GamePass",
  },
  precoItens: {
    precoItem1: 449,
    precoItem2: 969,
    precoItem3: 2500,
    precoItem4: 60,
  },
};

console.log(carrinho1.dadosCliente.email);
console.log(carrinho1.enderecoCliente.rua);
console.log(carrinho1.itensComprados.item3);
console.log(carrinho1.precoItens.precoItem3);

const total = carrinho1.precoItens.precoItem2 + carrinho1.precoItens.precoItem3;
console.log(`Total da compra: ${total}`);

console.log(JSON.stringify(carrinho1));
