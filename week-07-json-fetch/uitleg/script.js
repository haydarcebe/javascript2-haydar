let carsList = document.getElementById('carsList')

// let cars = [
//   {
//     name: 'Fiat',
//     model: '500',
//     weight: '850kg',
//     color: 'White',
//   },
//   {
//     name: 'Volvo',
//     model: 'S60',
//     weight: '1200kg',
//     color: 'Grey',
//   },
//   {
//     name: 'BMW',
//     model: 'X7',
//     weight: '1350kg',
//     color: 'Black',
//   },
// ];

fetch('./cars.json')
.then(response => response.json())
.then(cars =>{
  console.log(cars)
for(let car of cars){
  carsList.innerHTML += `<p>${car.name}</p>`
}
})
