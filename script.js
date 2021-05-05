var currentTime = [];
var cityName = "";
var key = "ced9d59d21ec6fdf4cf0c985ca23cba5";
var searchForm = document.querySelector("#citySearchBar");
function weatherDash() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// I want the submit button to save locally when user clicks submit
// I want locally saved information from submit button to display api call information
// converting data(city name, lat lon) into string PROBLEM SOLVE

function buttonHandler(event) {
  cityName = document.querySelector("#name").value;
  document.querySelector("#name").value = "";

  event.preventDefault();

  console.log(cityName);
  weatherDash();
}

searchForm.addEventListener("submit", buttonHandler);
