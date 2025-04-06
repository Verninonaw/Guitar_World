function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'})
    }
}

function openOverlay() {
    document.getElementById('overlay').style.display = 'block'
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none'
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы скоро свяжемся с вами.');
    this.reset();
    closeOverlay();
});