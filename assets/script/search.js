// elements created for API call 
let query = window.location.search.substring(1);
let options = query.split(`&`);
let songName = options[1].split(`=`);
let artistName = options[0].split(`=`);
let artist = artistName[1];
let song = songName[1];


// html elements for dictionary searches
let websterForm = document.querySelector("#webster-form");
let urbanForm = document.querySelector("#urban-form");
let websterInput = document.querySelector("#webster-input");
let urbanInput = document.querySelector("#urban-input");



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
                // attaching lyrics to the html
                const renderLyrics = document.getElementById("render-lyrics")
                renderLyrics.textContent = data.lyrics
            })
        })
}
getLyrics();



// function to capture word input in form element
let wordSubmitWebster = function (event) {
    event.preventDefault();
    let websterWord = websterInput.value.trim();
    // getting word value and setting it to clear after search
    if (websterWord) {
        searchWebster(websterWord)
        websterInput.value = '';
    } else {
        console.log('need word to search')
    }
}
// event listener for word input
websterForm.addEventListener('submit', wordSubmitWebster);

// function to make API call to Webster Dictionary
function searchWebster() {
    // capturing word input 
    let wordW = websterInput.value;
    let websterURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + wordW + "?key=c5d60705-510a-44de-be78-83432ad9714a";
    fetch(websterURL)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                // attaching webster definition to html element
                const renderWebster = document.getElementById("render-webster")
                renderWebster.textContent = wordW + ": " + data[0].shortdef[0];
            })
        })
}



// // function to capture word input in form element
// let wordSubmitUrban = function (event) {
//     event.preventDefault();
//     let urbanWord = urbanInput.value.trim();
//     // getting word value and setting it to clear after search
//     if (urbanWord) {
//         searchUrban(urbanWord)
//         urbanInput.value = '';
//     } else {
//         console.log('Need a word to search')
//     }
// }
// // event listener for word input
// urbanForm.addEventListener('submit', wordSubmitUrban);

// // function to make API call to Urban Dictionary
// function searchUrban() {
//     // capturing word input
//     let wordU = urbanInput.value;
//     let urbanURL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + wordU;
//     fetch(urbanURL 
//         "headers": {
//         "x-rapidapi-key": "1bcc08aea8mshc3a3e71246a7264p1de70cjsnb40efe43f9b3",
//         "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"

//     })
//         .then(function (response) {
//             response.json().then(function (data) {
//                 console.log(data);

//                 // $urbanDefinition.text(data.list[0].definition);

//                 // attaching webster definition to html element
//                 const renderUrban = document.getElementById("render-urban")
//                 renderUrban.textContent = wordU + ": " + data.list[0].definition;
//             })
//         })
// }
