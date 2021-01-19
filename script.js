let task = document.getElementById('input');
let addButton = document.getElementById('add')
let tasks = [];
let listOfTasks = document.getElementById('list_of_tasks');
addButton.addEventListener('click', () => {
    if (!task.value) {alert("Empty task!")}
    else {
        tasks.push({taskToDo: task.value, completed: false});
        let elemOfList = document.createElement('li');
        /* let checkBox = document.createElement('input').setAttribute('type', 'checkbox') */;
        elemOfList.innerHTML = `<input type='checkbox' class='checkbox'> ${task.value}`;
        listOfTasks.append(elemOfList);
    }
})

/* tasks.forEach((item, index, arr)=> {
    let elemOfList = document.createElement('li');
    let checkBox = document.createElement('input').setAttribute(type, checkbox);
    elemOfList.innerHTML = checkBox + arr[index].taskToDo;
    listOfTasks.append(elemOfList);
}) */
