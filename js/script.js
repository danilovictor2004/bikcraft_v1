const btnMobile = document.querySelector('#btn-mobile');
btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
});

const menuList = document.querySelector('.menu');
menuList.addEventListener('click', () => {
    nav.classList.toggle('active');
});

---dd
