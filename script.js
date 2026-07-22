function start() { }

let ItemArray = [
    { name: "Burger", price: 8 },
    { name: "Fries", price: 4 },
    { name: "Pizza Slice", price: 6 },
    { name: "Hotdog", price: 5 },
    { name: "Soft Drink", price: 3 },
    { name: "Milkshake", price: 7 },
];

function getFormInput() {

    let Item = (document.getElementById("ShoppingItem").value);
    let OUTPUT = document.getElementById("OUTPUT");

    ItemArray.push({ name: Item, price: 0});

    OUTPUT.innerHTML = "";

    for (let i = 0; i < ItemArray.length; i++) {
    OUTPUT.innerHTML += "<p>" + ItemArray[i] + " you have added this item to the list" + "</p>";
   
  }


    
    

}