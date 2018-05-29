const http = require('http');
const fs = require('fs');
const path = require('path')

const app = http.createServer((req, res) => {
    if (/\/dist\/.+/.test(req.url)) {
        fs.readFile(path.join('./', req.url), (err, data) => {
            if (err) {
                return;
            }
            res.writeHead(200, {
                'Content-type': 'text/javascript'
            });
            res.end(data);
        });
    } else {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                return;
            }
            res.end(data);
        });
    }
});

app.listen(2018);
