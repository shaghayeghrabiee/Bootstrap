const submit = document.querySelector("#mybtn");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const userErr = document.querySelector(".userErr");
const emailErr = document.querySelector(".emailErr");
const passErr = document.querySelector(".passErr");
const signinText = document.querySelector(".signin-status");


const url = "https://jsonplaceholder.typicode.com/posts";
let ifDataSend = true;

submit.addEventListener("click", e => {
    e.preventDefault();
    userErr.innerText = "";
    emailErr.innerText = "";
    passErr.innerText = "";

    if (userName.value.trim() === "") {
        userErr.innerText = "Please enter username!";
        ifDataSend = false;
    }
    if (email.value.trim() === "" || (!email.value.includes("@"))) {
        emailErr.innerText = "Please enter a valid email!";
        ifDataSend = false;
    }
    if (password.value.trim() === "") {
        passErr.innerText = "Please enter username!";
        ifDataSend = false;
    } else if (password.value.length < 5) {
        passErr.innerText = "Your password is too short!";
        ifDataSend = false;
    }

    if (ifDataSend) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: userName.value,
                password: password.value,
                email: email.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (response.status === 201) {
                    signinText.innerText = "Your user has been created successfully"
                }
                // console.log(response.status);
            })

            .catch(() => {
                signinText.innerText = "something went wrong";
                signinText.style.color = "red";
                input.value = ""
            })

    }
})
