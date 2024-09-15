// Sample admin credentials
const credentials = {
    username: 'admin',
    password: 'admin123'
};

// Sample game data
let games = [
    {
        name: 'CG FC 24',
        thumbnail: 'images/cgfc.avif',
        url: 'https://www.crazygames.com/game/cg-fc-24',
        likes: 150,
        views: 2000
    },
    {
        name: 'Supermarket sort',
        thumbnail: 'images/supermarket.avif',
        url: 'https://www.crazygames.com/game/supermarket-sort-grocery-game',
        likes: 250,
        views: 5000
    },
    {
        name: 'Gun Strike Runner',
        thumbnail: 'images/gun-strike-runner.avif',
        url: 'https://www.crazygames.com/game/gun-strike-runner',
        likes: 188,
        views: 4800
    }
];

let isAddingNewGame = false; // This flag will tell us whether we are adding or editing a game
let currentGameIndex = null; // Holds the index of the game being edited

//Add your code below

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const login_page = document.querySelector("#login-page");
const LoginBtn = document.querySelector("#LoginBtn");
const dashboard_page = document.querySelector("#dashboard-page");
const login_error = document.querySelector("#login-error");
const add_new_game_btn = document.querySelector("#add-new-game-btn");
const edit_modal = document.querySelector("#edit-modal");
const close_edit_modal = document.querySelector("#close-edit-modal");
const game_list = document.querySelector("#game-list");
const SaveBtn = document.querySelector("#SaveBtn");
const edit_name = document.querySelector("#edit-name");
const edit_likes = document.querySelector("#edit-likes");
const edit_views = document.querySelector("#edit-views");
const remove_modal = document.querySelector("#remove-modal");
const edit_thumbnail = document.querySelector("#edit-thumbnail");
const edit_url = document.querySelector("#edit-url");
const confirm_remove = document.querySelector("#confirm-remove");
const cancel_remove = document.querySelector("#cancel-remove");
const close_remove_modal = document.querySelector("#close-remove-modal");

LoginBtn.addEventListener('click', function () {
    if (username.value === credentials.username && password.value === credentials.password) {
        login_page.style.display = "none";
        dashboard_page.style.display = "block";
    }

    else {
        login_error.textContent = "Invalid Credentials"
    }
})

add_new_game_btn.addEventListener("click", function () {
    edit_modal.style.display = "block";
})

close_edit_modal.addEventListener("click", function () {
    edit_modal.style.display = "none";
})

SaveBtn.addEventListener('click', function () {
    let newGame = {
        name: edit_name.value,
        thumbnail: edit_thumbnail.value,
        url: edit_url.value,
        likes: edit_likes.value,
        views: edit_views.value
    }
    edit_modal.style.display = "none";
    games.push(newGame);
    renderList()
})


renderList()

function renderList() {
    game_list.innerHTML = '';

    for (let i = 0; i < games.length; i++) {
        game_list.innerHTML += `
           <tr>
             <td>${games[i].name}</td>
             <td><img src="${games[i].thumbnail}" alt="CG FC 24"></td>
             <td><a class="Press-Play" href="${games[i].url}">Play</a></td>
             <td>${games[i].likes}</td>
             <td>${games[i].views}</td>
             <td><button onclick="EditPage(${i})" class="edit">Edit</button></td>
             <td><button onclick="removePage(${i})" class="remove">Remove</button></td>
           </tr>
        `;
    }
}

function removePage(g) {
    games.splice(g, 1);
    renderList();
}

function EditPage() {
    edit_modal.style.display = "block";
}

cancel_remove.addEventListener('click', function () {
    remove_modal.style.display = "none";
})

close_remove_modal.addEventListener("click", function () {
    remove_modal.style.display = "none";
})

function deleteAll(g) {
    games.splice(g, 100)
    renderList()
} 