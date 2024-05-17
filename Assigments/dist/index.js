const username = document.querySelector("#username");
const Password = document.querySelector("#Password");
const loginBtn = document.querySelector("#login")
let Wrongg = document.querySelector("#Wrongg")

Wrongg.style.display = "none";

loginBtn.addEventListener("click", function () {
    if (username.value == "ridvan@eduongo.com" && Password.value == "Elham24") {
        alert("you logged in")
        Wrongg.style.display = "none";
    }
    else {
        Wrongg.style.display = "block";
    }
})