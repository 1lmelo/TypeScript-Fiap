function primeiroElemento<T>(arr: T[]): T {
    return arr[0];
}

let numeros = primeiroElemento([1,2,3]);
let palavras = primeiroElemento(["olá", "mundo"]);

console.log(numeros);
console.log(palavras);


interface TemNome {
    nome: string;
}

class Caixa<T extends TemNome> {
    conteudo: T;

    constructor(conteudo: T){
        this.conteudo = conteudo;
    }
}


class Pessoa2 implements TemNome {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

let pessoa2 = new Pessoa2("Lucas");
let caixa = new Caixa(pessoa2);

console.log(caixa.conteudo.nome);