class Animais {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    fazerBarulho() {
        console.log(`${this.nome} faz um som.`);
    }
}

class Cachorros extends Animais {
    latir(){
        console.log(`${this.nome} late.`);
    }
}

const meuCachorro = new Cachorros("Plutos");
meuCachorro.fazerBarulho();
meuCachorro.latir();