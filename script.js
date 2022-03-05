//selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
let todos = [];


//Event Handeler
function handleSubmitForm(e){

    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '');
       addTodo(input.value);
       input.value =''; 
}


//Helpers
function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    
    li.innerHTML =`
       <span class ="todo-item">${todo}</span>
       <button name="checkButton"><i class="fa fa-check" aria-hidden="true"></i></button>
       <button name="deletButton"><i class="fa fa-trash" aria-hidden="true"></i></button>
       `;
    li.classList.add('todo-List-item');
    ul.appendChild(li); 
    
}
