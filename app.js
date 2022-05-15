
  
  
  //Selectors
  const todoInput =document.querySelector('.todo-input');
  const todoButton =document.querySelector('.todo-button');
  const todoList =document.querySelector('.todo-list');
  const filteropt =document.querySelector('.filter-todo');
  
  
  //Event Listeners
  todoButton.addEventListener('click',addTodo);
  todoList.addEventListener('click',deleteCheck);
  filteropt.addEventListener('click',filterTodo);
  
  
  //Functions
  function addTodo(event){
      //prevent form from submitting
      event.preventDefault();
      //Todo DIV
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
      //Create LI
      const newtodo = document.createElement('li');
      newtodo.innerText=todoInput.value;
      newtodo.classList.add('todo-item');
      task = document.getElementsByClassName("todo-input").value;
      time = document.getElementsByClassName("sd").value;
      firebaseRef.set(task);
      firebaseRef.set(time);
      
      
      // database().ref("/").update({
      //         Task : task ,
      //         Time : time
      // });
      todoDiv.appendChild(newtodo);
      
      //CHECK MARK BUTTON
      const completedButton = document.createElement('button');
      completedButton.innerHTML='<i class="fas fa-check"></i>';
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
      //CHECK trash BUTTON
      const trashButton = document.createElement('button');
      trashButton.innerHTML='<i class="fas fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      //APPEND TO LIST
      todoList.appendChild(todoDiv);
      //CLEAR TODO INPUT VALUE    
      todoInput.value="";
    //   var firebaseref =firebase.database().ref('tasks');
    //   firebaseref.push(task);
    //   var firebaseref1 =firebase.database().ref('time');
    //   firebaseref1.push(time);
//       const db = getDatabase();
//       set(ref(db, '/' ), {
//           Task : task,
//           Time : time
      
//   });
  }
  
  function deleteCheck(e){
      const item=e.target;
      //DELETE TODO
      if(item.classList[0] === 'trash-btn'){
          const todo=item.parentElement;
          //Animation
          todo.classList.add("fall");
          todo.addEventListener('transitioned',function(){
              todo.remove();
  
          });
      }
  
      //CHECK MARK
      if(item.classList[0] === "complete-btn"){
          const todo=item.parentElement;
          todo.classList.toggle("completed");
      }
  }
  
  function filterTodo(e){
      const todos=todoList.childNodes;
      todos.forEach(function(todo){
          switch(e.target.value){
              case "all":
                  if(!todo.classList.contains("completed") && !todo.classList.contains("ucompleted"))
                  todo.style.display = "value";
                  else
                  todo.style.display = "value";
                  break;
              case "completed":
                  if(todo.classList.contains('completed')){
                      todo.style.display ="value";
                  }
                  else{
                      todo.style.display = "none";
                  }
                  break;
              case "uncompleted":
                  if(!todo.classList.contains('completed')){
                      todo.style.display = "value";
                  }
                  else{
                      todo.style.display = "none";
                  }
                  break;
          }
      });
  
  }
  
  