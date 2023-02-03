let btnAdd = document.getElementById("button-add");
console.log(btnAdd);
let newTaskInput = document.getElementById("input");
console.log(newTaskInput);
let newTaskList = document.getElementById("newTask");

function addNewTask ()
{
    console.log(newTaskInput.value);
    let listItem = document.createElement("li");
     listItem.innerHTML = newTaskInput.value;
    newTaskList.appendChild(listItem);
    newTaskInput.value = "";
}
btnAdd.addEventListener("click",addNewTask);
