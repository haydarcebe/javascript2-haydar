// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
const btn = document.querySelector('#add')
const inp = document.querySelector('#input')
const list = document.querySelector('#list')



btn.addEventListener('click',() => {

    const item  = document.createElement('li')
item.textContent = `${inp.value}`

const verwijderknop = document.createElement('button')
verwijderknop.textContent = 'verwijder'

verwijderknop.addEventListener('click',() => {
item.remove();
})

item.appendChild(verwijderknop)
document.querySelector('#list').appendChild(item)

})




