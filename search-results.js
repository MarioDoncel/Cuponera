const params = new URL(location.href).searchParams;
const filter = params.get('search');

const cards = document.querySelector(".cards")
const classStores = document.querySelector(".stores")
const input = document.querySelector("input")

input.value = filter

let filteredStores = []

// Filtrando .data com parametros da busca
stores.forEach(store => {
    if(store.name.includes(filter.toUpperCase()) || store.category.includes(filter.toUpperCase())) {
        filteredStores.push(store)
    }
})

// Retorno em caso de busca vazia
if (filteredStores.length == 0) {
    let h3 = document.createElement('h3')
    h3.innerHTML = '<h3> Ninguna tienda o categoria encontrada!  </h3>'
    classStores.appendChild(h3)
}

// Populando resultados da busca
filteredStores.forEach(store => {
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