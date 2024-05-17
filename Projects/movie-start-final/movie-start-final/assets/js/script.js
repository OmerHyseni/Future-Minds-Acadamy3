const moviegenre = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist");

for (let i = 0; i < allMovies.length; i++) {
    moviegenre.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`
}

let loadMovieList = function (g) {
    let allMoviesHTML = '';
    let movieListGenre = allMovies[g].movies;

    for (let i = 0; i < movieListGenre.length; i++) {
        allMoviesHTML += `<li>
                            <h4>${movieListGenre[i].title}</h4>
                            <img src="assets/img/kill-boksoon.png" alt="Kill Boksoon">
                            <p class="description">A South Korean crime action movie, Kill Boksoon has mostly flown
                                under the radar but deserves much more attention from viewers and critics alike.</p>
                            <div class="row movie-stats m0 p0">
                                <div class="col m0 p0">Date: <span>01-03-2023</span> </div>
                                <div class="col m0 p0">Length: <span>108</span> </div>
                            </div>
                        </li>`
    }

    movielist.innerHTML = allMoviesHTML;
}