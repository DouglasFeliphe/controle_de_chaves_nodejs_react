
// var read = require('read-file-utf8');
// var loki = require('lokijs');
// var db = new loki('loki.json');
// var banco = read(__dirname + '/loki.json');
// db.loadJSON(banco);
// var tabelaChildren = db.getCollection('children');
// var campos = [];
// campos = tabelaChildren.data;
// var children = db.addCollection('children');


// document.querySelector('#btnTeste').addEventListener('click', function (evt) {
// evt.preventDefault();
// let data = {
//     name: document.querySelector('#name').value,
//     legs: document.querySelector('#legs').value
// }
// children.insert(data);
// db.save();
// console.log(dbn);
// alert('dados inseridos com sucesso!');
// // resetando campos
// document.querySelector('#form-teste').reset()
// });

const Dao = require('./assets/js/DAO/Dao');

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

ready(function () {

    //criar o banco caso não exista
    if (Dao.getCollection("Usuario") == null) {
        Dao.criarTabela("Usuario");
        console.log("tabela Usuário criada!");
    };

    if (Dao.getCollection("Chave") == null) {
        Dao.criarTabela("Chave");
        console.log("tabela Chave criada!");
    };

    // if (Dao.getCollection("Solicitacao") == null) {
    //     Dao.criarTabela("Solicitacao");
    //     console.log("tabela Solicitação criada!");
    // };

    listarDados(
        "Chave",
        "#tabelaChaves",
        "#modalEditarChave",
        campoEditarChave,
        campoEditarIdChave
    );

    listarDados(
        "Usuario",
        "#tabelaUsuarios",
        "#modalEditarUsuario",
        campoEditarUsuario,
        campoEditarIdUsuario
    );

    listarDados(
        "Chave",
        "#tabelaReservas",
        "",
        "",
        ""
    );

});



function listarDados(_colection, _tabela, _modalEditar, _campoEditar, _campoEditarId) {

    let usuarios = Dao.getCollection(_colection).data;
    let tabela = document.querySelector(_tabela);

    usuarios.forEach(usuario => {

        if (_tabela != '#tabelaReservas') {

            let linha = document.createElement('TR');

            dados = [
                document.createTextNode(usuario.nome),
                document.createTextNode(usuario.id),
                botaoEditar(_modalEditar, _campoEditar, _campoEditarId),
                botaoExcluir()
            ];

            for (let index = 0; index < dados.length; index++) {
                let col = document.createElement("TD");
                col.appendChild(dados[index]);
                linha.appendChild(col);
            };
            tabela.appendChild(linha);

        } else {

            let col = document.createElement("TD");
            let elemento = document.createElement('img');
            elemento.id = 'btnReservar';
            elemento.src = 'assets/img/chave.jpg';
            elemento.dataset.toggle = 'modal';
            elemento.dataset.target = '#modalReservas';
            elemento.style.width = '150px';
            elemento.style.height = '150px';
            col.textContent = usuario.nome;
            linha.appendChild(col);
            linha.appendChild(elemento);
            tabela.appendChild(linha);

        }



    });


}

// <h1><a href="#" id="btnReservar" class="" data-toggle="modal" data-target="#modalReservas"
//                     data-html="true" style="text-decoration: none"> <img src="assets/img/chave.jpg" alt="no_image"
//                       width="150" height="150"> </a></h1>



