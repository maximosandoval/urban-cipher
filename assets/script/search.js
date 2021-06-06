// api call break up 
let query = window.location.search.substring(1);
let options = query.split(`&`);
let songName = options[1].split(`=`);
let artistName = options[0].split(`=`);
let artist = artistName[1];
let song = songName[1];
// html elements for dictionary searches
let websterButton = document.querySelector("#webster-button");
let urbanButton = document.querySelector("#urban-button");
let websterInput = document.querySelector("#webster-input");
let urbanInput = document.querySelector("#urban-input");
let renderWebster = document.getElementById("render-webster")
let urbanRender = document.getElementById("render-urban");
let defList = [];
let deffList = [];
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
            return response.json()
        })
        .then(function (data) {
            console.log(data.lyrics);
            // attaching lyrics to the html
            const renderLyrics = document.getElementById("render-lyrics")
            renderLyrics.textContent = data.lyrics
        })
}
getLyrics();
// function to search urban dictionary API
function searchUrban() {
    let word = urbanInput.value;
    let urbanURL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + word;
    fetch(urbanURL, {
        "headers": {
            "x-rapidapi-key": "1bcc08aea8mshc3a3e71246a7264p1de70cjsnb40efe43f9b3",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    })
        .then(function (response) {
            return response.json()
        })
        // creating text content from API call
        .then(function (response) {
            let newUL = document.createElement("ul");
            let deffList = response.list
            for (var i = 0; i < deffList.length; i++) {
                let newLi = document.createElement("li")
                newLi.textContent = deffList[i].definition
                newUL.append(newLi);
            }
            urbanRender.append(newUL);
        });
    urbanInput.value = '';
}
urbanButton.addEventListener("click", searchUrban);
// function to search webster dictionary API
function searchWebster() {
    let word = websterInput.value;
    let websterURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=c5d60705-510a-44de-be78-83432ad9714a";
    fetch(websterURL)
        .then(function (response) {
            // creating text content from API call
            return response.json()
        })
        .then(function (data) {
            let newUL = document.createElement("ul");
            let defList = data;
            for (var i = 0; i < defList.length; i++) {
                let newLi = document.createElement("li")
                newLi.textContent = defList[i].shortdef[0];
                newUL.append(newLi);
            }
            renderWebster.append(newUL);
        });
    websterInput.value = '';
}
websterButton.addEventListener('click', searchWebster);
// function to search urban dictionary API
function searchUrban() {
    let word = urbanInput.value;
    let urbanURL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + word;
    fetch(urbanURL, {
        "headers": {
            "x-rapidapi-key": "1bcc08aea8mshc3a3e71246a7264p1de70cjsnb40efe43f9b3",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    })
        .then(function (response) {
            return response.json()
        })
        // creating text content from API call
        .then(function (response) {
            let newUL = document.createElement("ul");
            let deffList = response.list
            for (var i = 0; i < deffList.length; i++) {
                let newLi = document.createElement("li")
                newLi.textContent = deffList[i].definition
                newUL.append(newLi);
            }
            urbanRender.append(newUL);
        });
    urbanInput.value = '';
}
urbanButton.addEventListener("click", searchUrban);
// function to search webster dictionary API
function searchWebster() {
    let word = websterInput.value;
    let websterURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=c5d60705-510a-44de-be78-83432ad9714a";
    fetch(websterURL)
        .then(function (response) {
            // creating text content from API call
            return response.json()
        })
        .then(function (data) {
            let newUL = document.createElement("ul");
            let defList = data;
            for (var i = 0; i < defList.length; i++) {
                let newLi = document.createElement("li")
                newLi.textContent = defList[i].shortdef[0];
                newUL.append(newLi);
            }
            renderWebster.append(newUL);
        });
    websterInput.value = '';
}
websterButton.addEventListener('click', searchWebster);