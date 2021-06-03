
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


// function to render lyrics to screen
function getLyrics() {
    // API call to fetch lyrics
    let lyricURL = "https://api.lyrics.ovh/v1/" + artist + "/" + song;

    fetch(lyricURL)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data.lyrics);
                // using html elements to append lyrics
                const renderLyrics = document.getElementById("render-lyrics")
                renderLyrics.textContent = data.lyrics
            })
        })
}
getLyrics();



// function searchUrban() {
//     let word = $wordInputWebster.val().trim();
//     let urbanURL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + word;
//     fetch(urbanURL 
//         "headers": {
//         "x-rapidapi-key": "1bcc08aea8mshc3a3e71246a7264p1de70cjsnb40efe43f9b3",
//         "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"

//     })
//         .then(function (response) {
//             response.json().then(function (data) {
//                 $urbanDefinition.text(data.list[0].definition);
//             })
//         })
// }




function searchWebster() {
    let word = $wordInputWebster.val().trim();
    let websterURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=c5d60705-510a-44de-be78-83432ad9714a";
    fetch(websterURL)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                $websterDefinition.text(data.shortdef[0]);


                // const renderWebster = document.getElementById("render-webster")
                // renderWebster.textContent = data.
            })
        })
}