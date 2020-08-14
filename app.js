window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todoInput");
  const btn = document.getElementById("todoButton");
  const container = document.getElementById("todoContainer");

  const getInputValue = () => {
      const inputVal = input.value;
      return inputVal;
  };
  const clearInput = () =>{
      input.value = '';
  };
  const createHtml = ()=>{
     let html = `<div class="todo-container">
                     <div class="todo-single">
                         <p>${getInputValue()}</p>
                         <div class="icons">
                             <i class="fas fa-pen"></i>
                             <i class="far fa-trash-alt"></i>
                         </div>
                     </div>
                 </div>`;
    container.innerHTML += html;
    clearInput();
  };
  const removeItem = (e)=>{
        const parent =e.target.parentElement.parentElement.parentElement;
        parent.remove();
  };
  const editItem = (e)=>{
    const item = e.target.parentElement.parentElement.firstChild.nextSibling.innerText;
    input.value = item;
    removeItem(e);
  };
  
  const setLocalStorage = (todo) =>{
    let todos;
    if(localStorage.getItem('todos') === null){
      todos = [];
    }else{
      todos= JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    };
  const getLocalStorage = () =>{
    let todos;
    if(localStorage.getItem('todos') === null){
      todos = [];
    }else{
      todos= JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(todo =>{
      let html = `
    <div class="todo-container">
      <div class="todo-single">
        <p>${todo}</p>
        <div class="icons">
            <i class="fas fa-pen"></i>
            <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>`;
    container.innerHTML += html;
    });    
  }  
  const deleteLocalStorage = (e)=>{
    let todos;
    if(localStorage.getItem('todos') === null){
      todos = [];
    }else{
      todos= JSON.parse(localStorage.getItem('todos'));
    }
    let ind= e.target.parentElement.parentElement.firstChild.nextSibling.innerHTML;
    todos.splice(todos.indexOf(ind), 1);
    localStorage.setItem('todos',JSON.stringify(todos));
  };
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value != ''){
      setLocalStorage(getInputValue());  
      createHtml();  
    }
  });
  container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-trash-alt')){
        removeItem(e);
        deleteLocalStorage(e);
    }else if(e.target.classList.contains('fa-pen')){
        editItem(e);
        deleteLocalStorage(e);
    }    
  });  
getLocalStorage();
});
