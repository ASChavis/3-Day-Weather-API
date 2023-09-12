const searchBar = document.querySelector("input");
const searchBtn = document.querySelector("button");

async function checkWeather (city){

    const apiKey = "&key=be43167956334322af8222757230609";
    const apiURL = "https://api.weatherapi.com/v1/forecast.json";

    const response = await fetch(`${apiURL}?q=${city}${apiKey}&days=3`);
    var data = await response.json();

    console.log(data);
const classes = {
    ".city": data.location.name + ", " + data.location.region,
    ".day1": data.forecast.forecastday[0].date,
    ".day2": data.forecast.forecastday[1].date, 
    ".day3": data.forecast.forecastday[2].date, 
    ".temp1": data.forecast.forecastday[0].day.avgtemp_f + " °F", 
    ".temp2": data.forecast.forecastday[1].day.avgtemp_f + " °F", 
    ".temp3": data.forecast.forecastday[2].day.avgtemp_f + " °F", 
    ".condition1": data.forecast.forecastday[0].day.condition["text"],
    ".condition2": data.forecast.forecastday[1].day.condition["text"], 
    ".condition3": data.forecast.forecastday[2].day.condition["text"], 
    ".percentRain1": "Chance for Rain: " + data.forecast.forecastday[0].day.daily_chance_of_rain + "%",
    ".percentRain2": "Chance for Rain: " + data.forecast.forecastday[1].day.daily_chance_of_rain + "%", 
    ".percentRain3": "Chance for Rain: " + data.forecast.forecastday[2].day.daily_chance_of_rain + "%", 
    ".uv1": "UV: " + data.forecast.forecastday[0].day.uv, 
    ".uv2": "UV: " + data.forecast.forecastday[1].day.uv, 
    ".uv3": "UV: " + data.forecast.forecastday[2].day.uv, 
    ".moonphase1": data.forecast.forecastday[0].astro.moon_phase,
    ".moonphase2": data.forecast.forecastday[1].astro.moon_phase, 
    ".moonphase3": data.forecast.forecastday[2].astro.moon_phase, 
    ".coordinates": "Lat " + data.location.lat + ", Lon " + data.location.lon,
};

for (let className in classes) {
    document.querySelector(className).innerHTML = classes[className];
}

document.querySelector(".icon1").src = data.forecast.forecastday[0].day.condition.icon;
document.querySelector(".icon2").src = data.forecast.forecastday[1].day.condition.icon;
document.querySelector(".icon3").src = data.forecast.forecastday[2].day.condition.icon;

}

searchBtn.addEventListener("click", function (){
    checkWeather(searchBar.value);
});

searchBar.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
    checkWeather(searchBar.value);}
});