// var read = require('read-file-utf8');
// var loki = require('lokijs');
// var baseDeDados = new loki('loki.json');
// var funcionario = baseDeDados.addCollection('funcionario');
// var loki = require('lokijs'),
//     db = new loki(),
//     users = db.addCollection('users', {
//         indices: ['username']
//     });
// users.insert({ username: 'joe', age: 40 });
// users.insert({ username: 'jack', age: 30 });
// users.insert({ username: 'jim', age: 25 });

// console.log('Users: ' + users.data.length);

function logar(){

}

function criarCadastroFuncionario(){

    var nome = nomeFuncionario.value;
    var sobrenome = sobrenomeFuncionario.value;
    var email =  emailFuncionario.value;
    var confirmaEmail = confirmarEmailFuncionario.value;
    var senha = senhaFuncionario.value;
    var confirmaSenha = confirmarSenhaFuncionario.value;

    var data = [nome, sobrenome, email, confirmaEmail, senha, confirmaSenha];

    // funcionario.insert(data);
    // baseDeDados.save();

    // console.log(baseDeDados);

}