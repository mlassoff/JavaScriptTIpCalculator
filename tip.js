const range = document.getElementById("tipRange");
const tipOut = document.getElementById("percentOut");

range.ondrag = function(){
  tipOut.innerHTML = "" + range.value + "%";
}
