let todoList = [
    [1, 'Do your ToDo list today at 6AM GMT']
];

const sidebar = document.getElementById('sidebar');
const collapseButton = document.getElementById('collapse-menu');
const addTodoButton = document.querySelector('.to-do-header-icon');
const todoListItems = document.querySelector('.to-do-list-items');

const onChangeInput = (event) => {
    const index = todoList.findIndex(el => el[0] === +event.target.dataset.key);

    if (index === -1) return;

    todoList[index][1] = event.target.value;
}

const onDelete = (id) => {
    todoList = todoList.filter(el => el[0] !== +id);
    renderTodoList();
}

const renderTodoList = () => {
    todoListItems.innerHTML = todoList.map(todoItem => `
    <div class="to-do-item text-secondary p-2 d-flex rounded-3" data-key="${todoItem[0]}">
        <i class="ellipsis-icon"></i>
        <i class="ellipsis-icon"></i>
        <input
            class="to-do-input text-secondary"
            onchange="onChangeInput(event);"
            value="${todoItem[1]}"
            data-key="${todoItem[0]}"
        >
        <i class="check-icon cursor-pointer" onclick="onDelete(${todoItem[0]});"></i>
        <i class="x-icon cursor-pointer" onclick="onDelete(${todoItem[0]});"></i>
    </div>
`).join('');
}

renderTodoList();

collapseButton.onclick = () => {
    if (sidebar.classList.contains('closed')) {
        sidebar.classList.remove('closed');
    } else {
        sidebar.classList.add('closed');
    }
};

addTodoButton.onclick = () => {
    const newId = todoList?.at(-1)?.[0] ?? 0;
    todoList.push([newId + 1, '']);
    renderTodoList();
}
