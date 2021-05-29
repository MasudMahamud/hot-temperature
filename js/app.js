const apiKey = "dccb3354f52e12cc14ff309e0d23b1cc";
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';


const getWeatherData = city => {
     const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
     fetch(url)
     .then(res => res.json())
     .then(data => {
      document.getElementById("city-name").innerText = data.name  || "Unknown Location!";
      document.getElementById("city-temp").innerText = data.main.temp || "Unknown weather!";
 })}


 const searchButton = document.getElementById("search-button");
 searchButton.addEventListener('click', () => {
    const searchCity = document.getElementById("city").value;
    getWeatherData(searchCity);
    document.getElementById("city").value ="";
})
getWeatherData('Dhaka');

