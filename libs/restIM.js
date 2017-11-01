/*
Rest Services in Memory
This file provides a in memory JSON db to be served to JSON server
*/


var jsf = require('json-schema-faker');
// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


jsf.extend('faker', function () {
    var faker = require('faker');
    faker.locale = "en";
    return faker;

});
var schema = require('./empSchema')();
var db = {"emps":[]};


// console.log(jsf.version)

function getJSON() {
    var emps = [];

    for (var id = 0; id < 100; id++) {
        jsf.resolve(schema).then(function (sample) {
            db.emps.push(sample);

            // "[object Object]"

            // console.log(sample);
            // "John Doe"
        });
    }
    return db;



}
getJSON();
console.log(JSON.stringify(getJSON()));
// json-server requires that you export
// a function which generates the data set
 module.exports = getJSON