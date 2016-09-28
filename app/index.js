//index.js
var servidor = require('./servidor'); //Importamos el módulo servidor creado
var router = require('./router'); //Importamos el módulo router
servidor.inicializar(router.route); //Llama al método inicializar del objeto servidor