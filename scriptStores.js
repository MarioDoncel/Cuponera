
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
                                <p>${store.adress}</p>
                                <a href="https://api.whatsapp.com/send?phone=54911${store.telephone.replace('-',"")}">
                                    <div class="messageStore">
                                    <i class="fab fa-whatsapp"></i>
                                    <p>(11) ${store.telephone}</p>
                                    </div>
                                </a>
                                <div class="cuponClass ${store.cuponClass}" >
                                    <p>Categoria ${store.cuponClass.toUpperCase()} ${store.discount}</p>
                                </div>
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
       
        // pegar o id e o index da loja do click
        let id = card.lastElementChild.value
        let index 
            for (let i = 0; i < stores.length; i++) {
                if (stores[i].id == id ) {
                index = i
                } 
            }
        // inserir html no modal
        modalStore.innerHTML = card.children[1].innerHTML
        modalMap.innerHTML = stores[index].map
        modal.classList.add("active")
        
        
    })
});


closeModal.addEventListener('click', () => {
    modal.classList.remove("active")
})