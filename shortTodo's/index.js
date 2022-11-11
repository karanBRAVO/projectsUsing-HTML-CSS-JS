console.log("Short Todo's");

const showTodosCont = document.getElementById("showTodos");
const todoInp = document.getElementById("todoInp");
const firstTodo = document.getElementById("firstTodo");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

todoInp.onfocus = function removePlaceholder() {
    todoInp.placeholder = '';
}
todoInp.onblur = function setPlaceholder() {
    todoInp.placeholder = 'what to add in todo list...';
}

// localStorage.setItem('id', 0);

var id = Number(localStorage.getItem('id'));

todoInp.addEventListener('keyup', storeTodo);

function storeTodo(event) {
    let keyName = event.key;
    let vals = todoInp.value;

    if (keyName === 'Enter') {
        if (vals.length > 0) {
            if (id < 5) {
                id++;
                localStorage.setItem('id', id);
                localStorage.setItem(`${id}`, vals);
                todoInp.value = '';
            }
            else if (id >= 5) {
                todoInp.value = '';
            }

        }
    }
}

function showTodo() {
    if (id === 0) {
        // when no todo is added
        firstTodo.innerText = "! Nothing to show add 5 todos";
        one.innerText = `todo_1:`;
        two.innerText = `todo_2:`;
        three.innerText = `todo_3:`;
        four.innerText = `todo_4:`;
        five.innerText = `todo_5:`;
    }
    else if (id > 0) {
        firstTodo.innerText = "Your Todo's";
        // showing todo added bu user
        if (localStorage.getItem(`${1}`) != null) {
            one.innerText = `${localStorage.getItem(`${1}`)}`;
        }
        else {
            one.innerText = 'todo_1:';
        }
        if (localStorage.getItem(`${2}`) != null) {
            two.innerText = `${localStorage.getItem(`${2}`)}`;
        }
        else {
            two.innerText = 'todo_2:';
        }
        if (localStorage.getItem(`${3}`) != null) {
            three.innerText = `${localStorage.getItem(`${3}`)}`;
        }
        else {
            three.innerText = 'todo_3:';
        }
        if (localStorage.getItem(`${4}`) != null) {
            four.innerText = `${localStorage.getItem(`${4}`)}`;
        }
        else {
            four.innerText = 'todo_4:';
        }
        if (localStorage.getItem(`${5}`) != null) {
            five.innerText = `${localStorage.getItem(`${5}`)}`;
        }
        else {
            five.innerText = 'todo_5:';
        }
    }
}

setInterval(showTodo, 1);

document.addEventListener('keydown', (event)=> {
    let keyName = event.key;
    let ctrlKey_isPressed = event.ctrlKey;

    if (ctrlKey_isPressed === true) {
        if (keyName === '1') {
            id--;
            localStorage.setItem('id', id);
            localStorage.removeItem(`${1}`);
        }
        else if (keyName === '2') {
            id--;
            localStorage.setItem('id', id);
            localStorage.removeItem(`${2}`);
        }
        else if (keyName === '3') {
            id--;
            localStorage.setItem('id', id);
            localStorage.removeItem(`${3}`);
        }
        else if (keyName === '4') {
            id--;
            localStorage.setItem('id', id);
            localStorage.removeItem(`${4}`);
        }
        else if (keyName === '5') {
            id--;
            localStorage.setItem('id', id);
            localStorage.removeItem(`${5}`);
        }
    }
});