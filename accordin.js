let accordin = document.getElementsByClassName('content-container');

for (let e of accordin) {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
    })
}