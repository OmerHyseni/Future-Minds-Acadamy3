const title = document.querySelector('#title')
const img = document.querySelector('#img')
const under = document.querySelector('#under')
const under2 = document.querySelector('#under2')
const under3 = document.querySelector('#under3')
const under4 = document.querySelector('#under4')


function load(seasons) {
    if (seasons == 'spring') {
        title.textContext = "Welcome to Spring";
        img.src = "assets/images/spring.png";
        under2.style.textDecoration = "underline"
        under3.style.textDecoration = "none";
        under4.style.textDecoration = "none"
        under.style.textDecoration = "none";

    }
    if (seasons == 'summer') {
        title.textContent = "Welcome to Summer";
        img.src = "assets/images/summer.png";
        under.style.textDecoration = "underline";
        under2.style.textDecoration = "none";
        under3.style.textDecoration = "none";
        under4.style.textDecoration = "none"
    }
    if (seasons == 'fall') {
        title.textContent = "Welcome to Fall";
        img.src = "assets/images/fall.png";
        under3.style.textDecoration = "underline";
        under.style.textDecoration = "none";
        under2.style.textDecoration = "none"
        under4.style.textDecoration = "none"
    }
    if (seasons == 'winter') {
        title.textContent = "Welcome to Winter";
        img.src = "assets/images/winter.png";
        under4.style.textDecoration = "underline";
        under3.style.textDecoration = "none";
        under2.style.textDecoration = "none";
        under.style.textDecoration = "none";
    }
    if (seasons == 'allseasons') {
        title.textContent = "Welcome to All Seasons";
        img.src += "assets/images/spring.png";
        img.src += "assets/images/summer.png";
        img.src += "assets/images/fall.png";
        img.src += "assets/images/winter.png";

    }

}