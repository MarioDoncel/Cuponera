
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
                            </div>
                            <div class="cuponClass ${store.cuponClass}" >
                                <p>Categoria Senior ${store.discount}</p>
                            </div>
                        </div>`
    cards.appendChild(div)
});



// <div class="card">
                        // <h3> Fiambreria </h3>
                        // <div class="card-content">
                        //     <div class="storePicture">
                        //         <img src="./assets/stores/laTranquera.jpg" alt="La Tranquera">
                        //     </div>
                        //     <div class="information">
                        //         <h3>LA TRANQUERA</h3>
                        //         <p>Av. Pedro Goyena, C1424 CABA, Argentina</p>
                        //     </div>
                        //     <div class="cuponClass master" >
                        //         <p>Categoria Master 20%</p>
                        //     </div>
                        // </div>
//                     </div>