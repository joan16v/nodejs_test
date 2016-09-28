//Servidor.js
function inicializar(route) { //Pasamos el objeto route
    var server = require('http').createServer();
    var url = require('url');

    function control(petic, resp) {
        var pathName = url.parse(petic.url).pathname;
        console.log('Petición recibida'); //Texto que saldrá por consola
        route(pathName);
        resp.writeHead(200, {'content-type': 'text/plain'});
        resp.write('Peticion recibida en el servidor: ' + pathName);
        resp.end();
    }

    server.on('request', control).listen(8080);
    console.log('Servidor inicializado');
}

exports.inicializar = inicializar; //Exportamos la función