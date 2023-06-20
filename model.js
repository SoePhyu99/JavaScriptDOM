let modelContainer = document.getElementById('model-container');
let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
    modelContainer.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modelContainer.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if (e.target === modelContainer) {
        modelContainer.style.display = 'none';
    }
})