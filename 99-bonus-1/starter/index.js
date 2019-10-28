const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);


//callback function gets called everytime someone accesses the server
const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname
    const query = url.parse(req.url, true).query;

    console.log(url.parse(req.url, true));

    if (pathName === '/products' || pathName === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('This is the PRODUCTS page!');
    } else if (pathName === '/laptop') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('This is the LAPTOP page!');
    } else {
        res.writeHead(404, { 'content-Type': 'text/html'});
        res.end('URL was not found on the server!');
    }
});

server.listen(1337, '127.0.0.1', () =>{
    console.log('Listening for requests now!');
});