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

        fs.appendFile(path.join(__dirname, 'res.json'), JSON.stringify(data), err => {
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

            if (Array.isArray(object)) {
                // delete by splice to avoid leaving empty slots in the array

                object.splice(key, 1);
            } else {
                delete object[key];
            }
        }

        if (typeof(object[key]) == 'object') {
            // recurse on nested objects

            clean(object[key]);
        }
    }
}