let Username = "Ollie";
let pocketmoney = 3;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function start() {
    displayWelcome(Username, pocketmoney);
}

function displayWelcome(_name, _money) {
    OUTPUT.innerHTML = "<p>Welcome to Ollie's Cafe, " + _name + "!</p>";
    OUTPUT.innerHTML += "<p>You have $" + _money + " in pocket money.</p>";
}

function getFormInput() {

    let customerName = document.getElementById("customerName").value;
    let order = document.getElementById("nameField").value;
    let enteredPocketmoney = Number(document.getElementById("pocketmoneyField").value);

    OUTPUT.innerHTML = "";

    OUTPUT.innerHTML += "<h2>Order Summary</h2>";
    OUTPUT.innerHTML += "<p><strong>Name:</strong> " + customerName + "</p>";
    OUTPUT.innerHTML += "<p><strong>Order:</strong> " + order + "</p>";
    OUTPUT.innerHTML += "<p><strong>Money:</strong> $" + enteredPocketmoney + "</p>";

    if (enteredPocketmoney >= 4) {
        OUTPUT.innerHTML += "<p>✅ You can afford the fries!</p>";
    } else {
        OUTPUT.innerHTML += "<p>❌ You can't afford the fries.</p>";
    }
}
