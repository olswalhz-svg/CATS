function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password.");
    } else {
        alert("Login Successful! Welcome to CatCare Help Center.");
        window.location.href = "home.html";
    }

}