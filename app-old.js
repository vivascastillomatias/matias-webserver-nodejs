const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);

    let salida = {
        nombre : 'Matias',
        edad: 22,
        url: req.url
    }

    //res.write(JSON.stringify(salida));
    res.write('Hola gorri te amo');
    res.end();
})
.listen(8080);

console.log('Escuchando puerto 80');