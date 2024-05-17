const navigation = document.querySelector("#navigation")
const Class = document.querySelector(".Class")

let buildNavHTML = "<ul>";

for (let i = 0; i < topNavigation.length; i++) {
    buildNavHTML += `<li><a href="#">${topNavigation[i]}</a></li>`
}
buildNavHTML += "</ul>";
navigation.innerHTML = buildNavHTML

let buildGenres = "";

for (let i = 0; i < allMovies.length; i++) {
    buildGenres += `<li><a href="javascript: loadGenres(${i})">${allMovies[i].genres}</a></li>`
}

Class.innerHTML = buildGenres

function Face() {
    let url = location.href;
    location.href = socialMedia[0].url;
}

function Linke() {
    let url = location.href;
    location.href = socialMedia[1].url;
}

function Insta() {
    let url = location.href;
    location.href = socialMedia[2].url;
}