# weatherAppDash

This app was created to display temp, humidity, uv index, and wind power for a city of the users choosing.
The info for that city is saved locally and displayed in a card container for the user to add another city.

a fetch input was used in the weatherDash function to call the openweathermap.org's API with a string concatention to apply the 
specific city's weather info that's input by the user, followed by .then to return the promise in JSON, and it's data in Json is then stored at
the end of the function.

my submit button uses a function to both store the value of input chosen by the user into the name ID class of my html and to revert back
to an empty input form once button is clicked. A prevent default call is used in the function to prevent
the information from refreshing once the event listener hears the "submit" 



