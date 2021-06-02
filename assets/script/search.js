let query = window.location.search.substring(1);
let options = query.split(`&`);
let songName = options[1].split(`=`);
let artistName = options[0].split(`=`);
let artist = artistName[1];
let song = songName[1];

// Mobile Menu
let burgerIcon = document.querySelector(`#burger`);
let navbarMenu = document.querySelector(`#navLinks`);

burgerIcon.addEventListener(`click`, () => {
    navbarMenu.classList.toggle(`is-active`);
});

function getLyrics() {
    let lyricURL = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
    fetch(lyricURL)
        .then (function (response) {
            response.json().then(function (data) {
                console.log(data.lyrics);
            })
        })
}



getLyrics();