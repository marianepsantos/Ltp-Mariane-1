class MeuErro extends Error {
  constructor(message) {
    super(message);
    his.name = "Meu Erro";
  }
}

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos() {
    try {
      return this.atributos();
    } catch (error) {
      return error;
    }
  }
  
  atributos() {
    if (this.nome != "" && this.idade != "" && this.especie != "") {
      return {
        nome: this.nome,
        idade: this.idade,
        especie: this.especie,
      };
    } else {
      throw new MeuErro("Mensagem de erro");
    }
  }
}

const meuAnimal = new Animal("Luna", 3, "cachorro");
const atributos = meuAnimal.mostrarAtributos();

console.log(meuAnimal.mostrarAtributos());

// Imprimindo os atributos
/*console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.especie);*/
