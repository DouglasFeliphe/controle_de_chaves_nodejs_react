// criando uma database


// var loki = require('lokijs');
// var db = new loki('loki.json');
// var children = db.addCollection('children');
// children.insert({name:'Sleipnir'});
// children.insert({name:'Jormungandr'});
// children.insert({name:'Heller'});
// db.save();
// require('./assets/js/DAO/UsuarioDao');

// const UsuarioDao = require('./assets/js/DAO/UsuarioDao');
// var usuarioDao = new UsuarioDao();
// usuarioDao

const { app, BrowserWindow } = require('electron');

let mainWindow = null;
let loginWindow = null;

app.on('ready', () => {
    //cria a nova janela de principal  
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 800,
        show: false,
    });
    //cria a nova janela de login
    // loginWindow = new BrowserWindow({
    //     parent: mainWindow,
    //     modal: true,
    //     width: 400,
    //     height: 300, 
    //     frame: false

    // });
    //removendo os menus
    mainWindow.setMenu(null);
    // loginWindow.setMenu(null);
    

    //carrega o index.html
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.maximize();
    
    //abre a página apenas quando o conteúdo html estiver pronto
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.webContents.openDevTools();
    // loginWindow.setMovable(false);
    // loginWindow.setSkipTaskbar(true);
    //carrega o login.html
    // loginWindow.loadURL('file://'+__dirname+'/login.html');
});