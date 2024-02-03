const apiKey = "4a67eb42f4ba2b9c2619a0e349d692f9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchCity = document.querySelector(".search input");
const searchIcon = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".col").style.display = "none";
    document.querySelector(".details").style.display = "none";
    document.querySelector("#footer").style.display = "none";
  } else {
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".col").style.display = "flex";
    document.querySelector(".details").style.display = "flex";
    document.querySelector("#footer").style.display = "block";
    var data = await response.json();
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML =
      Math.round(data.main.temp) + "℃";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "imgs/cloudy.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "imgs/sunny.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "imgs/rainy day.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "imgs/mist.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "imgs/mist.png";
    }
    document.querySelector(".error").style.display = "none";
  }

}

searchIcon.addEventListener("click", () => {
  checkWeather(searchCity.value);
  // checkWeather().preventDefault()
});