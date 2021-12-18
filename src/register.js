"use strict";



function checkLoggedIn() {
    const user = localStorage.getItem('userMail');
    // console.log(user);
    if (!user) {
        document.getElementById("registerForm").style.display = "block";
        // Register click event
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

            console.log("test");
            register();
        });



        // console.log(document.getElementById("alreadyLoginbtn"));
        // login click event
        document.getElementById("alreadyLoginbtn").addEventListener("click", function () {
            document.getElementById("registerForm").style.display = "none";
            document.getElementById("loginForm").style.display = "block";

        });

        document.getElementById("loginbtn").addEventListener("click", function () {
            login();
        });

        document.getElementById("backbtn").addEventListener("click", function () {
            document.getElementById("registerForm").style.display = "block";
            document.getElementById("loginForm").style.display = "none";


        });


    } else {

    }
};

checkLoggedIn();



// Register information to the backend
async function register() {
    const userMail = document.getElementById("userMail").value;
    const userPW = document.getElementById("userPW").value;
    const userPWRepeat = document.getElementById("userPWRepeat").value;


    console.log(userMail, userPW, userPWRepeat);

    const response = await fetch('http://localhost:3000/api/user/register', {
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



async function login() {
    // console.log("test");

    const loginMail = document.getElementById("loginMail").value;
    const loginPW = document.getElementById("loginPW").value;

    const response = await fetch('http://localhost:3000/api/user/login', {
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
    // console.log(await response.json());

    if (response.status == 401) {
        window.alert(await response.json())
    } else if (response.status == 200) {
        window.alert("User succesfully logged in!")
        const data = await response.json();
        console.log(data);
        localStorage.setItem('userMail', data.user)
        document.getElementById("loginForm").style.display = "none";
    }
}