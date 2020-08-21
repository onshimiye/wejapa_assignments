const https = require('https');
const fs = require('fs');
const path = require('path');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    })

    res.on('end', () => {
        data = JSON.parse(data);

        clean(data);
        fs.appendFile(path.join(__dirname, 'result.txt'), JSON.stringify(data), err => {
            if (err)
                throw err;
            console.log('Done cleaning! \nCheck your new data in result.txt');
        });

    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});


function clean(object) {
    for (let key in object) {
        if (object[key] == 'N\/A' || object[key] == '-' || object[key] == '') {
            // delete by splice to avoid leaving empty slots in the array
            if (Array.isArray(object)) {
                object.splice(key, 1);
            } else {
                delete object[key];
            }
        }
        // recurse on nested objects
        if (typeof(object[key]) == 'object') {
            clean(object[key]);
        }
    }
}