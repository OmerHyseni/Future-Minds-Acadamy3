console.log("You are On!")

const userMgnBTN = document.querySelector("#userMgnBTN");
const learningBTN = document.querySelector("#learningBTN");
const reportsBTN = document.querySelector("#reportsBTN");
const settingsBTN = document.querySelector("#settingsBTN");
const pageFeed = document.querySelector("#page-feed");

userMgnBTN.addEventListener("click", function () {
    pageFeed.innerHTML = `<h2>${feedPages[0].title}</h2>
    <p>${feedPages[0].desc}</p>`
})

learningBTN.addEventListener("click", function () {
    pageFeed.innerHTML = `<h2>${feedPages[1].title}</h2>
    <p>${feedPages[1].desc}</p>`
})

reportsBTN.addEventListener("click", function () {
    pageFeed.innerHTML = `<h2>${feedPages[2].title}</h2>
    <p>${feedPages[2].desc}</p>`
})

settingsBTN.addEventListener("click", function () {
    pageFeed.innerHTML = `<h2>${feedPages[3].title}</h2>
    <p>${feedPages[3].desc}</p>`
})