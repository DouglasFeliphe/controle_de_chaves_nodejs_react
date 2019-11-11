
//criando variável estilo global para reutilização
function mostrarPainelSolicitacao () {
    camposDevolucao.style.display = 'block';
}
function esconderPainelSolicitacao () {
    camposDevolucao.style.display = 'none';
}

//registra a solicitação da chave na tabela
function solicitarChave() {

    if (campoChave.value != "") {

        //pegando o dadosUsuario do campo 'chave'
        var chave = document.getElementById("campoChave").value;
        var usuario = document.getElementById("campoUsuario").value;

        var tabela = document.getElementById("tabBody");

        //verificar se existe alguma solicitação na tabela..
        var qtdColunas = tabela.getElementsByTagName("td").length;

        if (!chaveFoiSolicitada(chave) && !usuarioJaPegouChave(usuario)) {

            swal({
                title: "Voce tem certeza?",
                text: "Deseja realmente pegar a chave " + chave + "?",
                icon: "warning",
                buttons: ["Cancelar", "Sim"],
                dangerMode: false
            })
                .then((willDelete) => {
                    if (willDelete) {

                        //voltando a cor das células para o padrão
                        limparCorCelulas();

                        //pegando os campos da tabela e fazendo a separacao da palavra...
                        var nomeUsuario = document.getElementById("campoUsuario").value;

                        //criando os elementos...
                        var linhas = document.createElement("tr");
                        var qtdColunas = tabHead.getElementsByTagName("th").length; // pega a quantidade de colunass na tabela

                        // criando ícone da colunas 'status'
                        var icone = document.createElement("span");
                        icone.className = "glyphicon glyphicon-remove";
                        icone.style.color = "red";
                        icone.style.fontSize = "25px";

                        // adicionando os dados da tabela em uma array
                        var dados =
                            [document.createTextNode(new Date().toLocaleDateString()), document.createTextNode(chave),
                            document.createTextNode(nomeUsuario), document.createTextNode(new Date().toLocaleTimeString()),
                            document.createTextNode("Paulo"), document.createTextNode(" "),
                            document.createTextNode(" "), icone];

                        for (let index = 0; index < qtdColunas; index++) {

                            var colunas = document.createElement("td");

                            //criando ícone para adicionar na colunas 'usuário' e 'chave' da tabela
                            icone = document.createElement("span");
                            if (index == 1) { icone.className = "glyphicon glyphicon-tag"; }
                            if (index == 2) { icone.className = "glyphicon glyphicon-user"; }

                            colunas.appendChild(icone);
                            colunas.appendChild(dados[index]);
                            linhas.appendChild(colunas);

                            if (index == 1 || index == 2) {
                                colunas.style.backgroundColor = "#EC971F";

                                // ANIMAÇÃO
                                colunas.style.animationName = "bounceIn";
                                colunas.style.animationDuration = "0.75s";
                                // colunas.style.backgroundColor = "coral";
                            }

                        }

                        // inserindo chave ao campo de devolução
                        let campoDevolucao = document.getElementById("campoDevolucaoChave");
                        let option = document.createElement("option");
                        option.appendChild(document.createTextNode(chave));
                        campoDevolucao.appendChild(option);

                        // inserindo solicitação na tabela de solicitações
                        tabela.appendChild(linhas);

                        Dao.insereSolicitacao(
                            'Solicitacao',
                            dados[0].textContent,
                            dados[1].textContent,
                            dados[2].textContent,
                            dados[3].textContent,
                            dados[4].textContent,
                            dados[5].textContent,
                            dados[6].textContent,
                            dados[7].className
                        );

                        swal("OK", "A chave " + chave + " foi solicitada!", {
                            icon: "success",
                        });


                    } else {
                        swal("Operação cancelada!");
                    }
                });

        } else {
            sweetAlert("Oops...", "usuário já pegou chave/chave está em uso", "error");
        }

    } else {
        sweetAlert("Oops...", "Nenhum usuário ou chave foram adicionados!\n"
            + "Vá até o painel adicionar e crie um usuário ou uma chave", "error");
    }


}

//função devolver chave
function devolverChave() {

    if (campoDevolucaoChave.value != "") {

        //pegando o dadosUsuario do campo de devolução
        var campo = document.querySelector("#campoDevolucaoChave");
        var chaveDevolvida = campo.value;
        //decisão do usuário
        swal({
            title: "Voce tem certeza?",
            text: "Deseja realmente devolver a chave " + chaveDevolvida + "?",
            icon: "warning",
            buttons: ["Cancelar", "Sim"],
            dangerMode: false
        })
            .then((willDelete) => {
                if (willDelete) {

                    //pegando os elementos da tabela...
                    let tabela = document.querySelector("#tabBody");
                    // varcolunasLinha = tabela.getElementsByTagName("td").length;

                    //percorrendo todas as colunass da tabela...
                    for (let linhas = 0; linhas < tabela.getElementsByTagName("tr").length; linhas++) {

                        var linha = tabela.getElementsByTagName("tr")[linhas];

                        for (let colunas = 0; colunas < linha.getElementsByTagName("td").length; colunas++) {

                            var coluna = linha.getElementsByTagName("td")[colunas];

                            //faz um split nas palavras, removendo todo o 'span' e deixando apenas o dado da célula...
                            var dadosUsuario = coluna.innerHTML;
                            dadosUsuario = dadosUsuario.substr(dadosUsuario.lastIndexOf(">") + 1, dadosUsuario.length);

                            //verifica se a chave em foco está pendente...
                            //destaca a cor de fundo da(s) célula(s) específica para lightgeen.
                            if (dadosUsuario.indexOf(chaveDevolvida) > -1 && linha.getElementsByClassName("glyphicon-remove").length == 1) {

                                coluna.style.backgroundColor = "lightgreen";
                                coluna.style.animationDuration = "0.75s";
                                coluna.style.animationName = "bounceIn";

                                var qtdcolunas = linha.getElementsByTagName('td').length;

                                // removendo o ícone x' e colocando o 'ok'
                                linha.getElementsByTagName('td')[7].childNodes[1].remove();
                                let icone = document.createElement("span");
                                icone.className = "glyphicon glyphicon-ok";
                                icone.style.color = "green";
                                icone.style.fontSize = "25px";

                                //adicionando os dados das colunas de devolução...
                                var dados = [
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    document.createTextNode(new Date().toLocaleTimeString()),
                                    document.createTextNode("Nara"),
                                    icone
                                ];


                                //percorrendo apenas os 3 últimos campos da linha 
                                for (let index = qtdcolunas - 3; index < qtdcolunas; index++) {
                                    linha.getElementsByTagName('td')[index].appendChild(dados[index]);
                                    // console.log("dados[index]: "+dados[index].textContent);                                   
                                }

                                campo.remove(campo.selectedIndex);

                                Dao.atualizaSolicitacao(
                                    'Solicitacao',
                                    chaveDevolvida,
                                    dados[5].textContent,
                                    dados[6].textContent,
                                    dados[7].className
                                );


                                swal("OK", "A chave '" + chaveDevolvida + "' foi devolvida!", "success");

                                break;

                            }

                        }
                    }

                    limparCorCelulas();

                } else {
                    swal("Operação cancelada!");
                }
            });

    } else {
        swal("Oops", "Nenhuma chave foi solicitada!", "error");
    }

}



//Função registrar solicitação
function pesquisarSolicitacao() {

    //voltando a cor das células para o padrão
    limparCorCelulas();

    //pegando os dados do campo de pesquisa
    var pesquisa = document.getElementById("campoPesquisa").value;

        //deixa a primeira letra em maiúsculo
        pesquisa = pesquisa.replace(pesquisa.charAt(0), pesquisa.charAt(0).toUpperCase());

        //pega a quantidade de células na tabela
        var tabela = document.getElementById("tabBody");

        for (let linhas = 0; linhas < tabela.getElementsByTagName("tr").length; linhas++) {

            var linha = tabela.getElementsByTagName("tr")[linhas];

            for (let colunas = 0; colunas < linha.getElementsByTagName("td").length; colunas++) {

                var coluna = linha.getElementsByTagName("td")[colunas];

                //caso o dado pesquisado exista na tabela...
                //destaca a cor de fundo da(s) célula(s) específica para lightgreen. 
                var dadosPesquisa = coluna.innerHTML;
                dadosPesquisa = dadosPesquisa.substr(dadosPesquisa.lastIndexOf(">") + 1, dadosPesquisa.length);

                if (dadosPesquisa.indexOf(pesquisa) > -1) {

                    coluna.style.backgroundColor = "lightblue";

                    var value = $("#campoPesquisa").val().toLowerCase();
                    $("#tabBody tr").filter(function () {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });

                }

            }
        }


   

}




//funcão que percorre a tabela para verificar se existe solicitação pendente do usuário,
// contendo seu nome e status 'x'.
function usuarioJaPegouChave(usuario) {

    var usuarioPegouChave = false;

    //pegando os elementos da tabela...
    var tabela = document.getElementById("tabBody");
    // varcolunasLinha = tabela.getElementsByTagName("td").length;

    //percorrendo todas as colunass da tabela...
    for (let linhas = 0; linhas < tabela.getElementsByTagName("tr").length; linhas++) {

        var linha = tabela.getElementsByTagName("tr")[linhas];

        for (let colunas = 0; colunas < linha.getElementsByTagName("td").length; colunas++) {

            var coluna = linha.getElementsByTagName("td")[colunas];

            //caso o nome do usuário ja existe na tabela e há uma solicitação pendente...
            //destaca a cor de fundo da(s) célula(s) específica para lightsalmon. 
            var dadosUsuario = coluna.innerHTML;
            dadosUsuario = dadosUsuario.substr(dadosUsuario.lastIndexOf(">") + 1, dadosUsuario.length);

            if (dadosUsuario.indexOf(usuario) > -1 && linha.getElementsByClassName("glyphicon-remove").length == 1) {
                coluna.style.backgroundColor = "lightsalmon";
                usuarioPegouChave = true;
                break;
            }

        }
    }
    return usuarioPegouChave;
}



//função que verifica se a chave foi solicitada percorrendo a tabela em busca
//dos dados 'chave' e 'ícone de pendencia'
function chaveFoiSolicitada(chave) {

    var foiSolicitada = false;

    for (let index = 0; index < campoDevolucaoChave.length; index++) {
        var chaveCampoSolicitacao = campoDevolucaoChave[index].value;
        if (chave == chaveCampoSolicitacao)
            foiSolicitada = true;
        break;

    }
    return foiSolicitada;
}


function limparCampoPesquisa() {
    document.getElementById("campoPesquisa").value = "";
};

function limparCorCelulas() {
    var tabela = document.getElementById("tabBody");

    for (let index = 0; index < tabela.getElementsByTagName("td").length; index++) {
        tabela.getElementsByTagName("td")[index].style.backgroundColor = "white";
    }

};

function sair() {
    swal({
        title: "Deseja realmente sair?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                swal("Pronto!", "O backup foi concluído", {
                    icon: "success",
                });

                let remote = require('electron').remote;
                let w = remote.getCurrentWindow();
                w.close();

            } else {
                swal("Operação cancelada!");
            }
        });
}

