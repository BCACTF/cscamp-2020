window.addEventListener("load", _ => {
    let usernameField = document.getElementById("username");
    let passwordField = document.getElementById("password");
    let alertBox = document.getElementById("alert-box");

    document.getElementById("secure-login").addEventListener("submit", e => {
        e.preventDefault(); // Prevent the Page™ from reloading

        let username = usernameField.value;
        let password = passwordField.value;

        // The Core™ of Our™ Secure™ Login™ System™
        if (username === "admin" && password === "thisisaverysecurepasswordhahaaaaaa") {
            alertBox.innerText = "Logged in. Fetching flag...";
            alertBox.style.display = "block";

            fetchFlag(username, password, alertBox);
        } else {
            alertBox.innerText = "Incorrect username or password.";
            alertBox.style.display = "block";
        }
    });

    passwordField.addEventListener("invalid", e => {
        if (e.target.validity.valid) {
            e.target.setCustomValidity("");
        } else {
            e.target.setCustomValidity("Did you really think you could log in without a password?");
        }
    });

    passwordField.addEventListener("input", e => e.target.setCustomValidity(""));
});

function fetchFlag(username, password, alertBox) {
    fetch("/flag", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        alertBox.innerText = data.flag;
    }).catch(err => {
        alertBox.innerText = "You logged in, but an error occurred while fetching the flag. Check your Internet connection or contact CS Camp staff.";
        console.error(err);
    });
}
