
/*
Rest Services in Storage
A db.json file is created which served to the JSON server
*/

var fs = require('fs');
var jsf = require('json-schema-faker');
var url = require("openurl");
const chalk = require('chalk');

jsf.extend('faker', function () {
    var faker = require('faker');
    faker.locale = "en";
    return faker;

});
var schema = require('./empSchema')();
var db = {
    "emps": []
};

var schemas = [];


function getJSON(nrecords, nport) {
    n = nrecords || 100;
    port = nport || 3000;

    for (var id = 0; id < n; id++) {
        // console.log(id);

        schemas[id] = jsf.resolve(schema);
        schemas[id].then(function (sample) {
            db.emps.push(sample);

        });
    }


    Promise.all(schemas, db.emps).then(() => {
        // console.log(db.emps.length);

        fs.writeFile("db.json", JSON.stringify(db, null, 2), function (err) {
            if (err) {

                return console.log(err);
            } else {

                console.log(chalk.green('Mock db generated with ' + db.emps.length + ' records.'));
                // server.js
                const jsonServer = require('json-server')
                const server = jsonServer.create()
                const router = jsonServer.router('db.json', " --id empno")
                const middlewares = jsonServer.defaults()

                server.use(middlewares)
                router.db._.id = "empno";

                // To handle POST, PUT and PATCH you need to use a body-parser
                // You can use the one used by JSON Server
                server.use(jsonServer.bodyParser)
                server.use((req, res, next) => {
                    if (req.method === 'POST') {
                        req.body.createdAt = Date.now()
                    }
                    // Continue to JSON Server router
                    next()
                })


                server.use(router)
                server.listen(port, () => {
                    console.log(chalk.yellow('CrustFull Server is up and running'))
                });

                url.open("http://localhost:" + port + "/");

            }


        });


    })

}


module.exports = getJSON