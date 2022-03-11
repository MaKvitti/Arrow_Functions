/*Utilizando Arrow Functions, por meio da escopo lexico, conseguimos "fixar" o this para o 
contexto da classe ModuoDeImpressão e não mais de forma dinamica.
*/
class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }
    imprime(nomes) {
        nomes.forEach((nome) => {
            console.log(`${this._codigo}: ${nome}`);
        });
   }
}

const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);

//- Testes das propriedades.
const soma = (numero1, numero2) => numero1 + numero2; 
const mult = (numero1, numero2) => numero1 * numero2; 

console.log(soma(10,5));
console.log(mult(10,9));

const TesteNomeArrow = () => {};
console.log(TesteNomeArrow.name);
console.log(soma.name);
