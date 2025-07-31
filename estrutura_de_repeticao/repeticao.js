const usuario = {
  nome: "Julia",
  sobrenome: "Gonçalves",
  idade: 36,
  enderecoDeEntrega: {
    rua: "Antonio Fagundes",
    cidade: "São Paulo",
    Estado: "SP",
    numeroDaCasa: 203,
  },
  carrinhoUsuaruio: {
    Iphone12: 2500,
    foneDeOuvido: 300,
  },
};

usuario.carrinhoUsuaruio.capaDeIphone = 100;

console.log(usuario.nome);
console.log(usuario.enderecoDeEntrega.rua);
console.log(usuario.carrinhoUsuaruio.Iphone12);

const totalDaCompra =
  usuario.carrinhoUsuaruio.Iphone12 +
  usuario.carrinhoUsuaruio.foneDeOuvido +
  usuario.carrinhoUsuaruio.capaDeIphone;

console.log(`Total da compra: ${totalDaCompra}`);
console.log(usuario.carrinhoUsuaruio);
console.log(usuario.carrinhoUsuaruio.capaDeIphone);

usuario.email = "juliagon15@gmail.com";
console.log(usuario);
console.log(usuario.email);
