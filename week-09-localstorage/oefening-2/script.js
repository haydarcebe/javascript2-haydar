const user = { name: 'Anna', age: 28, city: 'Amsterdam' };
 
const resultElement = document.querySelector('#result');
 
// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
localStorage.setItem('userZonderJson', user);
const zonderJson = localStorage.getItem('userZonderJson');
console.log(zonderJson); // '[object Object]' — de data is verloren gegaan
 
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
localStorage.setItem('userMetJson', JSON.stringify(user));
const metJson = JSON.parse(localStorage.getItem('userMetJson'));
console.log(metJson.name); // 'Anna'
 
// Stap 3: toon het resultaat van beide methoden op de pagina
resultElement.innerHTML = `
  <p>Zonder JSON.stringify: ${zonderJson}</p>
  <p>Met JSON.stringify en JSON.parse: ${metJson.name}, ${metJson.age}, ${metJson.city}</p>
`;
 