let addBtn = document.getElementById('add-btn');
let input = document.getElementById('name');

addBtn.addEventListener('click', () => {
    let list = document.createElement('div');
    list.setAttribute('class', 'list');

    let check = document.createElement('button');
    check.setAttribute('id', 'check');
    check.innerHTML = `<i class="fa fa-solid fa-check"></i>`;

    let trash = document.createElement('button');
    trash.setAttribute('id', 'trash');
    trash.innerHTML = `<i class="fa fa-solid fa-trash"></i>`;

    if (input.value === '') {
        alert('Enter list.')
    } else {
        list.append(input.value, check, trash)
        input.value = '';
        document.getElementById('lists').appendChild(list);
    }

    check.addEventListener('click', (e) => {
        let target = e.target;
        target.parentElement.parentElement.style = 'text-decoration: line-through';
    })

    trash.addEventListener('click', (e) => {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })

})