# CrustFul Server 
![love](https://raw.github.com/janantala/love-heart/master/img/love.gif)
 [![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

[![GitHub](https://img.shields.io/github/release/planetapex/crustful-server.svg?style=flat-square)](https://github.com/planetapex/crustful-server/releases)
[![Travis CI](https://img.shields.io/travis/planetapex/crustful-server.svg?style=flat-square)](https://travis-ci.org/planetapex/crustful-server)
[![npm](https://img.shields.io/npm/v/package.svg?style=flat-square)](https://www.npmjs.org/package/package)
[![GitHub](https://img.shields.io/github/issues/planetapex/crustful-server.svg?style=flat-square)](https://github.com/planetapex/crustful-server/issues)
[![GitHub](https://img.shields.io/github/downloads/planetapex/crustful-server/latest/total.svg?style=flat-square)](https://github.com/planetapex/crustful-server)
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![HitCount](http://hits.dwyl.com/planetapex/crustful-server.svg)](http://hits.dwyl.com/planetapex/crustful-server)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)




Crustful Server is developed to provide on-the-fly handy `Restful Mock Server` based on the Oracle's Scott emp Table.

It provides `GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS` **HTTP Methods** out of box.

Note: This is a Mock Server for Restful API without the need of any database server. There is a Feature called `AutoRest` in Oracle Database which also provides a quick way to setup your API. AutoRest requires obviously the database and ORDS to run.

## RoadMap

Planning to add the following:

* **Custom JSON Schema** OR **JSON database** to feed data to the server with a **custom URI endpoint**.
*  

## Getting Started

### Prerequisites

You would require the following to run the server:


* [Download | Node.js](https://nodejs.org/en/download/)



### Installing

After Installing Node.js, type the following command in the shell:

```
npm install crustful-server -g
```
The `-g` switch will install the package globally, which will make it available as a shell command in the system.

### Running the Server

#### Quick and Dry Run

Just call the command `crustful` from the shell and accept the default values.

#### **Note:**
`This will automatically open the url in the default browser.`

<img src="./assets/jetpacktocat.png" width="200" height="200" />


#### Details

There are two ways to pass argument values to the server:
*  Interactive Path
*  Command Line Path

##### **Interactive Path**

To run the server, type the following command in the shell:

```
crustful
```
It will ask two questions
* The Number of Records in the database
* The Port Number to run the server on

#### **Note:**
`Both options have default values which would be accepted if you press the Return key`

##### **Command Path**

crustful server can accepts arguments via the command line and these values become the default values for the Interactive path.

By typing the following command you can display the help for the available options:

```
crustful -h
```
Each option has a short form and a long form. Above code was an example of short form. Following is an example of long form e.g.

```
crustful --help
```
For the Number of records  `-r` or `--records` switch is used. We can call the following command for 100 records in the database:

```
crustful -r 100
```
This will set the default value for the Number of records question which you can accept by hitting the return key.


For the Number of records  `-p` or `--port` switch is used. We can call the following command for set the server port to 4000:

```
crustful -p 4000
```

This will set the default value for the port number question which you can accept by hitting the return key.


## Testing the Server

### Database

If you want to access your database `db.json` on the storage drive  it will be located in the global folder.

You can find the global folder by:

```
npm config get prefix
```

However, AFAIK, on Windows:

`%APPDATA%\npm\node_modules\crustful-server\libs`

i.e in user\app_data\roaming\npm\node_modules\crustful-server\libs folder.

On other OS:

`/usr/local/lib/node_modules/crustful-server/libs`



### Tools Suggested

* Browser like Chrome
* Browser Plugin/Extension/Addon/Module/Package/whatever to beautify JSON in the browser. 
* [Postman](https://www.getpostman.com/) Or Insomnia
* [Curl](https://curl.haxx.se/download.html)
* Whatever gimmick , gizmo, gadget or doodah is needed to pull the REST strings....

In the Chrome browser type the following url to get all the records:
```
http://localhost:3000/emps/
```
**Note:** I am using the default port `3000`.

`empno treated as the id of each record`

Say there is an employee number 7754 in the records , so you can get the individual employee by:
```
http://localhost:3000/emps/7754
```
This is how far the browser would take you. Now you need the nunchucks.

_**Postman to the Rescue**_.

For the sake of convenience, I am sharing my Postman Collection in v1 and v2. Use any one you like and import in Postman to run it.

Check each call's 
* Method
* URL
* Headers
* Body

You can also make `curl` calls to the server.

Just swing your nunchucks.



<img src="./assets/dojocat.jpg" width="200" height="200" />

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)
* [Node.Js](https://nodejs.org/)
* [JSON-Server](https://github.com/typicode/json-server)

## NPM Dependencies

* [JSON Schema Faker](https://github.com/json-schema-faker)
* [Faker.js](https://www.npmjs.com/package/faker)
* [Commander](https://www.npmjs.com/package/commander)
* [Chalk](https://www.npmjs.com/package/chalk)
* [Clear](https://www.npmjs.com/package/clear)
* [Figlet](https://www.npmjs.com/package/figlet)
* [Clui](https://www.npmjs.com/package/clui)
* [Inquirer](https://www.npmjs.com/package/inquirer)


## Versioning

* 1.0.0

## Authors

* **M.Yasir Ali Shah** - *Initial work* - [PlaneApex](https://github.com/planetapex)

<img src="./assets/Professortocat_v2.png" width="200" height="200" />


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hats off to [typicode | Patreon](https://www.patreon.com/typicode) for JSON Server such a wonderfull tool.

## Disclaimer

All the Images are property of [Github](https://github.com) and used for fun.