$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass("dis");
    } else {
        $('header').removeClass("dis");
    }
});

const name = document.querySelector('.name')
const number = document.querySelector('.number')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if (name.value && number.value) {
        alert('Заявка успешно оставлена')
        name.value = '';
        number.value = ''
    }
    else {
        alert('Заполните все поля')
    }
})
