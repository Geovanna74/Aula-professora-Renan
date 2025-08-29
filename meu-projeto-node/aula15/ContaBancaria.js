class ContaBancaria{
    #saldo;


   constructor(saldoIncial){
       this.#saldo = saldoIncial
       
   }

   depositar(valor){
       if(valor > 0)
           this.#saldo = this.#saldo  + valor

   }

   sacar(valor){
       if(valor <= this.#saldo)
           this.#saldo = this.#saldo - valor
   }

   getExtrato(){
       return this.#saldo
   }
}

module.exports = ContaBancaria;