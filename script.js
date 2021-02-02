let task = document.getElementById('input');
let addButton = document.getElementById('add')
let listOfTasks = document.getElementById('list_of_tasks');
addButton.addEventListener('click', () => {
    if (!task.value) {alert("Empty task!")}
    else {
        let elemOfList = document.createElement('li');
        elemOfList.innerHTML = `<input type='checkbox' class='checkbox'> ${task.value}`;
        listOfTasks.append(elemOfList);
    };
})


