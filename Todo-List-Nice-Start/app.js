//Select DOM  // We Select Elements from the index.html file        // "Step 1"  
const todoInput = document.querySelector('.todo-input');          // "Grabb the todo-input"                                                                                                                  
const todoButton = document.querySelector('.todo-button');       // "Grabb the todo-button"
const todoList = document.querySelector('.todo-list');           // "Grabb the todo-list"
const filterOption = document.querySelector('.filter-todo');    // "Grabb the filter-todo"

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteTodo);



//Functions // Step 3 create your li

function addTodo(event){
  // Prevent form from submitting or reloading Step 4
  event.preventDefault();
      
  //Create div
const todoDiv = document.createElement('div');                             // Create a todo div  
todoDiv.classList.add('todo');                                            // Add a class of todo to the (parentElement) div todoDiv 
// Create li  
const li = document.createElement('li');
li.innerText = todoInput.value;                                          // We target the li's innerText and store the input value
li.classList.add('todo-item');                                           // Add a class of todo-item to the (childrenElement) li 
todoDiv.appendChild(li);                                                 // We want to append li to parentElement todoDiv

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
todoList.append(todoDiv);
}

function deleteTodo(event){
const select = event.target;
console.log(select);

if(select.classList[0] === 'trash-btn') // stoped.......


}
// e.target.parentElement.remove();
function filterTodo(e){}
// use switch here as we have all, completed and uncompleted
function saveLocalTodos(todo){}

function removeLocalTodos(todo){}

function getTodos(){}