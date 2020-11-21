let bill = document.getElementById("bill");
let total = document.getElementById("total");
document.getElementById("button1").addEventListener("click", function() {
  total.innerHTML = "£" + bill.value * 1.05;
});
document.getElementById("button2").addEventListener("click", function() {
  total.innerHTML = "£" + bill.value * 1.1;
});
document.getElementById("button3").addEventListener("click", function() {
  total.innerHTML = "£" + bill.value * 1.25;
});
document.getElementById("button4").addEventListener("click", function() {
  if(bill.value<13.4){
    let totalValue = bill.value * 1.1
    totalValue += 2
  total.innerHTML = "£" + totalValue};
  if(bill.value>=13.4){total.innerHTML ="£" + bill.value * 1.25};
});
