function primeiroElemento(arr) {
    return arr[0];
}
var numeros = primeiroElemento([1, 2, 3]);
var palavras = primeiroElemento(["olá", "mundo"]);
console.log(numeros);
console.log(palavras);
var Caixa = /** @class */ (function () {
    function Caixa(conteudo) {
        this.conteudo = conteudo;
    }
    return Caixa;
}());
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome) {
        this.nome = nome;
    }
    return Pessoa2;
}());
var pessoa2 = new Pessoa2("Lucas");
var caixa = new Caixa(pessoa2);
console.log(caixa.conteudo.nome);
