
// ====== POPULATING STORES -  VAR STORES COMING FROM DATA.JS

const cards = document.querySelector(".cards")

stores.forEach(store => {
    switch (store.cuponClass) {
        case "junior":
            store.discount="5%"
            break;
        case "senior":
            store.discount="10%"
            break;
        case "master":
            store.discount="20%"
            break;
    
    }
    let telephone = store.telephone.replace('-',"")

    let div = document.createElement('div')
    div.className = "card"
    div.innerHTML = `   <h3> ${store.category} </h3>
                        <div class="card-content">
                            <div class="storePicture">
                                <img src="${store.picture}" alt="${store.name}">
                            </div>
                            <div class="information">
                                <h3>${store.name}</h3>
                                <p>${store.adress}, CABA, Buenos Aires</p>
                                <a href="https://api.whatsapp.com/send?phone=5491133146851">
                                    <p>(11) ${store.telephone} - click para contacto</p>
                                </a>
                            </div>
                            <div class="cuponClass ${store.cuponClass}" >
                                <p>Categoria Senior ${store.discount}</p>
                            </div>
                        </div>
                        <input type="hidden" value="${store.id}">`
    cards.appendChild(div)
});

//  ====== MODAL
const modal = document.querySelector('.modal-overlay')
const closeModal = document.querySelector('.closeModal')
const storeCards = document.querySelectorAll('.card')
const modalStore = document.querySelector('.store')
let modalMap = document.querySelector('.storeMap')

storeCards.forEach(card => {
    card.addEventListener('click', () => {
       
        // pegar o id da loja do click
        let id = card.lastElementChild.value
        // inserir html no modal
        modalStore.innerHTML = card.children[1].innerHTML
        modalMap.innerHTML = stores[id-1].map
        modal.classList.add("active")
        
    })
});


closeModal.addEventListener('click', () => {
    modal.classList.remove("active")
})