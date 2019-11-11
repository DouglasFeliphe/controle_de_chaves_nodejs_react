
// const Dao = require('./assets/js/DAO/Dao');
const Dao = require('./assets/js/DAO/Dao');

var dadosEditarNome;
var dadosEditarId;

// para uso prático na saída de logs
function puts(elemento) {
    console.log("saída: " + elemento);
}

// método que deixa a primeira letra maiúscula
function deixarLtrMaiuscula(nome) {
    return nome.replace(
        nome.charAt(0),
        nome.charAt(0).toUpperCase()
    );
}

//funcção que adiciona novo usuário ou chave ao sistema,
// inserido os dados em uma lista e adicionando ao input
function adicionarNovosDados(elemento) {

    var elemento = elemento.parentNode.parentNode.parentNode.parentNode;

    var nomeCampo, idCampo, campo, tabela, modalEditar,
        campoEditarNome, campoEditarId;

    var tabelaBanco;

    if (elemento.id == "modalNovoUsuario") {
        nomeCampo = deixarLtrMaiuscula(campoNovoUsuario.value);
        idCampo = campoIdUsuario.value;
        campo = "#campoUsuario";
        tabela = "#tabelaUsuarios";
        modalEditar = "#modalEditarUsuario";
        campoEditarNome = campoEditarUsuario;
        campoEditarId = campoEditarIdUsuario;
        // banco
        tabelaBanco = "Usuario";
    }

    if (elemento.id == "modalNovaChave") {
        nomeCampo = deixarLtrMaiuscula(campoNomeNovaChave.value);
        idCampo = campoIdNovaChave.value;
        campo = "#campoChave";
        tabela = "#tabelaChaves";
        modalEditar = "#modalEditarChave";
        campoEditarNome = campoEditarChave;
        campoEditarId = campoEditarIdChave;
        // banco
        tabelaBanco = "Chave";
    }

    if (nomeCampo != "" && idCampo != "") {

        let novoNome = deixarLtrMaiuscula(nomeCampo);

        //se o novo nome e id ainda não existe...
        if (!jaExiste(tabelaBanco, novoNome, idCampo)) {

            var nrIdentificacao = idCampo;
            // listando o usuário       
            var linha = document.createElement('tr');

            var dados = [
                document.createTextNode(novoNome),
                document.createTextNode(nrIdentificacao),
                botaoEditar(modalEditar, campoEditarNome, campoEditarId),
                botaoExcluir()
            ];

            for (let index = 0; index < dados.length; index++) {
                var col = document.createElement("td");
                // col.className = "lead"; aumentar o tamanho
                col.appendChild(dados[index]);
                linha.appendChild(col);
            }

            document.getElementById(tabela.replace(/#/, "")).appendChild(linha);

            //adicionando os novos dados ao input
            var elemento = document.createElement("option");
            elemento.appendChild(document.createTextNode(novoNome));
            // elemento.value = novoNome;
            document.getElementById(campo.replace(/#/, "")).appendChild(elemento);

            // inserindo no banco...
            Dao.insere(tabelaBanco, nomeCampo, idCampo);

            swal("Ok", "Os dados do(a) " + campo.replace(/#campo/, "") + " " + novoNome + " foram registrados!", {
                icon: "success",
            });

        } else {
            sweetAlert("Oops...", "O Nome ou Nº Matrícula/CPF já existem!", "error");

        }

    } else {
        swal("Oops", "Campos não preenchidos corretamente!", "error");
    }

}

function alterarDados(elemento) {

    var possuiPendencia = false;

    var elemento = elemento.parentNode.parentNode.parentNode.parentNode;

    var novoValorCampo, novoIdCampo, campo, tabela;

    if (elemento.id == "modalEditarChave") {
        novoValorCampo = campoEditarChave.value;
        novoIdCampo = campoEditarIdChave.value;
        campo = "#campoChave";
        tabela = "#tabelaChaves";
        possuiPendencia = chaveFoiSolicitada(dadosEditarNome);
        // banco
        tabelaBanco = "Chave";
    }

    if (elemento.id == "modalEditarUsuario") {
        novoValorCampo = campoEditarUsuario.value;
        novoIdCampo = campoEditarIdUsuario.value;
        campo = "#campoUsuario";
        tabela = "#tabelaUsuarios";
        // possuiPendencia = usuarioJaPegouChave(dadosEditarNome);
        possuiPendencia = false;
        // banco
        tabelaBanco = "Usuario";
    }

    novoValorCampo = deixarLtrMaiuscula(novoValorCampo);

    if (!possuiPendencia) {

        if (!jaExiste(tabelaBanco, novoValorCampo, novoIdCampo)) {
            swal({
                title: "Voce tem certeza?",
                text: "Deseja realmente alterar os dados do(a) " + dadosEditarNome + "?",
                icon: "warning",
                buttons: ["Cancelar", "Sim"],
                dangerMode: false
            })
                .then((willDelete) => {
                    if (willDelete) {

                        //adicionando á lista...

                        var tabelaElemento = tabela.replace(/#/, "");//remove o primeiro "#" 

                        var campos = document.getElementById(tabelaElemento).querySelectorAll("tr td");
                        for (let index = 0; index < campos.length; index++) {
                            if (campos[index].innerHTML == dadosEditarNome) {

                                // atualiza os dados no banco
                                let idAntigo = campos[index + 1].innerHTML;
                                Dao.atualiza(
                                    tabelaBanco,
                                    idAntigo,
                                    novoValorCampo,
                                    novoIdCampo
                                );

                                campos[index].innerHTML = novoValorCampo;
                                campos[index + 1].innerHTML = novoIdCampo;

                                break;
                            }
                        }


                        swal("Ok", "Os dados foram alterados.", {
                            icon: "success",
                        });

                    } else {
                        swal("Operação cancelada!");
                    }
                });
        } else {
            swal("Oops", "O Nome ou Nº Matrícula/CPF já existem!", "error");
        }

    } else {
        swal("Oops", "Não foi possível alterar os dados pois há uma solicitação pendente!", "error");
    }
}

//função que verifica caso o objeto é parente da tabela chaves,
// verifica se a chave foi solicitada.
//caso objeto é parente da tabela usuários,
// verifica se o usuário está com alguma chave
function removerDados(objButtonParentNode) {

    var possuiPendencia = false;
    // valor referente ao nome chave ou usuário
    var valorNome = objButtonParentNode.parentNode.firstChild.innerHTML;
    // referente ao input do 'painel solicitações' 
    var campo;

    let objetoId = objButtonParentNode.parentNode.parentNode.id;

    if (objetoId == "tabelaChaves") {
        campo = "campoChave";
        // possuiPendencia = chaveFoiSolicitada(valorNome);
        possuiPendencia = false;
        tabelaBanco = "Chave";
    } else {
        campo = "campoUsuario";
        // possuiPendencia = possuiPendencia = usuarioJaPegouChave(valorNome);
        possuiPendencia = false;
        tabelaBanco = "Usuario";
    }

    if (!possuiPendencia) {
        swal({
            title: "Voce tem certeza?",
            text: "Uma vez deletado, voce não poderá desfaze-lo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    // removendo da lista
                    objButtonParentNode.parentNode.remove(objButtonParentNode);
                    Dao.remove(tabelaBanco, valorNome);

                    swal("Dados removidos com sucesso!", {
                        icon: "success",
                    });
                } else {
                    swal("Operação cancelada");
                }
            });
    } else {
        swal("Oops", "Não foi possível remover os dados pois há uma solicitação pendente!", "error");
    }
}


//essa função pode ser usada para verificar se
//o usuário ou a chave ja foram criados, inserindo os argumentos corretos
function jaExiste(_tabelaBanco, _nome, _id) {

    let existe = false;

    let saidaNome = Dao.getCollection(_tabelaBanco).findObject({ 'id': _id });
    let saidaId = Dao.getCollection(_tabelaBanco).findObject({ 'nome': _nome });
    console.log("nome: " + saidaNome + " id: " + saidaId);

    if ((saidaId != null) || (saidaNome != null)) {
        existe = true;
    }

    return existe;
}


//botoes
botaoEditar = function (dataTarget, campoNome, campoId) {
    // criando botao editar
    var objButton = document.createElement('INPUT');
    objButton.className = "btn btn-primary";
    objButton.value = "Editar";
    objButton.type = 'button';
    objButton.onclick = function () {
        linha = objButton.parentNode.parentNode;
        var valor1 = linha.getElementsByTagName('td')[0].innerHTML;
        var valor2 = linha.getElementsByTagName('td')[1].innerHTML;
        objButton.dataset.target = dataTarget;
        objButton.dataset.toggle = "modal";
        campoNome.value = valor1;
        campoId.value = valor2;
        // guardando os valores dos campos do modal para serem chamados na hora de editar
        dadosEditarNome = valor1;
        dadosEditarId = valor2;
    }
    return objButton;
}

botaoExcluir = function () {
    var objButton = document.createElement('INPUT');
    objButton.className = "btn btn-warning";
    objButton.value = "Excluir";
    objButton.type = 'button';
    objButton.onclick = function () {
        removerDados(objButton.parentNode);
    }
    return objButton;
}

exports = botaoEditar;
exports = botaoExcluir;
exports = puts;








