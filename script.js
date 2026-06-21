let Username = "Ollie";
let year = 2025;
let age = 15;
let pocketmoney = 3;
let money = 2;

let birthYear = year - age;
let oldAge = age + 10;
let halfMoney = money / 2;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput");


function start() {
  displayWelcome(Username, pocketmoney);
}

function displayWelcome(_name, _money) {
  OUTPUT.innerHTML += "<p>Welcome to the page " + _name + "</p>";
  OUTPUT.innerHTML += "<p>You have $" + _money + " in pocket money</p>";
}

function getFormInput() {
  let name = document.getElementById("nameField").value;
  let enteredPocketmoney = Number(document.getElementById("pocketmoneyField").value);

  OUTPUT.innerHTML += "<p>Hello customer " + name + "</p>"; // Fixed to actually use the name variable
  OUTPUT.innerHTML += "<p>You have $" + enteredPocketmoney + " money </p>";

  if (enteredPocketmoney >= 4) {
    OUTPUT.innerHTML += "<p>You can afford to buy the fries!</p>";
  } else {
    OUTPUT.innerHTML += "<p>You can't afford the fries.</p>";
  }
}


window.onload = start;
