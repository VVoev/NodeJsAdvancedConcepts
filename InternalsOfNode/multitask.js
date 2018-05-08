process.env.UV_THREADPOOL_SIZE = 1;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest(number) {
    for (var i = 0; i < number; i += 1) {
        https.request('https://www.google.com', res => {
            res.on('data', (googleData) => {

            })
            res.on('end', () => {
                console.log(Date.now() - start);
            })
        })
            .end();
    }
}
function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start);
    })
}
doRequest(1);

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
})

doHash();
doHash();
doHash();
doHash();