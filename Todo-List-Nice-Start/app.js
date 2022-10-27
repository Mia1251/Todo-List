//Select DOM  // We Select Elements from the index.html file        // "Step 1"  
const todoInput = document.querySelector('.todo-input');          // "Grabb the todo-input"                                                                                                                  
const todoButton = document.querySelector('.todo-button');       // "Grabb the todo-button"
const todoList = document.querySelector('.todo-list');           // "Grabb the todo-list"
const filterOption = document.querySelector('.filter-todo');    // "Grabb the filter-todo"

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheckTodo);
filterOption.addEventListener('click', filterTodo);



//Functions // Step 3 create your li

function addTodo(event){
  // Prevent form from submitting or reloading Step 4
  event.preventDefault();
      
  //Create div
const todoDiv = document.createElement('div');                             // Create a todo div  
todoDiv.classList.add('todo');                                            // Add a class of todo to the (parentElement) div todoDiv 
// Create li  
const newTodo = document.createElement('li');
newTodo.classList.add('todo-item'); 
newTodo.innerText = todoInput.value;
                                           // Add a class of todo-item to the (childrenElement) li 
newTodo.classList.add('todo-item');                                                // We want to append li to parentElement todoDiv
todoDiv.appendChild(newTodo);
todoInput.value = " ";

// Create Completed Button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>'; 
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton); 

// Create trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

console.log(todoDiv);

// attach final Todo
todoList.appendChild(todoDiv);
}

function deleteCheckTodo(event){

  if (event.target.classList.contains('trash-btn')){
    const todo = event.target.parentElement;

    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }
    if (event.target.classList.contains('complete-btn')) {
      const todo = event.target.parentElement;
      todo.classList.toggle('completed');
      
    }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}


// use switch here as we have all, completed and uncompleted
function saveLocalTodos(todo){}

function removeLocalTodos(todo){}

function getTodos(){}