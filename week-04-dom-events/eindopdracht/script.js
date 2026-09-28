// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken
const form = document.querySelector('#task-form')
const inv = document.querySelector('#task-input')
const taken = document.querySelector('#tasks')
const tel = document.querySelector('#counter')


function toontaken (){ //function toontaken (count taken)
  const alleTaken = taken.querySelectorAll('li')//selects all li
  tel.textContent = `${alleTaken.length} taken` // counts all the taken
}


function taakToevoegen() {
  const taak = document.createElement('li') // making a list element

  const checkboxs = document.createElement('input') // create checkbox
  checkboxs.type = 'checkbox' // checkbox type to see the stuff

  const span = document.createElement('span') // holds the task's own text
  span.textContent = `${inv.value}` // read inv.value BEFORE clearing it

  inv.value = '' // maak het invoerveld weer leeg na het toevoegen van een taak

  const verwijderknop = document.createElement('button') // make verwijderknop
  verwijderknop.textContent = 'verwijder' // shows text "verwijder" in the button

  verwijderknop.addEventListener('click', () => { // making the button work
    taak.remove() // removes it
    toontaken() // lessens count after removal
  })

  // volgorde belangrijk: checkbox eerst, dan span (voor de CSS :checked + span regel)
  taak.appendChild(checkboxs)
  taak.appendChild(span)
  taak.appendChild(verwijderknop)

  taken.appendChild(taak)
  toontaken() // count up
}

form.addEventListener('submit',(event) => {
event.preventDefault();
taakToevoegen();

})