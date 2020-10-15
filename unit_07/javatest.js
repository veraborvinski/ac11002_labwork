function angleType(angle) {
  if(angle < 90){
    return "acute angle"
  }
  if (angle === 90){
    return "Right angle"
  }
  if ( angle < 180){
    return "Obtuse angle"
  }
  if (angle === 180){
    return "Straight angle"
  }
  else {
    return "Reflex angle"
  }
}

function multiplyBy(){
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;
  let answer = num1 * num2;
  document.getElementById("result").innerHTML = answer;
}

function divideBy(){
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;
  let answer = num1 / num2;
  document.getElementById("result").innerHTML = answer;
}

function alphabet_soup(str){
  return split(); sort(); join()
}

function js_style(){
  text.style.fontSize = "14pt";
  text.style.fontFamily = "Serif";
  text.style.color = "red";
}

function addItem(){

}
