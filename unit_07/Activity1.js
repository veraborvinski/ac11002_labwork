
var bigbox = document.getElementById('bigbox');

var colors = document.getElementsByClassName('row');

var i;
for (i=0; i<colors.length;i++){
 colors[i].addEventListener('mouseover', myFunction(){
        bigbox.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    colors[i].addEventListener('mouseleave', myFunction() {
        bigbox.style.backgroundColor = "black";
    });
}
