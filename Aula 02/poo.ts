class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(){
        console.log(`Olá meu nome é ${this.nome}, e minha idade é ${this.idade}`)
    }
}

const aluno = new Pessoa("Lucas", 28);
aluno.saudacao();