let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById ("btn");

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let calc = document.getElementById("calc");
let result = document.getElementById("result");



button.addEventListener("click" , function() {
    console.log("hallo");
   button.style.backgroundColor = "green";
   output.textContent = input.value;
    output.style.color = "green";
    input.value = "";
})

calc.addEventListener("click", function() {
result.textContent = calculator(num1.value, num2.value);
num1.value = ""; 
num2.value = "";

})

function calculator(a,b){
    return a * b;
}