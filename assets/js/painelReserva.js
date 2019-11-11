// const Dao = require('./DAO/Dao');
// popover

// listando as chaves no painel de reserva
let tbody = document.querySelector('#tabelaReservas tbody');
let linha = document.createElement('TR');
let coluna = document.createElement('TD');



// desencadeando evento ao abrir o modal
var triggerElement, botaoModal, elementoPai;

$('#modalReservas').on('shown.bs.modal', function (event) {
    // Button that triggered the modal
    triggerElement = event.relatedTarget;
    elementoPai = triggerElement.parentNode;
});

document.querySelector('#btnModalReservar').addEventListener('click', function () {

    let dados = [
        campoReservaUsuario.value,
        campoReservaHorarioInicio.value,
        campoReservaHorarioFim.value
    ]

    let label = [
        "Usuário:  ",
        "Chave:  ",
        "Das:  ",
        "Ás:  "
        //  "Horário Início: ",
        // "Horário Fim: "
    ]

    //  removendo botão em estado ao reservar
    while (elementoPai.firstChild) {
        elementoPai.removeChild(elementoPai.firstChild);
    }

    if (!elementoPai.firstChild) {
        // criando elementos e inserindo os dados neles
        // --botaoModal com popover
        botaoModal = document.createElement('a');
        botaoModal.className = 'glyphicon glyphicon-tags';
        botaoModal.style.color = '#F0AD4E';
        botaoModal.dataset.toggle = 'popover';
        botaoModal.dataset.target = '';
        botaoModal.dataset.html = true;
        botaoModal.title = "<b>Reserva</b>";
        botaoModal.onmouseenter = "font-size: 35px";

        let conteudo = "";

        for (const d in dados) {
            // conteudo += "<div>"+"<strong>" + label[d] + "<span class='label label-warning lg'>" + dados[d] + "</span>" + "<br>";
            // conteudo += "<div class='conteudo'>"+"<strong>" + label[d] + "<span class='label label-info lg'>" + dados[d] + "</span>" + "</div>";
            conteudo +=
                "<tr>"
                + "<th >" + label[d] + "</th>"
                + "<th class='label label-warning'>" + dados[d] + "</th>" +
                "</tr>";
        }

        conteudo = "<table class=''>" + conteudo + "</table>";

        // criando botão
        botaoEntregar = "<div>"
            + "<button id='btnEntregarReserva' class='btn btn-warning' onclick='entregarReserva(this)'>Entregar</button>"
            + "</div>";

        conteudo = "<div>" + conteudo + "</div>";


        // botaoModal.dataset.content = conteudo;
        botaoModal.dataset.content = conteudo + "<hr>" + botaoEntregar;

        $(botaoModal).popover();

        elementoPai.appendChild(botaoModal);

    }

});

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

function criarBotao(arguments) {
    // body
}

function entregarReserva(elementoPai) {

    elementoPai = elementoPai.parentNode.parentNode.parentNode.parentNode;

    // removendo o botão com estado 'reservado'
    while (elementoPai.firstChild) {
        elementoPai.removeChild(elementoPai.firstChild);
    }

    // criando novo botão
    let novoElemento = document.createElement('IMG');
    novoElemento.src = 'assets/img/chave.jpg';
    novoElemento.style.width = '150px';
    novoElemento.style.height = '150px';
    novoElemento.dataset.content = "";
    novoElemento.dataset.toggle = 'modal';
    novoElemento.dataset.target = '#modalReservas';
    novoElemento.dataset.originalTitle = "";
    novoElemento.title = '';

    elementoPai.appendChild(novoElemento);
}









