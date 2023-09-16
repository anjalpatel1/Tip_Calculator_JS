const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#tip-amount");

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  amount.value = '';
  guests.value = '';
  quality.value = '';
  if (tip === 'NaN') {
    tipAmount.innerHTML = "Tip 0$ each";
    showTipAmount();
  }
    else {
      tipAmount.innerHTML = 'Tip $' + tip + 'each';
      showTipAmount();
    }
   }

  showTipAmount = () => {
    var x = tipAmount;
    x.className = show;
    setTimeout(function() {
      x.className = x.className.replace('show', '');}, 3000);
  }

// // Get input values
// let amount = parseFloat(document.getElementById("amount").value);
// let tipAmount = parseFloat(document.getElementById("tipAmount").value);

// // Calculate tip and total
// let tipAmount = amount * (tipAmount / 100);
// let totalAmount = amount + tipAmount;

// // Display results
// document.getElementById("tipAmount").innerHTML = tipAmount.toFixed(2);
// document.getElementById("totalAmount").innerHTML = totalAmount.toFixed(2);
