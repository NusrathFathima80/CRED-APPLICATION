
function addTask(){
    const tasksContainer = document.getElementById('tasks');
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();
    if(taskText){
        const taskDiv = document.createElement('div');
        taskDiv.className ='task';
        taskDiv.textContent = taskText;
     // Make task clickable
     taskDiv.onclick = function(){
        taskDiv.style.textDecoration=taskDiv.style.textDecoration ==='line-through';
     }
     const editBtn= document.createElement('button');
     editBtn.textContent = 'Edit';
     editBtn.className = 'edit-btn';
     editBtn.onclick = function() {
        const newTaskText = prompt("Edit task:",taskDiv.textContent);
        if(newTaskText){
            taskDiv.textContent = newTaskText;
        }
        
     } ;
     const deleteBtn= document.createElement('button');
     deleteBtn.textContent = 'Delete';
     deleteBtn.className = 'delete-btn';
     deleteBtn.onclick = function(){
        tasksContainer.removeChild(taskDiv);
     } ;
     taskDiv.appendChild(editBtn);
     taskDiv.appendChild(deleteBtn);
     tasksContainer.appendChild(taskDiv);
     newTaskInput.value="";
    }else{
        alert('Please enter a task1');
    }
}