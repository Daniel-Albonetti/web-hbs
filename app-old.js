const http = require('http');


http.createServer((req,res) =>{

    res.writeHead(200, {'content-Type': 'application/json'});

    let salida = {
        nombre: 'Daniel Celestino',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));

    res.end();

})
.listen(3800);


console.log('Escuchando el puerto 3800');