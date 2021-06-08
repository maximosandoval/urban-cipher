var searchForm = document.querySelector("#search-form")
var $artistInput = document.querySelector("#artist-input");
var $songInput = document.querySelector("#song-input");
var topTracks = [];


// Testimaonials API
function ratings() {
    var $ratings = document.querySelectorAll(".rating")
    fetch('https://randomuser.me/api/?results=100')
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log($ratings);
            for (let i = 0; i < 3; i++) {
                var rating = Math.ceil(Math.random() * 5);
                $ratings[i].children[0].attributes[0].value = response.results[i].picture.large;
                $ratings[i].children[1].innerText = response.results[i].name.first + " " + response.results[i].name.last;
                // $ratings[i].children[2].innerText = rating + "/5 stars";
            }

        })
}

ratings()


// Mobile Menu
let burgerIcon = document.querySelector(`#burger`);
let navbarMenu = document.querySelector(`#navLinks`);

burgerIcon.addEventListener(`click`, () => {
    navbarMenu.classList.toggle(`is-active`);
});

async function songDropDown() {
    topTracks = [];
    console.log("test");
    let artist = $artistInput.value;
    let artistURL = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key= fe213c5c74b1daedf69a016962169299&format=json&autocorrect=1";
    
    const response = await fetch(artistURL);
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < 10; i++) {
        topTracks.push(data.toptracks.track[i].name)
    }
    return topTracks;
}


$songInput.addEventListener("focus", async function () {
    topTracks = [];
    const newTracks = await songDropDown();
    console.log(newTracks);
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    // closeAllLists();
    // if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < newTracks.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (newTracks[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + newTracks[i].substr(0, val.length) + "</strong>";
            b.innerHTML += newTracks[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + newTracks[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function (e) {
                /*insert the value for the autocomplete text field:*/
                $songInput.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
        }
    }
})
// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/

//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function (e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//             /*If the arrow DOWN key is pressed,
//             increase the currentFocus variable:*/
//             currentFocus++;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 38) { //up
//             /*If the arrow UP key is pressed,
//             decrease the currentFocus variable:*/
//             currentFocus--;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 13) {
//             /*If the ENTER key is pressed, prevent the form from being submitted,*/
//             e.preventDefault();
//             if (currentFocus > -1) {
//                 /*and simulate a click on the "active" item:*/
//                 if (x) x[currentFocus].click();
//             }
//         }
//     });
//     function addActive(x) {
//         /*a function to classify an item as "active":*/
//         if (!x) return false;
//         /*start by removing the "active" class on all items:*/
//         removeActive(x);
//         if (currentFocus >= x.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = (x.length - 1);
//         /*add class "autocomplete-active":*/
//         x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//         /*a function to remove the "active" class from all autocomplete items:*/
//         for (var i = 0; i < x.length; i++) {
//             x[i].classList.remove("autocomplete-active");
//         }
//     }
    
//     /*execute a function when someone clicks in the document:*/
    
// }

function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != $songInput) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
 });

