// Sample review of my Q1 project

let searchButton = document.getElementById("getButton");
let searchField = document.getElementById("artistInput");
let cardResults = document.getElementById("cardResults");

let artistArray = [];
let cardHolder = [];

function getArtistEvents(string) {
  let content = "";
  let eventBoolean = null;
  fetch(`https://res.bandsintown.com/artists/${string}?app_id=nk80`)
    .then(data => data.json())
    .then(data => {
      artistArray.push(data);
      let searchCard = `
    <div class ='ui special cards'>
    </div>`;

      document.getElementById("results").innerHTML = searchCard;
    });
}

// Ensure action does not take place with empty searchField
searchButton.addEventListener("click", ev => {
  ev.preventDefault();
  if (searchField.value) {
    getArtistEvents(searchField.value);
    searchField.value = "";
  }
});
