
let firstNumber = localStorage.getItem("firstNumbers") || 0;

firstNumber = parseInt(firstNumber);

firstNumber++;

localStorage.setItem("firstNumbers", firstNumber);

let nextNumber = document.getElementById("main");

nextNumber.textContent = firstNumber;
