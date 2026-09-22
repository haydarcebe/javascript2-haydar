let getName = document.getElementById('showName')


// function showName(name){
//     return "Mijn naam is " + name 
// }
const showName = (name) => {
    return `Mijn naam is  ${name} `
}


getName.textContent = showName("Haydar")

let fruits = ["appel ", " Banaan ", " perzik"]


for(let fruit of fruits){
 getName.innerHTML += fruit + "<br>";
}