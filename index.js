// edit button to be add
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
    </td> 
  `;
  taskContainer.appendChild(taskContent);

  // clearing input field
  inputTask.value = "";

  // handling delete
  const btnDelete = document.getElementsByClassName('btn-delete');
  for (const del of btnDelete) {
    del.addEventListener('click', function(e) {
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
      // console.log(e.target.parentNode.parentNode.parentNode);
    })
  }
})