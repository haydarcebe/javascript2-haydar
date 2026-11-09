
let allCities = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
 
// Steden met coördinaten, de weerdata komt van Open-Meteo (geen API key nodig)
const cities = [
  { name: 'Amsterdam', lat: 52.37, lon: 4.90 },
  { name: 'Rotterdam', lat: 51.92, lon: 4.48 },
  { name: 'Utrecht', lat: 52.09, lon: 5.12 },
  { name: 'Den Haag', lat: 52.08, lon: 4.31 },
  { name: 'Groningen', lat: 53.22, lon: 6.57 },
  { name: 'Eindhoven', lat: 51.44, lon: 5.47 },
  { name: 'Maastricht', lat: 50.85, lon: 5.69 },
  { name: 'Zwolle', lat: 52.51, lon: 6.09 },
  { name: 'Leeuwarden', lat: 53.20, lon: 5.80 },
  { name: 'Middelburg', lat: 51.50, lon: 3.61 }
];
 
// Zet de weercode van Open-Meteo om naar een emoji
const getWeatherIcon = (code) => {
  if (code === 0) return '☀️';
  if (code <= 3) return '⛅';
  if (code <= 48) return '🌫️';
  if (code <= 67) return '🌧️';
  if (code <= 77) return '❄️';
  if (code <= 82) return '🌦️';
  return '⛈️';
};
 
const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
 
const showItems = (items) => {
  const container = document.querySelector('#results');
 
  // Lege staat: toon een nette melding als er niets te tonen is
  if (items.length === 0) {
    container.innerHTML = '<p class="leeg">Geen steden gevonden.</p>';
    return;
  }
 
  // Zet elk item om naar een <article> met map() en toon het in #results
  // Toon het weericoon en de naam van elke stad
  // Voeg een <button class="favorite-btn"> toe per kaartje
  // Gebruik includes() om te checken of de naam al in favorites staat
  // Geef de knop een andere tekst als de stad al een favoriet is
  container.innerHTML = items.map(item => `
    <article>
      <span class="icon">${getWeatherIcon(item.weatherCode)}</span>
      <h2>${item.name}</h2>
      <p>${item.temperature}°C</p>
      <button class="favorite-btn">
        ${favorites.includes(item.name) ? '★ Favoriet' : '☆ Voeg toe aan favorieten'}
      </button>
    </article>
  `).join('');
 
  // Voeg daarna een click event listener toe aan elke .favorite-btn
  // De index i vertelt je welke stad bij welke knop hoort: items[i].name
  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      // Voeg items[i].name toe aan favorites (alleen als hij er nog niet in staat)
      if (!favorites.includes(items[i].name)) {
        favorites.push(items[i].name);
      }
 
      // Sla de favorieten op in localStorage
      saveFavorites();
 
      // Toon de lijst opnieuw zodat de knoptekst bijgewerkt wordt
      showItems(items);
    });
  });
};
 
document.querySelector('#loading').textContent = 'Laden...';
 
// Open-Meteo accepteert meerdere locaties in één request, de komma-gescheiden
// lijsten van lat en lon horen bij elkaar op volgorde
const latitudes = cities.map(city => city.lat).join(',');
const longitudes = cities.map(city => city.lon).join(',');
 
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitudes}&longitude=${longitudes}&current=temperature_2m,weather_code`)
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
 
    // Sla de data op in allCities, voeg het id toe via de index
    // Bij meerdere locaties is data een array met één object per stad
    allCities = data.map((weather, index) => ({
      id: index + 1,
      name: cities[index].name,
      temperature: Math.round(weather.current.temperature_2m),
      weatherCode: weather.current.weather_code
    }));
 
    // Roep showItems() aan met allCities
    showItems(allCities);
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });
 
// Maak een eventlistener voor de #show-all button
document.querySelector('#show-all').addEventListener('click', () => {
  // Roep showItems() aan met allCities
  showItems(allCities);
});
 
// Maak een eventlistener voor de #show-favorites button
document.querySelector('#show-favorites').addEventListener('click', () => {
  // Filter allCities op namen die in favorites staan (gebruik includes())
  const favorieteSteden = allCities.filter(city =>
    favorites.includes(city.name)
  );
 
  // Roep showItems() aan met het gefilterde resultaat
  showItems(favorieteSteden);
});