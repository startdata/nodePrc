const http = require('http');

http.createServer((req,res)=> {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200,{'Set-cookie': 'mycookie=test'});
    res.end('hell cookie');
})
    .listen(8083, ()=> {
        console.log('8083 포트')
    })