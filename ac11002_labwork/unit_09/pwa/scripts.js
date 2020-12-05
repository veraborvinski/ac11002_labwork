window.onload = updateToDoList();

document.getElementById('newToDoItem').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    saveItem();
  }
});

function saveItem(){
  storedList = JSON.parse(localStorage.getItem("toDoItems"));
  storedList.push(document.getElementById('newToDoItem').value);
  localStorage.setItem('toDoItems', JSON.stringify(storedList));
  // console.log(localStorage.getItem('toDoItems'));
  updateToDoList();
  document.getElementById('newToDoItem').value = "";
}

function printNothingToDo() {
  nothingtodo = "<div class='mb-2 col-md-12'><p class='alert alert-dismissible alert-success'>Yay! theres nothing to do:)</p></div>";
  document.getElementById('toDoContainer').innerHTML = nothingtodo;

}

function printSomethingToDo() {
  somethingtodo = "<div class='mb-2 col-md-12'><p class='alert alert-dismissible alert-danger'>There's gotta be something to do://</p></div>";

  document.getElementById('completedContainer').innerHTML = somethingtodo;
}

function updateToDoList() {
  if (localStorage.getItem("toDoItems") === null) { //  if array doesnt exist make one
    blankArray = [];
    localStorage.setItem("toDoItems", JSON.stringify(blankArray));
    printNothingToDo();
  } else if (localStorage.getItem("toDoItems") === "[]") { //  if array does exist but is empty
    printNothingToDo();
  } else {
    storedList = JSON.parse(localStorage.getItem("toDoItems")); //get localstorage and turn into array
    toDoContainer = document.createElement('div'); //go through array and write a new alert box for each
    storedList.forEach(function(item, index) {
      div = document.createElement('div');
      div.setAttribute('class', 'mb-2 col-md-12');
      div.innerHTML = "<div class='alert alert-dismissible alert-danger' id=item-" + index +
      " onClick='complete(" + index + ")'><p class='mb-0'>" + item + "</p></div>";
      toDoContainer.appendChild(div);
    });
    document.getElementById('toDoContainer').innerHTML = toDoContainer.innerHTML;
  }
}

function complete(index) {
  storedList = JSON.parse(localStorage.getItem("toDoItems"));
  console.log(storedList);
  console.log(storedList[index]);
  completedItem = storedList[index];
  storedList = storedList.filter(function(item) {
    return item !== storedList[index];
  })
  localStorage.setItem('toDoItems', JSON.stringify(storedList));
  updateToDoList();
  completedList = JSON.parse(localStorage.getItem("completedItems"));
  completedList.push(completedItem);
  localStorage.setItem('completedItems', JSON.stringify(completedList));
  // console.log(localStorage.getItem('toDoItems'));
  updateCompletedToDoList();
}

function updateCompletedToDoList() {
  if (localStorage.getItem("completedItems") === null) { //  if array doesnt exist make one
    blankArray = [];
    localStorage.setItem("completedItems", JSON.stringify(blankArray));
    printSomethingToDo();
  } else if (localStorage.getItem("completedItems") === "[]") { //  if array does exist but is empty
    printSomethingToDo();
  } else {
    completedList = JSON.parse(localStorage.getItem("completedItems")); //get localstorage and turn into array
    completedContainer = document.createElement('div'); //go through array and write a new alert box for each
    completedList.forEach(function(item, index) {
      div = document.createElement('div');
      div.setAttribute('class', 'mb-2 col-md-12');
      div.innerHTML = "<div class='alert alert-dismissible alert-success' id=item-" + index +
      " onClick='delete(" + index + ")'><p class='mb-0'>" + item + "</p></div>";
      completedContainer.appendChild(div);
    });
    document.getElementById('completedContainer').innerHTML = completedContainer.innerHTML;
  }
}

/*function delete(index) {
  completedList = JSON.parse(localStorage.getItem("completedItems"));
  console.log(completedList);
  console.log(completedList[index]);
  deletedItem = completedList[index];
  completedList = completedList.filter(function(item) {
    return item !== completedList[index];
  })
  localStorage.setItem('completedItems', JSON.stringify(completedList));
  updateCompletedToDoList();
}*/

function deleteCompleted() {
  localStorage.removeItem('completedItems');
  updateCompletedToDoList();
}
