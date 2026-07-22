function start() { }

let ItemArray = ["MILK", "Chocolate", "sausages", "CARROTS"]

function getFormInput() {

    let Item = (document.getElementById("ShoppingItem").value);
    let OUTPUT = document.getElementById("OUTPUT");

    ItemArray.push(Item);

    OUTPUT.innerHTML = "";

    for (let i = 0; i < ItemArray.length; i++) {

   



    
    OUTPUT.innerHTML += "<p>" + ItemArray[i] + " you have added this item to the list" + "</p>";    