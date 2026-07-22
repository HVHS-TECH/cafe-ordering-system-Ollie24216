let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput(){

    let customerName = document.getElementById("customerName").value;
    let order = document.getElementById("nameField").value;
    let money = Number(document.getElementById("pocketmoneyField").value);

    OUTPUT.innerHTML = `
        <div class="summaryCard">

        <h2>🍔 Order Summary</h2>

        <p><strong>Name:</strong> ${customerName}</p>

        <p><strong>Order:</strong> ${order}</p>

        <p><strong>Money:</strong> $${money}</p>
    `;

    if(money >= 4){
        OUTPUT.innerHTML += `
            <p class="success">
            ✅ You can afford the fries!
            </p>
        `;
    }else{
        OUTPUT.innerHTML += `
            <p class="fail">
            ❌ You can't afford the fries.
            </p>
        `;
    }

    OUTPUT.innerHTML += "</div>";
}