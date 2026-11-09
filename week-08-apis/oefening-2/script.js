let allCountries = [];

async function haalLandenOp() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');

    if (!response.ok) {
      throw new Error('API error');
    }

    const data = await response.json();

    console.log(data); // Kijk eerst wat je krijgt!

    // Sla data op in allCountries
    allCountries = data;

    // Toon alle landen
    toonLanden(allCountries);

  } catch (error) {
    console.error('Fout:', error);
  }
}

// Toon alle landen in #country-list met naam en afbeelding
// Toon het aantal in #counter
function toonLanden(list) {
  const container = document.querySelector('#country-list');
  const counter = document.querySelector('#counter');

  container.innerHTML = '';

  for (let country of list) {
    const card = document.createElement('article');
    card.innerHTML = `
      <h3>${country.name.common}</h3>
      <img src="${country.flags.png}" alt="Vlag van ${country.name.common}">
    `;
    container.appendChild(card);
  }

  counter.textContent = list.length;
}

// Voeg een event listener toe aan #search-bar
// Filter allCountries op naam en herrender de lijst
document.querySelector('#search-bar').addEventListener('input', event => {
  const query = event.target.value.toLowerCase();

  const filtered = allCountries.filter(country =>
    country.name.common.toLowerCase().includes(query)
  );

  toonLanden(filtered);
});

haalLandenOp();