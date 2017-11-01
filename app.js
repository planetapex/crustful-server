#!/usr/bin/env node
// =============================================================================
// Application Info
// =============================================================================
/*
 * @Author: M.Yasir Ali Shah
 * @Last Modified by: M.Yasir Ali Shah 
 * @Date: Created on Sun Oct 29 2017 21:14:46
 * @Last Modified time: Sun Oct 29 2017 21:14:46 
 * @Copyright (c) 2017 PlanetApex
 */
// =============================================================================
'use strict';
var path = require('path');
const program = require('commander');
const chalk = require('chalk');
const clear = require('clear');
const CLI = require('clui');
const figlet = require('figlet');
const inquirer = require('inquirer');

const { getInstalledPath } = require('get-installed-path')
const currPath = process.cwd();

getInstalledPath('crustful-server', {
  local: false
}).then((path) => {
  // console.log(path);
  // console.log(process.cwd());
  process.chdir(path);
  // console.log(path);
  // console.log(process.cwd());

  // => '/home/charlike/.nvm/path/to/lib/node_modules/npm'
});

process.on('exit', (code) => {
  // console.log(`About to exit with code: ${code}`);
  process.chdir(currPath); 
});

function getSettings(callback) {
  var questions = [{
      name: 'qrecords',
      type: 'input',
      message: 'Enter the number of records you want in your db:',
      default: ( isNaN(program.records)|| program.records == true ) ?100: program.records,
      validate: function (value) {
       if (value.length && !isNaN(value)) {
          return true;

        } else if (!value.length) {
          return true;

        } else {
          return 'Please enter a valid number';
        }
      }
    },
    {
      name: 'qport',
      type: 'input',
      message: 'Enter the port Number for the Server:',
      default: ( isNaN(program.port) || program.port == true ) ?3000: program.port,
      validate: function (value) {
       if (value.length && !isNaN(value)) {
          return true;

        } else if (!value.length) {
          return true;

        } else {
          return 'Please enter a valid number';
        }
      }
    }

  ];

  inquirer.prompt(questions).then(function (answers) {

    program.records = answers.qrecords || 100;
    program.port = answers.qport || 3000;

    var restIS = require('./libs/restIS')(program.records,program.port);
    return 1;



  });
}

function setHeader() {

  clear();
  console.log(
    chalk.green(
      figlet.textSync('CrustFul', {
        horizontalLayout: 'full'
      })
    )
  );

}

setHeader();

program
  .version('1.0.0')
  // .option('-t, --type [type] ', 'Rest Server Type', /^(memory|storage)$/i, 'storage')
  .option('-r, --records [record] ', 'Number of Records')
  .option('-p, --port [port] ', 'Server Port Number')
  .parse(process.argv);

// console.log(' size: %j',program.records);

// console.log(program.record);

getSettings();

module.exports = getSettings