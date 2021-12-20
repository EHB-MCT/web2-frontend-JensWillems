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

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ (() => {

eval("\r\n\r\n\r\n\r\nfunction checkLoggedIn() {\r\n    const user = localStorage.getItem('userMail');\r\n    // console.log(user);\r\n    if (!user) {\r\n        document.getElementById(\"registerForm\").style.display = \"block\";\r\n        // Register click event\r\n        document.getElementById(\"registerbtn\").addEventListener(\"click\", function () {\r\n            if (userMail.value == \"\") {\r\n                window.alert(\r\n                    \"Please enter a valid e-mail address.\");\r\n                return;\r\n            }\r\n\r\n            if (userPW.value == \"\") {\r\n                window.alert(\"Please enter a pw.\");\r\n                return;\r\n            }\r\n\r\n            if (userPWRepeat.value == \"\") {\r\n                window.alert(\"Please repeat your pw.\");\r\n                return;\r\n            }\r\n            if (userPW.value !== userPWRepeat.value) {\r\n                window.alert(\"pw not the same!\");\r\n                return;\r\n            }\r\n\r\n            console.log(\"test\");\r\n            register();\r\n        });\r\n\r\n\r\n\r\n        // console.log(document.getElementById(\"alreadyLoginbtn\"));\r\n        // login click event\r\n        document.getElementById(\"alreadyLoginbtn\").addEventListener(\"click\", function () {\r\n            document.getElementById(\"registerForm\").style.display = \"none\";\r\n            document.getElementById(\"loginForm\").style.display = \"block\";\r\n\r\n        });\r\n\r\n        document.getElementById(\"loginbtn\").addEventListener(\"click\", function () {\r\n            login();\r\n        });\r\n\r\n        document.getElementById(\"backbtn\").addEventListener(\"click\", function () {\r\n            document.getElementById(\"registerForm\").style.display = \"block\";\r\n            document.getElementById(\"loginForm\").style.display = \"none\";\r\n\r\n\r\n        });\r\n\r\n\r\n    } else {\r\n\r\n    }\r\n};\r\n\r\ncheckLoggedIn();\r\n\r\n\r\n\r\n// Register information to the backend\r\nasync function register() {\r\n    const userMail = document.getElementById(\"userMail\").value;\r\n    const userPW = document.getElementById(\"userPW\").value;\r\n    const userPWRepeat = document.getElementById(\"userPWRepeat\").value;\r\n\r\n\r\n    console.log(userMail, userPW, userPWRepeat);\r\n\r\n    const response = await fetch('http://localhost:3000/api/user/register', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify({\r\n            userMail,\r\n            userPW,\r\n            userPWRepeat\r\n        })\r\n    });\r\n    console.log(response);\r\n    if (response.status == 409) {\r\n        window.alert(\"mail already used!\")\r\n    } else if (response.status == 200) {\r\n        window.alert(\"User succesfully created!\")\r\n        document.getElementById(\"registerForm\").style.display = \"none\";\r\n    }\r\n}\r\n\r\n\r\n\r\nasync function login() {\r\n    // console.log(\"test\");\r\n\r\n    const loginMail = document.getElementById(\"loginMail\").value;\r\n    const loginPW = document.getElementById(\"loginPW\").value;\r\n\r\n    const response = await fetch('http://localhost:3000/api/user/login', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify({\r\n            loginMail,\r\n            loginPW\r\n\r\n        })\r\n    });\r\n    // console.log(await response.json());\r\n\r\n    if (response.status == 401) {\r\n        window.alert(await response.json())\r\n    } else if (response.status == 200) {\r\n        window.alert(\"User succesfully logged in!\")\r\n        const data = await response.json();\r\n        console.log(data);\r\n        localStorage.setItem('userMail', data.user)\r\n        document.getElementById(\"loginForm\").style.display = \"none\";\r\n    }\r\n}\n\n//# sourceURL=webpack://hoofdopdracht/./src/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/register.js"]();
/******/ 	
/******/ })()
;