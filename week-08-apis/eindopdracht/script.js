// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const showWeather = (data) => {
  // Zet de weerinformatie van data om naar HTML in #weather-info
  // Toon: stadsnaam, weer-icon, temperatuur, gevoelstemperatuur, luchtvochtigheid en windsnelheid
  // Rond de temperaturen af met Math.round()
  // Gebruik console.log(data) om de structuur te bekijken
  document.querySelector('#weather-info').innerHTML = `
    <h2>${data.name}</h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
    <p>Temperatuur: ${Math.round(data.main.temp)}°C</p>
    <p>Gevoelstemperatuur: ${Math.round(data.main.feels_like)}°C</p>
    <p>Luchtvochtigheid: ${data.main.humidity}%</p>
    <p>Windsnelheid: ${data.wind.speed} m/s</p>
  `;
};

const getWeather = (city) => {
  // Doe een fetch naar de OpenWeather API met city en API_KEY
  // De URL is: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // Gebruik console.log(data) om de structuur te bekijken
  // Roep showWeather(data) aan met de response
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      showWeather(data);
    });
};

// Voeg hier een submit event listener toe aan #search-form
// Gebruik e.preventDefault() zodat de pagina niet herlaadt
// Lees de waarde uit #city-input en roep getWeather(city) aan
// Maak de input daarna leeg
document.querySelector('#search-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#city-input');
  getWeather(input.value);
  input.value = '';
});