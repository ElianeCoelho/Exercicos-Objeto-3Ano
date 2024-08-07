let nome = prompt("Qual é o seu nome?");

console.log("Olá, " + nome + "!");

let idade = prompt("Quantos anos você tem?");

idade = parseInt(idade);

console.log("Você tem " + idade + " anos.");

//conversão Strings
console.log(parseInt("42"));          // 42 (decimal)
console.log(parseInt("101", 2));      // 5 (binário para decimal)
console.log(parseInt("2A", 16));      // 42 (hexadecimal para decimal)
console.log(parseInt("10.5"));        // 10 (ignora a parte decimal)
console.log(parseInt("hello"));       // NaN (não é um número válido)
