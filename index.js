const btnAdd = document.getElementById('btn-add');
let count = 0;

btnAdd.addEventListener('click', function() {
  const inputTask = document.getElementById('task-input');
  const inputValue = inputTask.value;
  const taskContainer = document.getElementById('task-container');
  const taskContent = document.createElement('tr');

  // if there is no input
  if (inputValue === "") alert('Please enter your desired task');

  // updating task Number
  count++;

  // creating task ui
  taskContent.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
      <button class="btn btn-danger btn-delete">Delete</button>
      <button class="btn btn-success btn-done">Done</button>
    </td> 
  `;
  taskContainer.appendChild(taskContent);

  // clearing input field
  inputTask.value = "";

  const btnDelete = document.getElementsByClassName('btn-delete');
  const btnDone = document.getElementsByClassName('btn-done');
})