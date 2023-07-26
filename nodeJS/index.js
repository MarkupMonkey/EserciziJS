const http = require('http');
const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.end('Benvenuto sul sito');
 }
 if (req.url === '/marco') {
  res.end('il profilo di marco');
 }
 res.end(`<h1>Errore</>
 <p>Torna alla <a href="/">home</a></p>`);
});

server.listen(4300);
