'use strict';
var isJSON = require('is-json');
var expect = require('chai').expect;
var schema = require('../libs/empSchema')();

describe("JSON", function() {
 describe(".isValid", function() {
     it("should detect malformed JSON strings", function(){
         //Test Goes Here
         // var result = isJSON(schema);
         var result =  isJSON(schema, true);
         // console.log(result);
         expect(result).to.equal(true);

     });
 });
});