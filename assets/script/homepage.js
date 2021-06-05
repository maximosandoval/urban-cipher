var searchForm = document.querySelector("#search-form")
var $artistInput = document.querySelector("#artist-input");
var $songInput = document.querySelector("#song-input");





function getLyrics() {
    let artist = $artistInput.val().trim();
    let song = $songInput.val().trim();
    let lyricURL = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
    fetch(lyricURL)
        .then(function (response) {
            response.json().then(function (data) {
                $lyrics.text(data.lyrics);
            })

        })
}



function songDropDown() {
    let artist = $artistInput.val().trim();
    let artistURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key= fe213c5c74b1daedf69a016962169299&format=json";
    fetch(artistURL)
        .then(function (response) {
            response.json().then(function (data) {

            })
        })
}






// Mobile Menu
let burgerIcon = document.querySelector(`#burger`);
let navbarMenu = document.querySelector(`#navLinks`);

burgerIcon.addEventListener(`click`, () => {
    navbarMenu.classList.toggle(`is-active`);
});