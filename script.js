const apiKey = "2b2927141fd3188347611980f6e45e2e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";

const searchBtn = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function checkWeather() {
  const response = await fetch(apiUrl + apiKey);
  var data = await response.json();

  console.log(data);
}

checkWeather();