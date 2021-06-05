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


// Testimaonials API
function ratings() {
    var $ratings = document.querySelectorAll(".rating")
    fetch('https://randomuser.me/api/?results=100')
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response);
            console.log($ratings);
            $ratings[0].children[0].attributes[0].value = response.results[0].picture.large
            $ratings[1].children[0].attributes[0].value = response.results[1].picture.large
            $ratings[2].children[0].attributes[0].value = response.results[2].picture.large
            $ratings[0].children[1].innerText = response.results[0].name.first + " " + response.results[0].name.last
            $ratings[1].children[1].innerText = response.results[1].name.first + " " + response.results[1].name.last
            $ratings[2].children[1].innerText = response.results[2].name.first + " " + response.results[2].name.last
        })

}

ratings()


// Mobile Menu
let burgerIcon = document.querySelector(`#burger`);
let navbarMenu = document.querySelector(`#navLinks`);

burgerIcon.addEventListener(`click`, () => {
    navbarMenu.classList.toggle(`is-active`);
});