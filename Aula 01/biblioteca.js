var Livro = /** @class */ (function () {
    function Livro(titulo, anoPublicacao) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.exibirDetalhes = function () {
        console.log("Livro: ".concat(this.titulo, ", publicado em ").concat(this.anoPublicacao));
    };
    return Livro;
}());
var livroFavorito = new Livro("Harry Potter", 2003);
livroFavorito.exibirDetalhes();
