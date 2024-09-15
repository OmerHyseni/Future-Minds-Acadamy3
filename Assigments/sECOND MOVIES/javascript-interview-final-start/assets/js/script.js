const movieList = document.querySelector("#movieList");
const movieThumb = document.querySelector('#movieThumb');


for (let i = 0; i < allMovies.length; i++) {
    movieList.innerHTML += `
<option value="${i}">${allMovies[i].gerne}</option>
`;
};

function loadMovies(g) {
    console.log(g)
}

let allMoviesHTML = allMovies[0].movies

for (let i = 0; i < allMoviesHTML.length; i++) {
    movieThumb.innerHTML += `  <li>
                        <h4>${allMoviesHTML[i].title}</h4>
                        <img src="assets/img/${allMoviesHTML[i].thumb}" alt="" class="img-xl">
                        <p>${allMoviesHTML[i].desc}</p>
                        <p>Length: ${allMoviesHTML[i].length}</p>
                        <p>Date: ${allMoviesHTML[i].date}</p>
                    </li>`
};