const containerBtn = document.querySelector('.container_menu');
const btn = document.querySelector('.btn_menu');

btn.addEventListener('click', () => {
    containerBtn.classList.toggle('active');
})