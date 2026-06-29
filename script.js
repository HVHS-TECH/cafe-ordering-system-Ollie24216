let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {

    // Get values from the form
    let customerName = document.getElementById("customerName").value;
    let order = document.getElementById("nameField").value;
    let money = Number(document.getElementById("pocketmoneyField").value);


    OUTPUT.innerHTML = "";


    OUTPUT.innerHTML += "<h2>Order Summary</h2>";
    OUTPUT.innerHTML += "<p><b>Name:</b> " + customerName + "</p>";
    OUTPUT.innerHTML += "<p><b>Order:</b> " + order + "</p>";
    OUTPUT.innerHTML += "<p><b>Money:</b> $" + money + "</p>";

 
    if (money >= 4) {
        OUTPUT.innerHTML += "<p>You can afford the fries!</p>";
    } else {
        OUTPUT.innerHTML += "<p>You can't afford the fries.</p>";
    }
  }