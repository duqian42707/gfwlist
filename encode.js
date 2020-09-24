const base64 = require('js-base64');
const fs = require('fs');

fs.readFile('src/origin.txt', (err, data) => {
    if (err) throw err;
    const txt = base64.Base64.encode(data);

    fs.mkdir("dist", function (err) {
        if (err) throw err;

        fs.writeFile('dist/gfwlist.txt', txt, {'flag': 'a'}, function (err) {
            if (err) throw err;
            console.log('File encoding has finished');
        });

    });

});




