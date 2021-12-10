// Function to return current day, e.g, Monday and current time as a string.
function getCurrentDayTime() {
  var now = new Date();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  return day[now.getDay().toString()] + " " + hours + ":" + minutes;
}

function changeCity(event) {
  event.preventDefault();

  let newCity = document.getElementById("searchCity");
  document.getElementById("currentCity").innerHTML = `${newCity.value}`;

  let apiKey = "84f7c33511701b3c7270d57e7103d5b5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&units=metric`;

  axios.get(`${apiUrl}&appId=${apiKey}`).then(function callback(response) {
    let temperature = Math.round(response.data.main.temp);
    document.querySelector("#currentTemp").innerHTML = temperature + "°C";
  });
}

let currentDayTime = getCurrentDayTime();
document.getElementById("currentDayTime").innerText = currentDayTime;

document.getElementById("searchForm").addEventListener("submit", changeCity);
