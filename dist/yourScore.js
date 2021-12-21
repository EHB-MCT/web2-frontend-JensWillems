/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/yourScore.js":
/*!**************************!*\
  !*** ./src/yourScore.js ***!
  \**************************/
/***/ (() => {

eval("\r\n// Show your score on My score page\r\nconst yourScore = async () => {\r\n    const response = await fetch('http://localhost:3000/api/yourscore', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify({\r\n            userMail: localStorage.getItem('userMail'),\r\n        })\r\n    });\r\n\r\n    const data = await response.json();\r\n\r\n    document.getElementById('yourScore').innerHTML = data.score;\r\n};\r\n\r\n\r\n\r\nconst deleteScore = async () => {\r\n    document.getElementById(\"deleteScore\").addEventListener(\"click\", async () => {\r\n        const response = await fetch('http://localhost:3000/api/yourscore', {\r\n            method: 'DELETE',\r\n            headers: {\r\n                'Accept': 'application/json',\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({\r\n                userMail: localStorage.getItem('userMail'),\r\n            })\r\n        });\r\n        await yourScore();\r\n    });\r\n\r\n\r\n};\r\n\r\n\r\nwindow.addEventListener('load',\r\n    async () => {\r\n        await yourScore();\r\n        await deleteScore();\r\n    }, false);\n\n//# sourceURL=webpack://hoofdopdracht/./src/yourScore.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/yourScore.js"]();
/******/ 	
/******/ })()
;