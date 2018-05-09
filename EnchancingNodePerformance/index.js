const express = require('express');
const app = express();
const cluster = require('cluster');

const port = 3000;


//is the file being execuded in master mode ?
if (cluster.isMaster) {
    //cause index.js to be executed again but in slave/child mode
    cluster.fork();
} else {
    //im a child,im goint to act like a server and nothing else
    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {

        }
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('hi there');
    })

    app.listen(port, () => {
        console.log(`server is up and running on port ${port}`);
    })
}

