function start() { }

let ItemArray = ["Burger", "Fries", "Pizza Slice", "Hotdog", "Soft Drink", "Milkshake"]

function getFormInput() {

    let Item = (document.getElementById("ShoppingItem").value);
    let OUTPUT = document.getElementById("OUTPUT");

    ItemArray.push(Item);

    OUTPUT.innerHTML = "";

    for (let i = 0; i < ItemArray.length; i++) {

   



    
    OUTPUT.innerHTML += "<p>" + ItemArray[i] + " you have added this item to the list" + "</p>";    