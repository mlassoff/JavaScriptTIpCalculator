const range = document.getElementById("tipRange");
const tipOut = document.getElementById("percentOut");
const btnCalculate = document.getElementById("btnCalculate");
const billAmount = document.getElementById("billAmount");
const resultArea = document.getElementById("result");

range.ondrag = function(){
    tipOut.innerHTML =  range.value + "%";

    //Show tip dynamically
    let theBill = parseFloat(billAmount.value);
    if (theBill > 0) {
        document.getElementById("errorMessage").innerHTML = ""
        let tip = (theBill * (range.value/100)).toFixed(2);
        let total = (theBill + parseFloat(tip)).toFixed(2);
        let out = `<strong>Tip Amount:</strong> $${tip}<br/><strong>Total Bill:</strong> $${total}`;
        resultArea.innerHTML = out;
    } else {
        document.getElementById("errorMessage").innerHTML = "Please enter a valid bill amount."
    }
}