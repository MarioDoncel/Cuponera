

// ========= MODAL INDEX ========
const modal = document.querySelector('.modal-overlay')
const howItWorks = document.querySelector("#howWorks")
const howUse = document.querySelector("#howUse")
const howItIs = document.querySelector("#howItIs")
let modalHtml;

howItWorks.addEventListener('click', () => {
    // modalHtml = `
    // <div class="modal">
    //     <div class="howItWorks">
    //         <div class="textModal">
    //             <h4>USTED PAGA LA CUENTA EN EFECTIVO Y PODRÁ COMPLETAR SU PAGO CON UNO DE NUESTROS CUPONES EN CUALQUIERA DE LOS ESTABLECIMIENTOS HABILITADOS</h4>
    //             <p>Siempre le ofrecemos un descuento, puede ser desde hasta 5%, 10% o 20%. Depende de la categoría <small>[Junior, Senior, Master]</small> de COMPRA MÍNIMA escogida por cada establecimiento habilitado. <br><br> Verifique la categoría que escogió cada establecimiento y <a href="./stores.html">descubra los establecimientos comerciales</a>  de su comuna que más valor le dan a su dinero aceptando nuestros cupones!</p>
    //             <h4>LOS PUEDE BUSCAR USTED MISMO O RECIBIRLOS EN SU CASA EN LAS COMUNAS 6 Y 7</h4> 
    //             <p>Si desea economizar dinero y vive en la Comuna 6 recíbalos en su casa, solicita la colección completa ($20 $50 $100 $200 $500 $1.000) por mensaje a nuestra página y la recibe gratis en su casa, el costo de la entrega se la paga usted al entregador después de recibir todos los cupones. </p>

    //             <h3>LLEVE SIEMPRE EN SU CARTERA NUESTROS CUPONES PARA ECONOMIZAR SU DINERO</h4>
    //         </div>
    //         <div class="imageModal">
    //             <img src="./assets/ComoFunciona.jpg" alt="">
    //         </div>
    //     </div>
    //     <div class="closeModal" onclick="closeModal()">
    //         <span> CERRAR</span>
    //     </div>
    // </div>
    // `
    // modal.innerHTML = modalHtml
    // modal.classList.add("active")
    window.location.replace('/stores.html')

})
howUse.addEventListener('click', () => {
    modalHtml = `
    <div class="modal">
    <div class="howItWorks">
        <div class="textModal">
            <h2>🛒 ¿Cómo usar?</h2>
            <p>Los comercios aceptan cupones en dos categorías de compra mínima:</p>
            <p>🔹 Categoría Junior → Ahorrás un 5%</p>
            <p>🔸 Categoría Senior → Ahorrás un 10%</p>
            <br>

            <h5>DUPLICA Y CUADRUPLICA TU DESCUENTO CON EL USO PROGRESIVO</h5>
            <p>📈 DUPLICÁ tu descuento desde la primera compra, empezá usando los cupones de menor a mayor valor y quien te atienda mejora tu categoría de COMPRA MÍNIMA por usarlos progresivamente.</p>

            <h5>EN LA QUINTA COMPRA 🎯 CUADRUPLICÁ tu descuento</h5>
            <p>✅ Usá tus cupones 5 veces en el mismo lugar y al llegar a la quinta compra, mejoran tu categoría de compra mínima por segunda vez</p>

            <br>
            <h5>EN LAS TIENDAS QUE ACEPTAN EL USO ESPECIAL TUS CUPONES SE USAN IGUAL A DINERO</h5>
            <br>
            <h5>Llevá siempre cupones en tu cartera y economiza todos los días</h5>
        </div>

        <div class="imageModal">
            <img src="./assets/como_usar_hero.jpeg" alt="Como usar">
        </div>
    </div>
    <div class="closeModal" onclick="closeModal()">
        <span>CERRAR</span>
    </div>
</div>
    `
    modal.innerHTML = modalHtml
    modal.classList.add("active")
})
howItIs.addEventListener('click', () => {
    modalHtml = `
    <div class="modal">
        <div class="howItIs">
            <div class="imageModal">
                <img src="./assets/como_son.jpeg" alt="Como es">
            </div>
        </div>
        <div class="closeModal" onclick="closeModal()">
            <span> CERRAR</span>
        </div>
    </div>
    `
    modal.innerHTML = modalHtml
    modal.classList.add("active")
})
function closeModal() {
    modal.classList.remove("active")
}






