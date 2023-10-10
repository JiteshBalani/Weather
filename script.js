const input = document.querySelector('input');
const getWeatherData = document.querySelector('button');

const city = document.querySelector('.city');
const region = document.querySelector('.region');
const country = document.querySelector('.country');
const icon = document.querySelector('.icon');
const temperature = document.querySelector('.temperature');
const feels_like = document.querySelector('.feels_like');
const local_time = document.querySelector('.local_time');

const getWeather = async (location) => {
    let apiData = `http://api.weatherapi.com/v1/current.json?key=203541b403384973ba8205321232609&q=${location}&aqi=no`;

    try {
        let url = await fetch(apiData);
        let fData = await url.json();
        console.log(fData);
        city.innerHTML = fData.location.name;
        region.innerHTML = fData.location.region
        country.innerHTML = fData.location.country;
        icon.innerHTML = `<img src="${fData.current.condition.icon}" alt="Weather Icon">`;
        temperature.innerHTML = `${fData.current.temp_c}&#8451;`;
        feels_like.innerHTML = `${fData.current.feelslike_c}&#8451;`;
        local_time.innerHTML = fData.location.localtime;
    }
    catch (error) {
        alert('Error! Please try again after some time.')
    }
}

function search(e) {
    e.preventDefault();
    if (input.value.trim() === '') {
        alert('Type a city name.')
    }
    else {
        getWeather(input.value.trim());
    }
}

getWeatherData.addEventListener('click', search);




