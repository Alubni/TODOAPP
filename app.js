
  const newTaskInput = document.querySelector("#newTaskInput");
  const addButton = document.querySelector(".addButton");
  const deleteButton = document.querySelector(".deleteButton");
  const listOfTasks = document.querySelector(".listOfTasks");
  
  let itemsArray = JSON.parse(localStorage.getItem('items')) || [];
  
  addButton.addEventListener("click", addTask);
  
  function addTask(event) {
      if (newTaskInput.value !== "") {
          event.preventDefault();
          const taskText = newTaskInput.value;
          const newContent = document.createElement('li');
          const newIcon = document.createElement('i');
          newIcon.className = "fas fa-trash trash-can";
          newContent.textContent = taskText;
  
          newIcon.addEventListener("click", function() {
              newContent.remove();
              updateLocalStorage();
          });
  
          listOfTasks.appendChild(newContent);
          newContent.appendChild(newIcon);
  
          itemsArray.push(taskText);
          localStorage.setItem('items', JSON.stringify(itemsArray));
  
          newTaskInput.value = "";
      }
  }
  
  deleteButton.addEventListener("click", function() {
      listOfTasks.innerHTML = ""; 
      itemsArray = []; 
      localStorage.removeItem('items'); 
  });
  
  itemsArray.forEach(function(item) {
      addTaskToList(item);
  });
  
  function updateLocalStorage() {
      localStorage.setItem('items', JSON.stringify(itemsArray));
  }
  