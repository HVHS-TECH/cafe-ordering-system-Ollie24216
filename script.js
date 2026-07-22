let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput(){

let customer = document.getElementById("customerName").value;

let food = document.getElementById("foodChoice").value;

let parts = food.split("|");

let item = parts[0];

let price = Number(parts[1]);

let money = Number(document.getElementById("pocketmoneyField").value);

let change = money - price;

OUTPUT.innerHTML = `
<div class="receipt">

<h2>🧾 Order Receipt</h2>

<p><strong>Name:</strong> ${customer}</p>

<p><strong>Food:</strong> ${item}</p>

<p><strong>Price:</strong> $${price}</p>

<p><strong>Your Money:</strong> $${money}</p>
`;

if(money >= price){

OUTPUT.innerHTML += `
<p class="success">✅ Order Approved!</p>

<p class="change">Your change is <strong>$${change}</strong></p>
`;

}else{

OUTPUT.innerHTML += `
<p class="fail">❌ You need $${price-money} more.</p>
`;

 }

OUTPUT.innerHTML += "</div>";

}