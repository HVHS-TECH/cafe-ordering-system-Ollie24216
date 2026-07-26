function start() { }

// This is an array with all the items on the menu list and prices you can add or delete multipul items.
let ItemArray = [
{ name: "Burger", price: 8 },
{ name: "Fries", price: 4 },
{ name: "Pizza Slice", price: 6 },
{ name: "Hotdog", price: 5 },
{ name: "Soft Drink", price: 3 },
{ name: "Milkshake", price: 7 },
];

updateTable();

function updateTable() {

let table = document.getElementById("ItemTableBody");

    // Stops errors on pages without the checkout table
if (!table) {
return;
}

table.innerHTML = "";
// this bit of code makes sure the table is the right length
for (let i = 0; i < ItemArray.length; i++) {
// this displays the table amount and the min + max input quantity 
table.innerHTML += `
<tr>
<td>${ItemArray[i].name}</td>
<td>$${ItemArray[i].price}</td>
<td>
<input type="number" id="qty${i}" value="0" min="0" max="50">

</td>
</tr>
`;
}
}
                                                                                                              
function calculateTotal() {

let total = 0;

let receipt = "";

for (let i = 0; i < ItemArray.length; i++) {

let qtyBox = document.getElementById("qty" + i);

if (!qtyBox) {
continue;
}

let qty = Number(qtyBox.value);

if (qty > 0) {

let cost = qty * ItemArray[i].price;

 total += cost;

receipt += `
<p>${ItemArray[i].name} x ${qty} = $${cost}</p>
`;
}
}

let paid = Number(document.getElementById("AmountPaid").value);

let customer = document.getElementById("CustomerName").value;

let output = document.getElementById("TotalOutput");

let receiptOutput = document.getElementById("ReceiptOutput");

if (paid < total) {

output.innerHTML = `
<h3>Insufficient Funds</h3>
<p>Total Cost: $${total}</p>
<p>Amount Paid: $${paid}</p>
`;

receiptOutput.innerHTML = `
<h2>Ollies Cafe Receipt</h2>
<p><strong>Customer:</strong> ${customer}</p>
${receipt}
<hr>
<p>Total: $${total}</p>
<p>Paid: $${paid}</p>
<p style="color:red;"><strong>Insufficient Funds</strong></p>
`;

return;
}

let change = paid - total;

output.innerHTML = `
<p>Total Cost: $${total}</p>
<p>Amount Paid: $${paid}</p>
<p>Change: $${change}</p>
`;

receiptOutput.innerHTML = `
<h2>Ollies Cafe Receipt</h2>

<p><strong>Customer:</strong> ${customer}</p>

<hr>

${receipt}

<hr>

<p><strong>Total:</strong> $${total}</p>

<p><strong>Paid:</strong> $${paid}</p>

<p><strong>Change:</strong> $${change}</p>

<p>Thank you for your order!</p>
`;
}

function getFormInput() {

let Item = (document.getElementById("ShoppingItem").value);
let OUTPUT = document.getElementById("OUTPUT");
ItemArray.push({ name: Item, price: 0});

OUTPUT.innerHTML = "";

for (let i = 0; i < ItemArray.length; i++) {
OUTPUT.innerHTML += "<p>" + ItemArray[i].name + "$" + ItemArray[i].price + " you have added this item to the list" + "</p>";
   

}
updateTable();  
}
