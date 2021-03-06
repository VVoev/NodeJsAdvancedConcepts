const express = require('express');
const crypto = require('crypto');
const app = express();

const port = 3000;

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

