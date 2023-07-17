const addBtn = document.querySelector('.todo-btn');
const addInput = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');

list.addEventListener('click', deleteCheck);
addBtn.addEventListener('click', add);

function add(event) {
    event.preventDefault();

    let task = addInput.value;
    const todo = document.createElement('div');
    todo.classList.add('todo');


    const newItm = document.createElement('li');
    newItm.innerText = task;

    const btns = document.createElement('div');
    btns.classList.add('btns');

    const check = document.createElement('button');
    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    check.classList.add('check');

    const delet = document.createElement('button');
    delet.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delet.classList.add('del');

    btns.appendChild(check);
    btns.appendChild(delet);

    todo.appendChild(newItm);
    todo.appendChild(btns);
    list.appendChild(todo);
    addInput.value = "";
}

function deleteCheck(e) {
    let icon = e.target;
    let todo = (icon.parentElement).parentElement;

    if (icon.classList[0] === 'del') {

        todo.classList.add('removed');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }


    if (icon.classList[0] === 'check') {
        todo.classList.toggle('checked');

    }

}
//filter
const select = document.querySelector('select');
// alert(select.options[select.selectedIndex].value);

const catagory = function (event) {
    console.log(select.options[select.selectedIndex].value);
const allTtasks = document.querySelectorAll('.todo');         
    allTtasks.forEach((mtask) => {
        switch(select.options[select.selectedIndex].value){
            case 'all':
                mtask.style.display='flex';
                break;

            case'completed':
            if (mtask.classList.contains('checked')) {
                mtask.style.display='flex';
            }else{
                mtask.style.display='none';
            }
             break;

            case 'uncompleted':
                if (mtask.classList.contains('checked')) {
                    mtask.style.display='none';
                }else{
                    mtask.style.display='flex';
                }
                break;
        }
           
        
    })
}
select.addEventListener('click', catagory);

