const movieGernes = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist");
const movie_details_page = document.querySelector(".movie-details-page");

for (let i = 0; i < allMovies.length; i++) {
    movieGernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`
}

loadMovies(0);
loadMovies(0, 1);

function loadMovies(g) {
    let allMoviesHTML = '';
    let gerneMovies = allMovies[g].movies;
    for (let i = 0; i < gerneMovies.length; i++) {
        allMoviesHTML += `  <li class="selected-movie" onclick="loadMovie(${g}, ${i}, this)">
                            <h4>${gerneMovies[i].title}</h4>
                            <img src="assets/img/${gerneMovies[i].thumb}" alt="Plane">
                            <p class="description">${gerneMovies[i].desc}</p>
                            <div class="row movie-stats m0 p0">
                                <div class="col m0 p0">Date: <span>${gerneMovies[i].date}</span> </div>
                                <div class="col m0 p0">Length: <span>${gerneMovies[i].length}</span> </div>
                            </div>
                        </li>`

        movielist.innerHTML = allMoviesHTML;
    }
}

function loadMovie(g, m, activeMovies) {
    let Moviess = allMovies[g].movies[m];
    movie_details_page.innerHTML = `<h1>${Moviess.title}</h1>
                            <h4>Date: ${Moviess.date} | Length: ${Moviess.length}min</h4>
                            <div class="container">
                                ${Moviess.trailer}
                            </div>

                            <h4>${Moviess.actors}</h4>
                            <p>${Moviess.desc}.</p>`;
    for (let i = 0; i < movielist.children.length; i++) {
        movielist.children[i].classList.remove("selected-movie");
    }
    activeMovies.classList.add("selected-movie");

}