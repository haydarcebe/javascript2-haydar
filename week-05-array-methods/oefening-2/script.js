const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];
const search = document.querySelector('#search-find')
const searching = document.querySelector('#output-find')
const staat = document.querySelector('#output-includes')
const include = document.querySelector('#search-includes')
// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
search.addEventListener('input', (e) => {
const zoek = e.target.value
const namen = names.find(n => n.toLowerCase()
.startsWith(zoek.toLowerCase()))

searching.textContent = `${namen}`


})  

include.addEventListener('input', (e) => {
const item = e.target.value;

const lowerNames = names.map(naam => naam.toLowerCase())

const gevonden = lowerNames.includes(item)
staat.textContent = `${gevonden}`
})