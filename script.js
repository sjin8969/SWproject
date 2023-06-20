function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});