const { db, banco } = require("./DBImports");

class Dao {

    /**
     * @param {string} _nomeTabela - nome da coleção a ser criada
     */
    static criarTabela(_nomeTabela) {
        db.addCollection(_nomeTabela);
        db.save();
        console.log("tabela " + _nomeTabela + " criada com sucesso!");
        console.log(db);
    };

    /**
     * @param {string} _nomeTabela - nome da coleção para procurar
     * @param {string} _valorNome - nome a ser inserido 
     * @param {string} _valorId - id a ser inserido
     */
    static insere(_nomeTabela, _valorNome, _valorId) {

        db.loadJSON(banco);
        let tabela = db.getCollection(_nomeTabela);

        tabela.insert({
            nome: _valorNome,
            id: _valorId
        });

        db.save();
        console.log("dados " + _valorNome, _valorId + " inserios com sucesso!");
    };
    /**
     * 
     * @param {*} _nomeTabela 
     * @param {*} _data 
     * @param {*} _labChave 
     * @param {*} _usuario 
     * @param {*} _horarioRetirada 
     * @param {*} _entreguePor 
     * @param {*} _horarioDevolucao 
     * @param {*} _recebidoPor 
     * @param {*} _status
     */
    static insereSolicitacao(_nomeTabela, _data, _labChave, _usuario, _horarioRetirada, _entreguePor, _horarioDevolucao, _recebidoPor, _status) {

        db.loadJSON(banco);

        db.getCollection(_nomeTabela).insert({
            data: _data,
            labChave: _labChave,
            usuario: _usuario,
            horarioRetirada: _horarioRetirada,
            entreguePor: _entreguePor,
            horarioDevoluca: _horarioDevolucao,
            recebidoPor: _recebidoPor,
            status: _status
        });

        db.save();
        console.log("Solicitação " + _usuario, _labChave + " inserios com sucesso!");
    };

    /**
     * @param {*} _tabela - nome da coleção para procurar
     * @param {*} _id - id para procurar
     * @param {*} _novoNome - valor do novo nome  
     * @param {*} _novoId - valor do novo id
     */
    static atualiza(_tabela, _id, _novoNome, _novoId) {

        db.loadJSON(banco);

        let tabela = db.getCollection(_tabela);
        let user = db.getCollection(_tabela).findObject({ 'id': _id });
        user.nome = _novoNome;
        user.id = _novoId;
        tabela.update(user);

        db.save();

        console.log("dados alterados com sucesso!");
    };


    /**
     * @param {*} _tabela 
     * @param {*} _labChave 
     * @param {*} _horarioDevolucao 
     * @param {*} _recebidoPor 
     * @param {*} _status 
     */
    static atualizaSolicitacao(_tabela, _labChave, _horarioDevolucao, _recebidoPor, _status) {

        db.loadJSON(banco);

        let tabela = db.getCollection(_tabela);
        let solicitacao = tabela.findObject({ 'labChave': _labChave, 'status': 'glyphicon glyphicon-remove' });
        solicitacao.horarioDevolucao = _horarioDevolucao;
        solicitacao.recebidoPor = _recebidoPor;
        solicitacao.status = _status;
        tabela.update(solicitacao);

        db.save();

        console.log("Solicitação atualizada com sucesso!");
    };


    /**
     * @param {*} _tabela - nome da coleção para procurar
     * @param {*} _nome - nome da valor para procurar
     */
    static remove(_tabela, _nome) {
        db.loadJSON(banco);
        db.getCollection(_tabela).chain().find({ nome: _nome }).remove();
        db.save();
        console.log(_nome + " removido com sucesso!");
    };


    /**
     * @param {*} _labChave - valor referente á chave da solicitação desejada 
     */
    static removeSolicitacao(_labChave) {
        db.loadJSON(banco);
        db.getCollection('Solicitacao').chain().find({ labChave: _labChave }).remove();
        db.save();
        console.log(_nome + " removido com sucesso!");
    };


    /**
     * @param {*} _tabela - nome da coleção para procurar
     * @returns - Referência à coleção no banco de dados por esse nome, ou null se não for encontrado        
     */
    static getCollection(_tabela) {
        db.loadJSON(banco);
        return db.getCollection(_tabela);
    };
}

module.exports = Dao;
