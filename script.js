var cityName = "";
var key = "ced9d59d21ec6fdf4cf0c985ca23cba5";
var searchForm = document.querySelector("#citySearchBar");
function weatherDash() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&units=imperial" +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log("weather api data: ", data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var city = data.name;
      // fetch complete weather data from one call api
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=minutely,hourly,alert" +
          "&units=imperial" +
          "&appid=" +
          key
      )
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          console.log("One call api data: ", data);
          document.querySelector("#city").innerHTML = city;
          document.querySelector("#currentTemp").innerHTML = data.current.temp;
          document.querySelector("#wind").innerHTML = data.current.wind_speed;
          document.querySelector("#UvIndex").innerHTML = data.current.uvi;
        });

      // psuedo code- get name of city from data
      // get current temp from data
      //
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
