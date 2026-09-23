// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart
const prof = document.querySelector('#profiles-list')
const form = document.querySelector('#profile-form')
//start of the function with submit and event prevent default to stop from refreshing
form.addEventListener('submit',(event) => {
event.preventDefault();
//giving them variables
const name = document.querySelector('#name').value
const role = document.querySelector('#role').value
const dep = document.querySelector('#department').value
//made them into one kinda 
const profiles = {naam: name, functie: role, afdeling: dep}
//made cardhtml to change whats in profs
const cardHTML = `
<div class='profile-card'>
<h3>${profiles.naam}</h3>
<h3>${profiles.functie}</h3>
<h3>${profiles.afdeling}</h3>
</div>
`
//changes innerhtml of prof to whats in the cardhtml
prof.innerHTML += cardHTML
});

