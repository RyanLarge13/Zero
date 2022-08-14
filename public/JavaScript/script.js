const lines = document.querySelectorAll('span');
const navToggle = document.querySelector('.toggle');
const navigation = document.querySelector('nav');

const toggleNav = () => {
    lines.forEach(line => line.classList.toggle('nav'));
    navigation.classList.toggle('scale');
};

navToggle.addEventListener('click', toggleNav);