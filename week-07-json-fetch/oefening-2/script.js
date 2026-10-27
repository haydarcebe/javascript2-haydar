// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]
const filmlijst = document.getElementById('films')
// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
fetch('./movies.json')
.then(response => response.json())
.then(movies => {
    for(let movie of movies)
filmlijst.innerHTML += `<li>${movie.title}</li>`
})