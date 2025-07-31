function dizer_ola(nome) {
  console.log(`Olá ${nome}!`);
}

dizer_ola("Raphael");
dizer_ola("Pedro");
dizer_ola("Luiz");

function criar_nome_complemeto(nome, sobrenome, sexo) {
  if (sexo == "M" || sexo == "m") {
    return console.log(`Sr. ${nome} ${sobrenome}`);
  } else if (sexo == "F" || sexo == "f") {
    return console.log(`Sra. ${nome} ${sobrenome}`);
  } else {
    return console.log(`${nome} ${sobrenome}`);
  }
}

const nomeCompleto = criar_nome_complemeto("Raphael", "Rodolfo", "m");

// Funções Seta
const dizer_oi = () => console.log("oi");
dizer_oi();

///////////////////////////////////////

const area = (trabalho) => {
  return console.log(`Você trabalha na área de ${trabalho}`);
};
area("Suporte de TI");

///////////////////////////////////////

const somar = (a, b) => {
  return a + b;
};

const resultado = somar(10, 70);
console.log(resultado);
