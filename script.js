let menuToggle = document.querySelector('.menuToggle')
let navigatin = document.querySelector('.navigation')
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navigatin.classList.toggle('active')
}

