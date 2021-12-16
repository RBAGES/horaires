// const { cp } = require('fs');
var fs = require('fs');
var http = require('http');
var url = require('url');


fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (req, res) {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        var q = url.parse(req.url, true).query;
        var op = q.op;
        var valid = false;
        var result;
        
        if (isNaN(q.n1 + q.n2)) {
            res.write("veuillez entrer des nombres");
            res.end();
            return;
        }
        var n1 = parseInt(q.n1);
        var n2 = parseInt(q.n2);

        switch (q.op) {
            case '+':
                result = calc.additionner(n1, op, n2);
                valid = true;
                break;
            case '-':
                result = calc.soustraire(n1, op, n2);
                valid = true;
                break;
            case '*':
                result = calc.multiplier(n1, op, n2);
                valid = true;
                break;
            case '/':
                result = calc.diviser(n1, op, n2);
                valid = true;
                break;
        }

        // if (valid)
        //     res.write('<b>'+result+'</b>');
        // else
        //     res.write('cet op&eacuterateur n\'est pas reconnu (pour le +, il faut mettre %2b)');



        res.end();


    }).listen(8080);

});


