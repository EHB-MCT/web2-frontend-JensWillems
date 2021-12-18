"use strict";
const myQuestions = [{
        question: "Who won the battle of Liège?",
        answers: {
            a: 'The Germans',
            b: 'The British',
            c: 'American'
        },
        correctAnswer: 'a'
    },
    {
        question: "The Battle of Mulhouse took place in?",
        answers: {
            a: '1914',
            b: '1915',
            c: '1916'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who won the battle of Haelen?",
        answers: {
            a: 'The Germans',
            b: 'The British',
            c: 'French'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who had more casulties in the battle of Verdun?",
        answers: {
            a: 'The Germans',
            b: 'The French'
        },
        correctAnswer: 'b'
    },
    {
        question: "The battle of Haelen took place in?",
        answers: {
            a: 'Belgium',
            b: 'The Netherlands',
            c: 'France'
        },
        correctAnswer: 'a'
    },
    {
        question: "The battle of the Somme took place in?",
        answers: {
            a: '5 July - 24 nov 1916',
            b: '2 July - 19 nov 1915',
            c: '1 July - 18 nov 1916',
            d: '3 July - 20 nov 1915'
        },
        correctAnswer: 'c'
    }
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        let output = [];
        let answers;

        for (let i = 0; i < questions.length; i++) {
            answers = [];
            for (myQuestions.correctAnswer in questions[i].answers) {


                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + myQuestions.correctAnswer + '">' +
                    myQuestions.correctAnswer + ': ' +
                    questions[i].answers[myQuestions.correctAnswer] +
                    '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="eachQuestion">' +
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>' + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let userAnswer = '';
        let numCorrect = 0;

        // for each question...
        for (let i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }


        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    // submitButton.addEventListener('click',()=>{

    // })

    submitButton.onclick = async () => {
        showResults(questions, quizContainer, resultsContainer);
        const response = await fetch('http://localhost:3000/api/user/updateScore', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userMail: localStorage.getItem('userMail'),
                score: resultsContainer.innerHTML
            })
        });

    }

}


// Show your score on My score page