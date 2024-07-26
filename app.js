document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 150) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
