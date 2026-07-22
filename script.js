let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput(){

    let customerName = document.getElementById("customerName").value;
    let order = document.getElementById("nameField").value;
    let money = Number(document.getElementById("pocketmoneyField").value);

    OUTPUT.innerHTML = `
        <h2>Order Summary</h2>

        <p><strong>Name:</strong> ${customerName}</p>

        <p><strong>Order:</strong> ${order}</p>

        <p><strong>Money:</strong> $${money}</p>
    `;

    if(money >= 4){
        OUTPUT.innerHTML += "<p>You can afford the fries.</p>";
    }else{
        OUTPUT.innerHTML += "<p>You can't afford the fries.</p>";
    }
}