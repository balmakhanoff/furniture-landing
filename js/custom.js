document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header-burger-btn').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open')
    })
})