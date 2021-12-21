"use strict";
// Show your score on My score page
const yourScore = async () => {
    const response = await fetch('http://localhost:3000/api/yourscore', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userMail: localStorage.getItem('userMail'),
        })
    });

    const data = await response.json();

    document.getElementById('yourScore').innerHTML = data.score;
};



const deleteScore = async () => {
    document.getElementById("deleteScore").addEventListener("click", async () => {
        const response = await fetch('http://localhost:3000/api/yourscore', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userMail: localStorage.getItem('userMail'),
            })
        });
        await yourScore();
    });


};

// loadin the function
window.addEventListener('load',
    async () => {
        await yourScore();
        await deleteScore();
    }, false);