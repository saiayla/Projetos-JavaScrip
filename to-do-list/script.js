add = document.getElementById("add");
input = document.getElementById("input");
list = document.getElementById("list");

add.addEventListener('click', function() {
  addTask();
});

function addTask() {
  if (input.value !== '') {
    
    let task = document.createElement('li');
    task.textContent = input.value;
    list.appendChild(task);

    insertEvents(task);
    
    input.value = "";
    
  } else {
    alert("You must write something!");
  }
}

function insertEvents(task) {
  
  let gabage = document.createElement('button');
  let edit = document.createElement('button');

  gabage.classList.add('gabage');
  edit.classList.add('edit');

  gabage.textContent = "X";
  edit.textContent = "Edit";

  task.appendChild(gabage);
  task.appendChild(edit);

  gabage.addEventListener('click', function() {
    task.remove();
  })

  edit.addEventListener('click', function() {
    task.textContent = prompt("Edit your task: ");
    insertEvents(task);
  })
}
