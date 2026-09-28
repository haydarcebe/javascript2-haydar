const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];
const filtr = document.querySelector('#result-filtered')
const map = document.querySelector('#result-map')
const sort = document.querySelector('#result-sorted')
// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted

const scr = scores.filter(score => score   >= 50 )
filtr.textContent = `${scr}`

const double = scores.map(n => n * 2);
map.textContent = `${double}`

const sorting = scores.sort((a, b) => a - b)
sort.textContent = `${sorting}`