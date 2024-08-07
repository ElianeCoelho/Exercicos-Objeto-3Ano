//1. Crie um objeto carro com 
//as propriedades marca, modelo e ano. /
//Exiba a marca do carro no console.

let pessoa2 = {
    nome: "Marlene",
    idade: 20,
    profissao: "Profissão"
};
console.log(pessoa2.nome);

let pessoa = {
    nome: "Eliane",
    idade: 21,
    profissao: "Enfermeira"
};
console.log("A prifissão do objeto pessoa é "+ pessoa.profissao)
//6
let produto = {
    nome: "celular",
    preco: 1000,
    categoria: "Eletrônicos"
}
function valorComDesconto(preco){
    return preco * 0.90;
}
console.log(valorComDesconto(produto.preco));
//7
let livro ={
    titulo: "Ágape",
    anoLancamento: 2022,
    diretor:{
        nome:"Almeida",
        idade: 53
    }
}
console.log(livro.diretor.nome);

// Definindo o objeto computador
let computador = {
    marca: "Dell",
    configuracao: {
      processador: "Intel Core i7",
      memoriaRAM: "16GB"
    },
    descricao: function() {
      return "Marca do Computador  " + this.marca + 
      "Mémória RAM de: " + 
      this.configuracao.memoriaRAM;
    }
  };
  
  console.log(computador.descricao());
  
  function exibirConfCOmputador(computador) {
    return "Marca do Computador  " + computador.marca + "Mémória RAM de: " + computador.configuracao.memoriaRAM;
  }

  
  console.log(exibirConfCOmputador(computador))



  function exibirConfCOmputador2(computador) {
    return `Computador marca ${computador.marca}, 
    com processador ${computador.configuracao.processador} e 
    memória RAM de ${computador.configuracao.memoriaRAM}.`;
  }
  console.log(exibirConfCOmputador2(computador))

let cursoOnline = {
  titulo: "Lógica de Programação",
  instrutor: {
    nome: "Joaquim",
    experiencia:"3 anos"
  },
  duracao: "40 horas",
  descricao:function(){
    return `Curso 
    ${cursoOnline.titulo}, 
    tem o instrutor 
    ${cursoOnline.instrutor.nome}.`;
  }
}
  console.log(cursoOnline.descricao());






    let nome = "João";
    let idade = 30;
    let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

    console.log(mensagem);  // Saída: Olá, meu nome é João e eu tenho 30 anos.
