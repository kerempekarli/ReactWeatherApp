const url = 'https://api.openweathermap.org/data/2.5/weather?';
const key = '6cbab5184f79b4240e8ed797bac5c664';


const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

    const getResult = (cityName) => {
    let query = `${url}q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country},`

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c` 

}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener('keypress',setQuery);





