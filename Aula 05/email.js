var ServicoEmail = /** @class */ (function () {
    function ServicoEmail() {
    }
    ServicoEmail.prototype.enviarEmail = function (mensagem) {
        console.log("Enviando e-mail:", mensagem);
    };
    return ServicoEmail;
}());
var UsuarioService = /** @class */ (function () {
    function UsuarioService(servicoEmail) {
        this.servicoEmail = servicoEmail;
    }
    UsuarioService.prototype.registrarUsuario = function (usuario) {
        console.log("Registrando o usu\u00E1rio ".concat(usuario.nome));
        this.servicoEmail.enviarEmail("Bem vindo ".concat(usuario.nome, " ao nosso servi\u00E7o!"));
    };
    return UsuarioService;
}());
var servicoEmail = new ServicoEmail();
var usuarioService = new UsuarioService(servicoEmail);
var usuario = { nome: 'Lucas' };
usuarioService.registrarUsuario(usuario);
