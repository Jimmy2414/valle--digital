var http = require('http');
var fs = require('fs');

const ApiValleDigital = [
    {},
    {},
    {},
    {},
    {},

]

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var valleDigital = fs.readFileSync(__dirname + '/valleDigital.html', 'utf8');
    // var Home = fs.readFileSync(__dirname + './valle-digital/components/Home.jsx', 'utf8')

    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(valleDigital)
    }
    // if(req.url === '/hola'){
    //     res.writeHead(200, {'Content-Type':'application/javascript'});
    //     res.end(Home)
    // }
    if(req.url === ''){
        res.end()
    }
    if(req.url === ''){
        res.end()
    }
    if(req.url === ''){
        res.end()
    }

}).listen(1001, '127.0.0.1');