const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];


// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().
// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.

const origineelEl = document.querySelector('#origineel');
const kopieEl = document.querySelector('#kopie');

// 1. Originele lijst: alleen namen en steden (destructuring in .map())
origineelEl.insertAdjacentHTML(
  'beforeend',
  people.map(({ name, city }) => `<p>${name} - ${city}</p>`).join('')
);

// 2. Nieuwe array met spread: stad wordt 'Den Haag', origineel blijft ongewijzigd
const kopie = people.map(person => ({ ...person, city: 'Den Haag' }));

// 3. Nieuwe lijst tonen (ook met destructuring)
kopieEl.insertAdjacentHTML(
  'beforeend',
  kopie.map(({ name, city }) => `<p>${name} - ${city}</p>`).join('')
);