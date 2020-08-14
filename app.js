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
  
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value != ''){
        createHtml();
    }
  });
  container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-trash-alt')){
        removeItem(e);
    }else if(e.target.classList.contains('fa-pen')){
        editItem(e);
    }    
  });  
});
