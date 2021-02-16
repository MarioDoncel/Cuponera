

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


