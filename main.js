const base64 = require('js-base64');
const fs = require('fs');

function main() {
    let content = fs.readFileSync('src/rule_default.txt', 'utf-8');
    content += fs.readFileSync('src/rule_user.txt', 'utf-8');
    const base64Content = base64.Base64.encode(content);

    fs.mkdir("dist", function (err) {
        if (err) throw err;

        fs.writeFile('dist/pac.txt', content, {'flag': 'a'}, function (err) {
            if (err) throw err;
            console.log('pac.txt write finished');
        });

        fs.writeFile('dist/gfwlist.txt', base64Content, {'flag': 'a'}, function (err) {
            if (err) throw err;
            console.log('File encoding has finished');
        });

    });
}


