
var bigbox = document.getElementById('bigbox');

var colors = document.getElementsByClassName('row');

document.getElementById("box1").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "tomato";
});
document.getElementById("box2").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "orange";
});
document.getElementById("box3").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "yellow";
});
document.getElementById("box4").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "lime";
});
document.getElementById("box5").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "green";
});
document.getElementById("box6").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "cyan";
});
document.getElementById("box7").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "turquoise";
});
document.getElementById("box8").addEventListener("mouseover", function() {
  bigbox.style.backgroundColor = "blue";
});
document.getElementsByClassName("row").addEventListener("mouseout", function() {
  bigbox.style.backgroundColor = "black";
});
