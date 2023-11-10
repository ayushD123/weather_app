// https://api.openweathermap.org/data/2.5/weather?appid=7aae069ed0e98f4bb2f7e6622ff7d1ba&units=metric&q=mumbai

var input=document.querySelector("input");
var button=document.querySelector("button");
var temp=document.querySelector(".temp");
var humid=document.querySelector(".humidity");
var wind=document.querySelector(".wind");
var city_name=document.querySelector(".city-name");

button.addEventListener("click", async function(){
    var city=input.value;
    city = city.charAt(0).toUpperCase() + city.slice(1); // capitalize first letter of city
    const url="https://api.openweathermap.org/data/2.5/weather?appid=7aae069ed0e98f4bb2f7e6622ff7d1ba&units=metric&q="+city;
    const response=await fetch(url);
    const data=await response.json();
    
    var temperture=data.main.temp.toFixed(0); // round off to 1 decimal place
    var humidity=data.main.humidity;
    var wind_speed=data.wind.speed;
    console.log(wind_speed);
    temp.innerHTML=temperture+"°C";
    humid.innerHTML=humidity+"%";
    wind.innerHTML=wind_speed+"m/s";
    city_name.innerHTML=data.name;
    
});


