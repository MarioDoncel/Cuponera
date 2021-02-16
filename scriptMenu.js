// ======== MENU RESPONSIVO=========
const menu = document.querySelector('.menu')
const linksResponsive = document.querySelector('.linksResponsive')
const closeMenu = document.querySelector('#closeMenu')

menu.addEventListener('click', () => {
    linksResponsive.classList.add("active")
})

closeMenu.addEventListener('click', () => {
    linksResponsive.classList.remove("active")
})