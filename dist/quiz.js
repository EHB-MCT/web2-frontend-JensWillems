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

/***/ "./src/quiz.js":
/*!*********************!*\
  !*** ./src/quiz.js ***!
  \*********************/
/***/ (() => {

eval("\r\nconst myQuestions = [{\r\n        question: \"Who won the battle of Liège?\",\r\n        answers: {\r\n            a: 'The Germans',\r\n            b: 'The British',\r\n            c: 'American'\r\n        },\r\n        correctAnswer: 'a'\r\n    },\r\n    {\r\n        question: \"The Battle of Mulhouse took place in?\",\r\n        answers: {\r\n            a: '1914',\r\n            b: '1915',\r\n            c: '1916'\r\n        },\r\n        correctAnswer: 'a'\r\n    },\r\n    {\r\n        question: \"Who won the battle of Haelen?\",\r\n        answers: {\r\n            a: 'The Germans',\r\n            b: 'The British',\r\n            c: 'French'\r\n        },\r\n        correctAnswer: 'a'\r\n    },\r\n    {\r\n        question: \"Who had more casulties in the battle of Verdun?\",\r\n        answers: {\r\n            a: 'The Germans',\r\n            b: 'The French'\r\n        },\r\n        correctAnswer: 'b'\r\n    },\r\n    {\r\n        question: \"The battle of Haelen took place in?\",\r\n        answers: {\r\n            a: 'Belgium',\r\n            b: 'The Netherlands',\r\n            c: 'France'\r\n        },\r\n        correctAnswer: 'a'\r\n    },\r\n    {\r\n        question: \"The battle of the Somme took place in?\",\r\n        answers: {\r\n            a: '5 July - 24 nov 1916',\r\n            b: '2 July - 19 nov 1915',\r\n            c: '1 July - 18 nov 1916',\r\n            d: '3 July - 20 nov 1915'\r\n        },\r\n        correctAnswer: 'c'\r\n    }\r\n];\r\n\r\nlet quizContainer = document.getElementById('quiz');\r\nlet resultsContainer = document.getElementById('results');\r\nlet submitButton = document.getElementById('submit');\r\n\r\ngenerateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);\r\n\r\nfunction generateQuiz(questions, quizContainer, resultsContainer, submitButton) {\r\n\r\n    function showQuestions(questions, quizContainer) {\r\n\r\n        let output = [];\r\n        let answers;\r\n\r\n        for (let i = 0; i < questions.length; i++) {\r\n            answers = [];\r\n            for (myQuestions.correctAnswer in questions[i].answers) {\r\n\r\n\r\n                answers.push(\r\n                    '<label>' +\r\n                    '<input type=\"radio\" name=\"question' + i + '\" value=\"' + myQuestions.correctAnswer + '\">' +\r\n                    myQuestions.correctAnswer + ': ' +\r\n                    questions[i].answers[myQuestions.correctAnswer] +\r\n                    '</label>'\r\n                );\r\n            }\r\n\r\n            // add this question and its answers to the output\r\n            output.push(\r\n                '<div class=\"eachQuestion\">' +\r\n                '<div class=\"question\">' + questions[i].question + '</div>' +\r\n                '<div class=\"answers\">' + answers.join('') + '</div>' + '</div>'\r\n            );\r\n        }\r\n\r\n        // finally combine our output list into one string of html and put it on the page\r\n        quizContainer.innerHTML = output.join('');\r\n    }\r\n\r\n\r\n    function showResults(questions, quizContainer, resultsContainer) {\r\n\r\n        // gather answer containers from our quiz\r\n        var answerContainers = quizContainer.querySelectorAll('.answers');\r\n\r\n        // keep track of user's answers\r\n        let userAnswer = '';\r\n        let numCorrect = 0;\r\n\r\n        // for each question...\r\n        for (let i = 0; i < questions.length; i++) {\r\n\r\n            // find selected answer\r\n            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;\r\n\r\n            // if answer is correct\r\n            if (userAnswer === questions[i].correctAnswer) {\r\n                // add to the number of correct answers\r\n                numCorrect++;\r\n\r\n                // color the answers green\r\n                answerContainers[i].style.color = 'lightgreen';\r\n            }\r\n            // if answer is wrong or blank\r\n            else {\r\n                // color the answers red\r\n                answerContainers[i].style.color = 'red';\r\n            }\r\n        }\r\n\r\n\r\n        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;\r\n    }\r\n\r\n    showQuestions(questions, quizContainer);\r\n    // submitButton.addEventListener('click',()=>{\r\n\r\n    // })\r\n\r\n    submitButton.onclick = async () => {\r\n        showResults(questions, quizContainer, resultsContainer);\r\n        const response = await fetch('http://localhost:3000/api/user/updateScore', {\r\n            method: 'PUT',\r\n            headers: {\r\n                'Accept': 'application/json',\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({\r\n                userMail: localStorage.getItem('userMail'),\r\n                score: resultsContainer.innerHTML\r\n            })\r\n        });\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://hoofdopdracht/./src/quiz.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/quiz.js"]();
/******/ 	
/******/ })()
;