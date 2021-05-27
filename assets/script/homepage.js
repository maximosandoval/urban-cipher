// var $artistInput = $("#");
// var $songInput = $("#");
// var $lyrics = $("#");
// var $websterDefinition = $("#");
// var $urbanDefinition = $("#");

function getLyrics() {
    let artist = $artistInput.val().trim();
    let song = $songInput.val().trim();
    let lyricURL = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
    fetch(lyricURL)
        .then (function (response) {
            response.json().then(function (data) {
                $lyrics.text(data.lyrics);
            })
        })
}

function searchWebster() {
    let word = $wordInputWebster.val().trim();
    let websterURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=c5d60705-510a-44de-be78-83432ad9714a";
    fetch(websterURL)
    .then (function (response) {
        response.json().then(function (data) {
            $websterDefinition.text(data.shortdef[0]);
        })
    })
}

function searchUrban() {
    let word = $wordInputWebster.val().trim();
    let urbanURL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + word;
    fetch(urbanURL,
        "headers": {
            "x-rapidapi-key": "1bcc08aea8mshc3a3e71246a7264p1de70cjsnb40efe43f9b3",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        })
    .then (function (response) {
        response.json().then(function (data) {
            $urbanDefinition.text(data.list[0].definition);
        })
    })
}

// function songDropDown() {
//     let artist = $artistInput.val().trim();
//     let artistURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key= fe213c5c74b1daedf69a016962169299&format=json";
//     fetch(artistURL)
//         .then (function (response) {
//             response.json().then(function (data) {

//             })
//         })
// }