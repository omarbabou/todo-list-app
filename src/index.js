import './css/index.css';

const todoObjectArray = [
  {
    description: 'Run 30 min',
    completed: false,
    index: 0,
  },
  {
    description: 'Finish coding project',
    completed: false,
    index: 1,
  },
  {
    description: 'Study math',
    completed: false,
    index: 2,
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
                  <li><input type="checkbox" id="checkbox" onchange="ChnageCompleted(${todoObject.id})" name="checkbox"></li>        
                  <li class="todoName">${todoObject.title}</li>    
                  <li><img src="./images/dots.png" alt="icon"></li>   
                  </ul> `;
  });
}

window.onload = () => renderBook();