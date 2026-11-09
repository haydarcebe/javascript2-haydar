const inputElement = document.querySelector('#input');
const saveButton = document.querySelector('#save');
const retrieveButton = document.querySelector('#retrieve');
const resultElement = document.querySelector('#result');
 
// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
saveButton.addEventListener('click', () => {
  const tekst = inputElement.value;
 
  if (tekst === '') {
    resultElement.textContent = 'Voer eerst iets in';
    return;
  }
 
  localStorage.setItem('tekst', tekst);
  resultElement.textContent = `'${tekst}' opgeslagen`;
  inputElement.value = '';
});
 
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
retrieveButton.addEventListener('click', () => {
  const opgeslagenTekst = localStorage.getItem('tekst');
 
  // Null-check: toon een melding als er nog niets opgeslagen is
  if (opgeslagenTekst === null) {
    resultElement.textContent = 'Er is nog niets opgeslagen';
    return;
  }
 
  resultElement.textContent = `Opgeslagen tekst: ${opgeslagenTekst}`;
});
 