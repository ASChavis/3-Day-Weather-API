
const apiKey = "be43167956334322af8222757230609";
const apiURL = "http://api.weatherapi.com/v1/forecast.json?&days=3&aqi=no&alerts=yes&q=";
const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather (city){
    const response = await fetch(apiURL + city + `&key=${apiKey}`);
    var data = await response.json();

    console.log(data);

document.querySelector(".city").innerHTML = data.location.name + ", " + data.location.region;
document.querySelector(".day1").innerHTML = data.forecast.forecastday[0].date;
document.querySelector(".day2").innerHTML = data.forecast.forecastday[1].date;
document.querySelector(".day3").innerHTML = data.forecast.forecastday[2].date;
document.querySelector(".temp1").innerHTML = data.forecast.forecastday[0].day.avgtemp_f + " °F";
document.querySelector(".temp2").innerHTML = data.forecast.forecastday[1].day.avgtemp_f + " °F";
document.querySelector(".temp3").innerHTML = data.forecast.forecastday[2].day.avgtemp_f + " °F";
document.querySelector(".condition1").innerHTML = data.forecast.forecastday[0].day.condition["text"];
document.querySelector(".condition2").innerHTML = data.forecast.forecastday[1].day.condition["text"];
document.querySelector(".condition3").innerHTML = data.forecast.forecastday[2].day.condition["text"];
document.querySelector(".percentRain1").innerHTML = "Chance for Rain: " + data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
document.querySelector(".percentRain2").innerHTML = "Chance for Rain: " + data.forecast.forecastday[1].day.daily_chance_of_rain + "%";
document.querySelector(".percentRain3").innerHTML = "Chance for Rain: " + data.forecast.forecastday[2].day.daily_chance_of_rain + "%";
document.querySelector(".uv1").innerHTML = "UV: " + data.forecast.forecastday[0].day.uv;
document.querySelector(".uv2").innerHTML = "UV: " + data.forecast.forecastday[1].day.uv;
document.querySelector(".uv3").innerHTML = "UV: " + data.forecast.forecastday[2].day.uv;
document.querySelector(".moonphase1").innerHTML = data.forecast.forecastday[0].astro.moon_phase;
document.querySelector(".moonphase2").innerHTML = data.forecast.forecastday[1].astro.moon_phase;
document.querySelector(".moonphase3").innerHTML = data.forecast.forecastday[2].astro.moon_phase;
document.querySelector(".coordinates").innerHTML = "Lat " + data.location.lat + ", Lon " + data.location.lon;



document.querySelector(".icon1").src = data.forecast.forecastday[0].day.condition.icon;
document.querySelector(".icon2").src = data.forecast.forecastday[1].day.condition.icon;
document.querySelector(".icon3").src = data.forecast.forecastday[2].day.condition.icon;

}

searchBtn.addEventListener("click", function (){
    checkWeather(searchBar.value);
});

searchBar.addEventListener("keydown", function (event){
    if (event.keyCode === 13 || event.which === 13){
    checkWeather(searchBar.value);}
});