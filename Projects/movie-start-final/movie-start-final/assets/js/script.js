const movieGernes = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist");
const movies_details_page = document.querySelector(".movie-details-page");

for (let i = 0; i < allMovies.length; i++) {
    movieGernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`
}

loadMovie(0);
loadMovies(0, 1);

function loadMovie(g) {
    let allMoviesHTML = '';
    let gerneMovies = allMovies[g].movies
    for (let i = 0; i < gerneMovies.length; i++) {
        allMoviesHTML += `<li class="selected-movie" onclick="loadMovies(${g}, ${i}, this)">
                            <h4>${gerneMovies[i].title}</h4>
                            <img src="assets/img/${gerneMovies[i].thumb}" alt="Plane">
                            <p class="description">${gerneMovies[i].desc}</p>
                            <div class="row movie-stats m0 p0">
                                <div class="col m0 p0">Date: <span>${gerneMovies[i].date}</span> </div>
                                <div class="col m0 p0">Length: <span>${gerneMovies[i].length}</span> </div>
                            </div>
                        </li>`
        movielist.innerHTML = allMoviesHTML;
    };
};

function loadMovies(g, m, activeMovies) {
    let moviesss = allMovies[g].movies[m];

    movies_details_page.innerHTML = `  <h1>${moviesss.title}</h1>
                            <h4>Date: ${moviesss.date} | Length: ${moviesss.length}min</h4>
                            <div class="container">
                                ${moviesss.trailer}
                            </div>

                            <h4>${moviesss.actors}</h4>
                            <p>${moviesss.desc}</p>`

    for (let i = 0; i < movielist.children.length; i++) {
        movielist.children[i].classList.remove("selected-movie");
    }
    activeMovies.classList.add("selected-movie");

}