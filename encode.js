const base64 = require('js-base64');
const fs = require('fs');

let content = fs.readFileSync('src/origin.txt','utf-8');
content += fs.readFileSync('src/default.txt','utf-8');
content = base64.Base64.encode(content);

fs.mkdir("dist", function (err) {
    if (err) throw err;

    fs.writeFile('dist/gfwlist.txt', content, {'flag': 'a'}, function (err) {
        if (err) throw err;
        console.log('File encoding has finished');
    });

});
