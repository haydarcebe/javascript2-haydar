const titel = document.getElementById('title')
const bttn = document.getElementById('btn')
const section = document.getElementById('section')

const naam = "Haydar"
const opleiding = "software developing"

let aantalklikken = 0;
 
const berekenpunten = (aantalklikken) => aantalklikken * 10;
console.log(berekenpunten(3))

bttn.addEventListener('click',() => {
 titel.textContent = (`Hoi, ik ben ${naam} en ik doe ${opleiding}`)

 //maak met javascript een nieuwe paragraaf

 const nieuwP = document.createElement('p')
  nieuwP.textContent = `klik ${aantalklikken += 1} je hebt nu ${aantalklikken * 10}`
  section.appendChild(nieuwP)
 //geef de paragraaf de tekst :ik heb 10 keer geklikt
 //plaats de paragraaf in de section
});