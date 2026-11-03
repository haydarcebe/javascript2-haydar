
const mealss = document.querySelector('#characters')

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
for(let meals of data.meals){
  mealss.innerHTML += `<article>
  <h2>${meals.strMeal}</h2>
  <img src='${meals.image}' alt='${meals.name}'>
  </article>`
}
    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
    
  })
  .catch(error => console.error('Fout:', error));
