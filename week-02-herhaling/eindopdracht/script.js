    // Stap 1: Schrijf calculateTotal(bedrag, korting)
    // Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
    // Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
    // Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij
  let amount = document.getElementById("amount");
let discount = document.getElementById("discount");
let result = document.getElementById("result");
let submit = document.getElementById("calculate");

submit.addEventListener("click", function(e) {
    e.preventDefault();
 if
  (discount.value === "" || amount.value === ""){

    result.textContent = "vul beide velden in."
  }
  else{
    result.textContent = calculator(amount.value, discount.value);
  }
  
});
 

function calculator(a, b) {
   return a * b / 100;

}