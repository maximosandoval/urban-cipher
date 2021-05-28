let query = window.location.search.substring(1);
let options = query.split(`&`);
let songName = options[1].split(`=`);
let artistName = options[0].split(`=`);
let artist = artistName[1];
let song = songName[1];

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