const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('mouseover', () => {
    const width = window.innerWidth - noBtn.offsetWidth;
    const height = window.innerHeight - noBtn.offsetHeight;

    noBtn.style.top = Math.floor(Math.random() * height) + 'px';
    noBtn.style.left = Math.floor(Math.random() * width) + 'px';
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});