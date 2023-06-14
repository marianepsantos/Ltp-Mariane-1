class MeuErro extends Error {
  constructor(message) {
    super(message);
    this.name = "Meu Erro";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  mostrarAtributos() {
    try {
      return this.atributos();
    } catch (error) {
      return error;
    }
  }

  atributos() {
    if (
      this.estudante != "" &&
      this.cosplay != "" &&
      this.nota - cosplay != ""
    ) {
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay,
      };
    }
  }
}
const nerdIF = new NerdIF("Mariane", "Vanessa", 9.5);

console.log(nerdIF.mostrarAtributos);

/*console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);*/
