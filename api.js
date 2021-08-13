
const ham = document.querySelector('.ham');
const menuDesplegable = document.querySelector('.menu__nav');
const barras = document.querySelectorAll('.ham span');
const heroDark = document.querySelector('.hero');



ham.addEventListener('click', () => {
    menuDesplegable.classList.toggle('active');
    heroDark.classList.toggle('active');

    barras.forEach(child => {
        child.classList.toggle('animado')
    });
})