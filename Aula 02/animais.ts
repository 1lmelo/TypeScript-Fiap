class Animal{

    public especie: string;

    constructor(especie: string){
        this.especie = especie;
    }

    getEspecie(): string {
        return this.especie;
    }

    fazerSom() {
        console.log('O animal faz um som.');
    }
}

class Cachorro extends Animal {
    
    fazerSom() {
        console.log(`O ${this.especie} late.`);
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log(`O ${this.especie} mia.`);
    } 
}

const meuAnimal = new Cachorro("Labrador");
meuAnimal.fazerSom();


const meuOutroAnimal = new Gato("Chico");
meuOutroAnimal.fazerSom();