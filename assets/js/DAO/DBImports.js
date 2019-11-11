// const { UsuarioDao } = require("./DBImports");

const read = require('read-file-utf8');
const loki = require('lokijs');
const db = new loki('loki.json');

const banco = read('C:/electron/ControleDeChavesElectron-master/loki.json');

exports.banco = banco;
exports.db = db;
