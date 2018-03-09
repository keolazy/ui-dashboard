
let searchButton = document.getElementById('getButton');
let showAllButton = document.getElementById('showAllButton');
let showEvents = document.getElementById('showEventsButton');

// let content = document.getElementsByClassName('ui')[0]
// content body
let searchField = document.getElementById('artistInput');
let cardResults = document.getElementById('cardResults');
let artistList = document.getElementById('artist-List');
let pinButton = document.getElementById('pinElement');
let artistArray = []; // stores previous search objects
let cardHolder = []; // stores previous searches cards

let pinnedArray = []; // stores pinned object info.
let pinnedCards = []; // stores pinned cards

function getArtistEvents(string) {
  let content = '';
  let eventBoolean = null;
  fetch(`https://rest.bandsintown.com/artists/${string}?app_id=nkg80`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      artistArray.push(data);
      // console.log(artistArray)
      // append to pinnedArtists array for now. make conditional button later
      let searchCard = `
      <div class="ui special cards">
        <div class="card">
          <div class="blurring dimmable image">
            <div class="ui dimmer">
              <div class="content">
                <div class="center">
                  <div class="ui inverted button">Pin Artist</div>
                </div>
              </div>
            </div>
            <img src=${data.thumb_url}>
          </div>

          <div class="content">
            <a class="header">${data.name}</a>
            <div class="meta">
              <span class="date">If available:<a href="${data.url}"> Book Here</a></span>
              <br>
              <span class='artistId'>artistId: ${data.tracker_count}</span>
            </div>
          </div>

          <div class="extra content">
            <a>
              <i class="users icon"></i>
              Upcoming Events: ${data.upcoming_event_count}
            </a>
          </div>
          <div id='pinElement' class="ui bottom attached button">
          <i class="add icon"></i>
              Pin Artist
          </div>
        </div>

      </div>`;


      // content += card; } if in for loop
    // .innerHTML completely deletes everything inside before inserting content.
    document.getElementById('results').innerHTML = searchCard;
  })
}

// Event listener, ensures action does not take place unless searchField contains string
  searchButton.addEventListener('click', ev => {
    console.log('Search Button Works')
    ev.preventDefault();
    if(searchField.value) {
      getArtistEvents(searchField.value);
      searchField.value = '';
    }
  });

  showAllButton.addEventListener('click', ev => {
    // console.log(artistArray);
    for(let artist of artistArray) {
      let tempCard =
              `<div class="ui special cards">
                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Pin Artist</div>
                        </div>
                      </div>
                    </div>
                    <img src=${artist.thumb_url}>
                  </div>

                  <div class="content">
                    <a class="header">${artist.name}</a>
                    <div class="meta">
                      <span class="date">If available:<a href="${artist.url}"> Book Here</a></span>
                      <br>
                      <span class='artistId'>artistId: ${artist.tracker_count}</span>
                    </div>
                  </div>

                  <div class="extra content">
                    <a>
                      <i class="users icon"></i>
                      Upcoming Events: ${artist.upcoming_event_count}
                    </a>
                  </div>
                  <div id='pinElement' class="ui bottom attached button">
                  <i class="add icon"></i>
                      Pin Artist
                  </div>
                </div>

              </div>`;
        cardHolder.push(tempCard);
      }

      // cardResults.append(tempCard);
      document.getElementById('cardResults').innerHTML = cardHolder;

  })

  // function getArtistEvents() {
  //   fetch("https://rest.bandsintown.com/artists/underoath/events?app_id=nkg80")
  //     .then(data => data.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  // }
