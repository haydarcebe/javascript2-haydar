let allArticles = [];

const showArticles = (articles) => {
  // Zet elk artikel om naar een <article> met map() en toon het in #articles
  // Toon de title, category en summary van elk artikel
  const container = document.querySelector('#articles');

  // Lege staat
  if (articles.length === 0) {
    container.innerHTML = '<p class="leeg">Geen artikelen gevonden.</p>';
    return;
  }

  container.innerHTML = articles
    .map(article => `
      <article>
        <h2>${article.title}</h2>
        <p>${article.category}</p>
        <p>${article.summary}</p>
      </article>
    `)
    .join('');
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    // Sla de artikelen op in allArticles
    allArticles = articles;

    // Roep showArticles() aan met allArticles
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

// Maak een eventlistener voor de #filter-alle button
// Roep showArticles() aan met allArticles
document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

// Maak een eventlistener voor de #filter-stad button
// Filter allArticles op category 'Stad' en roep showArticles() aan
document.querySelector('#filter-stad').addEventListener('click', () => {
  const gefilterd = allArticles.filter(article => article.category === 'Stad');
  showArticles(gefilterd);
});

// Maak een eventlistener voor de #filter-technologie button
// Filter allArticles op category 'Technologie' en roep showArticles() aan
document.querySelector('#filter-technologie').addEventListener('click', () => {
  const gefilterd = allArticles.filter(article => article.category === 'Technologie');
  showArticles(gefilterd);
});

// Maak een eventlistener voor de #filter-media button
// Filter allArticles op category 'Media' en roep showArticles() aan
document.querySelector('#filter-media').addEventListener('click', () => {
  const gefilterd = allArticles.filter(article => article.category === 'Media');
  showArticles(gefilterd);
});