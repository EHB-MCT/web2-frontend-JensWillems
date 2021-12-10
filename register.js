"use strict";


document.getElementById("registerbtn").addEventListener("click", function () {
    if (userMail.value == "") {
        window.alert(
            "Please enter a valid e-mail address.");
        return;
    }

    if (userPW.value == "") {
        window.alert("Please enter a pw.");
        return;
    }

    if (userPWRepeat.value == "") {
        window.alert("Please repeat your pw.");
        return;
    }
    if (userPW.value !== userPWRepeat.value) {
        window.alert("pw not the same!");
        return;
    }

    register();

});


async function register() {
    const userMail = document.getElementById("userMail").value;
    const userPW = document.getElementById("userPW").value;
    const userPWRepeat = document.getElementById("userPWRepeat").value;


    console.log(userMail, userPW, userPWRepeat);

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userMail,
            userPW,
            userPWRepeat
        })
    });
    console.log(response);
    if (response.status == 409) {
        window.alert("mail already used!")
    } else if (response.status == 200) {
        window.alert("User succesfully created!")
        document.getElementById("registerForm").style.display = "none";
    }
}

document.getElementById("alreadyLoginbtn").addEventListener("click", function () {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";

});

async function login() {
    // console.log("test");

    const loginMail = document.getElementById("loginMail").value;
    const loginPW = document.getElementById("loginPW").value;

    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            loginMail,
            loginPW

        })
    });
    console.log(await response.json());

    if (response.status == 401) {
        window.alert(await response.json())
    } else if (response.status == 200) {
        // window.alert("User succesfully loged in!")
        document.getElementById("loginForm").style.display = "none";
    }
}

document.getElementById("loginbtn").addEventListener("click", function () {
    login();
});