module.exports = function () {

    var empSchema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "http://git/planetapex.com",
        "title": "Scott Schema",
        "description": "JSON Representation of Scott Schema",
        "type": "object",
        "properties": {
            // "_id": {
            //     "$ref": "#/definitions/positiveInt",
            //     "id": "/properties/id"
            // },
            "comm": {
                "default": 44,
                "description": "Commission amount received by employee",
                "examples": [
                    "44"
                ],
                "id": "/properties/comm",
                "type": "integer",
                "minimum": 1000,
                "maximum": 10000,
                "multipleOf": 5,
                "exclusiveMinimum": true
            },
            "deptno": {
                "default": 20,
                "description": "Department of the Employee from 10 to 50.",
                "examples": [
                    "20"
                ],
                "id": "/properties/deptno",
                "$ref": "#/definitions/deptNo"

            },
            "empno": {
                "default": 7369,
                "description": "Employee No",
                "examples": [
                    "7369"
                ],
                "id": "/properties/empno",
                "$ref": "#/definitions/empNo"
            },

            "ename": {
                "default": "SMITH",
                "description": "Name of the Employee.",
                "examples": [
                    "SMITH"
                ],
                "id": "/properties/ename",
                "type": "string",
                "faker": "name.findName"


            },
            "hiredate": {
                "default": "1980-12-16T19:00:00Z",
                "description": "An explanation about the purpose of this instance.",
                "examples": [
                    "1980-12-16T19:00:00Z"
                ],
                "id": "/properties/hiredate",
                "type": "string",
                "format": "date-time"



            },
            "job": {
                "default": "CLERK",
                "description": "An explanation about the purpose of this instanceJ.",
                "examples": [
                    "CLERK"
                ],
                "id": "/properties/job",
                "$ref": "#/definitions/jobTitle"

            },
            "mgr": {
                "default": 7902,
                "description": "An explanation about the purpose of this instance.",
                "examples": [
                    "7902"
                ],
                "id": "/properties/mgr",
                "$ref": "#/definitions/empNo"

            },
            "sal": {
                "default": 800,
                "description": "Salary amount received by employee.",
                "examples": [
                    "800"
                ],
                "id": "/properties/sal",
                "type": "integer",

                "minimum": 10000,
                "maximum": 100000,
                "multipleOf": 5,
                "exclusiveMinimum": true
            }
        },
        "required": [
            // "_id",
            "empno",
            "ename",
            "job",
            "hiredate",
            "sal",
            "comm",
            "mgr",
            "deptno"
        ],
        "definitions": {
            "positiveInt": {
                "type": "integer",
                "minimum": 0,
                "exclusiveMinimum": true
            },
            "jobTitle": {
                "type": "string",
                "enum": ["CLERK", "ACCOUNTANT", "SUPERVISER"]
            },
            "deptNo": {
                "type": "integer",
                "pattern": "10|20|30|40|50"
            },
            "empNo": {

                "type": "integer",
                "minimum": 7000,
                "maximum": 7999,
                "multipleOf": 1,
                "exclusiveMinimum": true

            }

        }
    };

    return empSchema;

}