const btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', function() {
  const inputTask = document.getElementById('task-input');
  const inputValue = inputTask.value;
  if (inputValue === "") alert('Please enter your desired task')
})