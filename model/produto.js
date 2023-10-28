class Produto {
    // # para alterar o método para privado
    #id
    #nome
    #preco

    //Construtor
    constructor(id, nome, preco) {
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }

    //Gets para acessar os atributos da classe
    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get preco() {
        return this.#preco
    }
}
export default Produto;