const range = document.getElementById("tipRange");
const tipOut = document.getElementById("percentOut");
const btnCalculate = document.getElementById("btnCalculate");
const billAmount = document.getElementById("billAmount");
const resultArea = document.getElementById("result");

range.ondrag = function(){
  tipOut.innerHTML =  range.value + "%";
}

btnCalculate.onclick = function(){
  let theBill = parseFloat(billAmount.value);
  let tip = (theBill * (range.value/100)).toFixed(2);
  let total = theBill + tip;
  let out = `<strong>Tip Amount:</strong> $${tip}<br/><strong>Total:</strong> $${total}`;
  resultArea.innerHTML = out;
}
