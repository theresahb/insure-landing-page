const openBtn = document.querySelector("img[alt='open']")
const closeBtn = document.querySelector("img[alt='close']")
const mobileMenu = document.querySelector('.mobile-menu')


openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    mobileMenu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none'
    openBtn.style.display = 'block'
    mobileMenu.classList.remove('active')
})