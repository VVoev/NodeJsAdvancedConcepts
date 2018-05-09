process.env.UV_THREADPOOL_SIZE = 1;

const express = require('express');
const crypto = require('crypto');
const app = express();
const cluster = require('cluster');

const port = 3000;


//is the file being execuded in master mode ?
if (cluster.isMaster) {
    //cause index.js to be executed again but in slave/child mode
    cluster.fork();
} else {
    //im a child,im goint to act like a server and nothing else


    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('hi there');
        })
    })

    app.get('/fast', (req, res) => {
        res.send('this was fast');
    })

    app.listen(port, () => {
        console.log(`server is up and running on port ${port}`);
    })
}

