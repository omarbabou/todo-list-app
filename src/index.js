/* eslint-disable indent */
import './css/index.css';

const todoObjectArray = [
  {
    id: 1,
    title: 'Zoom meeting at 11 am',
    completed: false,
  },
  {
    id: 2,
    title: 'Go to church...',
    completed: false,
  },
  {
    id: 3,
    title: 'walking during the night',
    completed: false,
  },
  {
    id: 4,
    title: 'write some codes',
    completed: false,
  },
];

const taskList = document.getElementById('task-list');

function renderBook() {
  taskList.innerHTML = '';
  todoObjectArray.forEach((todoObject, index) => {
    taskList.innerHTML += `<ul class="todoTask" id="${index + 1}">
                  <li><input type="checkbox" id="checkbox" onchange="ChangeCompleted(${
                    todoObject.id
                  })" name="checkbox"></li>        
                  <li class="todoName">${todoObject.title}</li>    
                  <li><i class="fa fa-ellipsis-v"></i></li>   
                  </ul> `;
  });
}

window.onload = () => renderBook();
