const type = document.querySelector("#type");
const List = document.querySelector("#List");
const add = document.querySelector("#add")

add.addEventListener("click", function (g) {
    List.innerHTML += `<div><input type="checkbox">` + type.value + `</div>` + `<a href="#" onclick="remove(${g})">Remove</a>`
})

function remove(index) {

}