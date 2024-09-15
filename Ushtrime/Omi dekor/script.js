let Number1 = document.querySelector("#Number1");
let Number2 = document.querySelector("#Number2");
const SubmitBtn = document.querySelector("#SubmitBtn");
const Output = document.querySelector("#Output");
SubmitBtn.addEventListener("click", function () {
    Output.innerHTML = Number1.value * Number2.value * 120;
})

function resetWebsite() {
    location.reload();
}
