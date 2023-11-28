const base64 = require('js-base64');
const fs = require('fs');

function main() {
    const proxy = "PROXY 127.0.0.1:10809;DIRECT;";
    let content = fs.readFileSync('src/gfwlist.tpl', 'utf-8');
    const userRules = fs.readFileSync('src/rule_user.json', 'utf-8');
    const defaultRules = fs.readFileSync('src/rule_default.json', 'utf-8');
    const rules = userRules.trim() + ',' + defaultRules.trim();
    content = content.replace('/**proxy**/', proxy).replace('/**rules**/', rules)

    fs.mkdir("dist", function (err) {
        if (err) throw err;

        fs.writeFile('dist/gfwlist.pac', content, {'flag': 'a'}, function (err) {
            if (err) throw err;
            console.log('gfwlist.pac write finished');
        });

    });
}

main();
