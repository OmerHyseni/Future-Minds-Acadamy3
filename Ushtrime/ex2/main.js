let Myimg = document.getElementById("Myimg");
let Animal = document.querySelector("#Animal");

function loadImage(g) {
    let Imageselect = Images[g].image1;
    for (let i = 0; i < Imageselect.length; i++) {
        Myimg.src = `images/${Imageselect[i].image}`;
    }

}
