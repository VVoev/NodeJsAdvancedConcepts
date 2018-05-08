const https = require('https');
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

doRequest(8);
