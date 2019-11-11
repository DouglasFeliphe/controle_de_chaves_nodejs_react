function Pessoa() {
    var nome;

    this.getNome = function () {
        return nome;
    };

    this.setNome = function (value) {
        nome = value;
    };
}


Pessoa.prototype.criarBotao = function (objRecipiente, value) {
    var objButton = document.createElement('INPUT');

    objButton.value = value;
    objButton.style.width = '150px';
    objButton.style.height = '70px';
    objButton.className = 'buttonAp';
    objButton.type = 'button';

    var self = this;
    objButton.onclick = function () { alert(self.getNome()); }

    objRecipiente.appendChild(objButton);//Adiciona o elemento no elemento recipiente.
}

function PessoaJuridica() {
    var cnpj;

    this.getCNPJ = function () {
        return cnpj;
    };

    this.setCNPJ = function (value) {
        cnpj = value;
    };
}

function PessoaFisica() {
    var cpf;

    this.getCPF = function () {
        return cpf;
    };

    this.setCPF = function (value) {
        cpf = value;
    };
}

PessoaFisica.prototype = new Pessoa();
PessoaJuridica.prototype = new Pessoa();

var oListButton1;
var oListButton2;

function document_OnLoad() {
    oPessoaFisica = new PessoaFisica();
    oPessoaJuridica = new PessoaJuridica();

    oPessoaFisica.setCPF('111111');
    oPessoaFisica.setNome('João');

    oPessoaJuridica.setCNPJ('222222');
    oPessoaJuridica.setNome('Empresa Camargos');

    oPessoaFisica.criarBotao(document.body, 'Fisica');
    oPessoaJuridica.criarBotao(document.body, 'Juridica');
}