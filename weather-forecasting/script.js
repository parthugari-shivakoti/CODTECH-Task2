const apiKey = "3cc5c17bfc02f578a88fa257d8577044";
const cityname = document.querySelector('.input').value;
function posting(){
    let cityname = document.querySelector('.input').value;
    let city = document.querySelector('.city-name');
    city.innerHTML= cityname;
    document.querySelector('.input').value = '';
    if(cityname.trim()!=""){
        updateWeatherInfo(cityname);
        updateForecastInfo(cityname);       
    }
}
async function getFetchData(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response =await fetch(apiurl)
    return response.json()
}

async function updateWeatherInfo(city){
    let cels = document.querySelector('.celcius');
    let discription = document.querySelector('.description');
    const weatherData =await getFetchData(city);
    // console.log(weatherData.main.temp)
    cels.innerHTML = weatherData.main.temp+"°C";
    discription.innerHTML =weatherData.weather[0].description;
}
async function weatherFetch(city) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(weatherUrl);
    return response.json();
}

async function updateForecastInfo(city) {
    const forecastData =await weatherFetch(city);

    document.querySelector('.celcius1').innerHTML = forecastData.list[0].main.temp;
    document.querySelector('.celcius2').innerHTML = forecastData.list[8].main.temp;
    document.querySelector('.celcius3').innerHTML = forecastData.list[16].main.temp;
    document.querySelector('.celcius4').innerHTML = forecastData.list[24].main.temp;
    document.querySelector('.celcius5').innerHTML = forecastData.list[32].main.temp;

    document.querySelector('.Time1').innerHTML = forecastData.list[0].dt_txt.split(' ')[0];
    document.querySelector('.Time2').innerHTML = forecastData.list[8].dt_txt.split(' ')[0];
    document.querySelector('.Time3').innerHTML = forecastData.list[16].dt_txt.split(' ')[0];
    document.querySelector('.Time4').innerHTML = forecastData.list[24].dt_txt.split(' ')[0];
    document.querySelector('.Time5').innerHTML = forecastData.list[32].dt_txt.split(' ')[0];

    document.querySelector('.description1').innerHTML = forecastData.list[0].weather[0].description;
    document.querySelector('.description2').innerHTML = forecastData.list[8].weather[0].description;
    document.querySelector('.description3').innerHTML = forecastData.list[16].weather[0].description;
    document.querySelector('.description4').innerHTML = forecastData.list[24].weather[0].description;
    document.querySelector('.description5').innerHTML = forecastData.list[32].weather[0].description;
    
    document.querySelector('.weather-icon1').src = "images/"+forecastData.list[0].weather[0].icon+".png";
    document.querySelector('.weather-icon2').src = "images/"+forecastData.list[8].weather[0].icon+".png";
    document.querySelector('.weather-icon3').src = "images/"+forecastData.list[16].weather[0].icon+".png";
    document.querySelector('.weather-icon4').src = "images/"+forecastData.list[24].weather[0].icon+".png";
    document.querySelector('.weather-icon5').src = "images/"+forecastData.list[32].weather[0].icon+".png";

    console.log(forecastData)
} 









// https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=3cc5c17bfc02f578a88fa257d8577044&units=metric
