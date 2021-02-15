

// ========= MODAL INDEX ========
const modal = document.querySelector('.modal-overlay')
const howItWorks = document.querySelector(".principal button")
const closeModal = document.querySelector('.closeModal')

howItWorks.addEventListener('click', () => {
    modal.classList.add("active")
})

closeModal.addEventListener('click', () => {
    modal.classList.remove("active")
})

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
