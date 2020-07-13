const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);
//laptopData is actually na array of the laptops


//callback function gets called everytime someone accesses the server
const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname
    //this is how you read the ID from the url
    const id = url.parse(req.url, true).query.id;

    console.log(url.parse(req.url, true));

    if (pathName === '/products' || pathName === '/'){

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('This is the PRODUCTS page!');

    }
     else if (pathName === '/laptop' && id < laptopData.length) {

        res.writeHead(200, { 'Content-type': 'text/html'});
        //res.end(`This is the LAPTOP page for laptop ${id}`);
        //no longer displaying the above message for this response request

        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            console.log(laptop);
            //access the current laptop
            let output = data.replace(/{%PRODUCTNAME%}/g, laptop.productName);
            output = output.replace(/{%IMAGE%}/g, laptop.image);
            output = output.replace(/{%PRICE%}/g, laptop.price);
            output = output.replace(/{%SCREEN%}/g, laptop.screen);
            output = output.replace(/{%CPU%}/g, laptop.cpu);
            output = output.replace(/{%STORAGE%}/g, laptop.storage);
            output = output.replace(/{%RAM%}/g, laptop.ram);
            output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
            //now send response to the browser
            res.end(output);
        });

    } else {

        res.writeHead(404, { 'content-Type': 'text/html'});
        res.end('URL was not found on the server!');
    }
});

server.listen(1337, '127.0.0.1', () =>{
    console.log('Listening for requests now!');
});