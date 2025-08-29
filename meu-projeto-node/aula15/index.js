import Pessoa from "./Pessoa.js";



// const objPessoa = new Pessoa();
// objPessoa.corfavorita = "Roxo";
// let corfavorita = objPessoa.corfavorita;

// console.log("A cor favorita é: ", corfavorita);

// const objPessoa2 = new Pessoa();
// objPessoa2.altura = "1,61";
// let altura = objPessoa2.altura;

// console.log("A altura é: ", altura);






// const objPessoa3 = new Pessoa(); 
// objPessoa3.definirNome("Lily") 
// let nome = objPessoa3.pegarNome(); 

// console.log(nome); 


// const objPessoa4 = new Pessoa(); 
// objPessoa4.definirIdade("19") 
// let idade = objPessoa4.pegarIdade(); 

// console.log(idade); 




import ContaBancaria from "./ContaBancaria.js";


let saldoIncial = 100000;
const contaBancaria = new ContaBancaria(saldoIncial)

contaBancaria.depositar(20000);
let extrato = contaBancaria.getExtrato();
console.log("Meu saldo é: " , extrato);

contaBancaria.sacar(5000);
console.log("Meu saldo é: ", contaBancaria.getExtrato());







