function start() { }


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
    table.innerHTML = "";

    for (let i = 0; i < ItemArray.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${ItemArray[i].name}</td>
                <td>${ItemArray[i].price}</td>
                <td><input type="number" id="qty${i}" value="0" min="0"></td>

                </tr>
                
    }
}
    
                                                                                                              

    function calculateTotal() {
    let total = 0;

    for (let i = 0; i < ItemArray.length; i++) {
        let qty = Number(document.getElementById("qty" + i).value);
        total += qty * ItemArray[i].price;
    }

    let paid = Number(document.getElementById("AmountPaid").value);
    let change = paid - total;

    let output = document.getElementById("TotalOutput");

    output.innerHTML = `
        <p>Total Cost: $${total}</p>
        <p>Amount Paid: $${paid}</p>
        <p>Change: $${change}</p>
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

