

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
                <h2>¿Como usar? </h2>
                <p>Los Establecimientos aceptan los cupones en 2 (dos) categorías de “COMPRA MÍNIMA” a ser
                Junior y Senior equivalentes a ahorrar 5% y 10% respectivamente.</p>
                </br>
                <h5>DUPLICA Y CUADRUPLICA TU DESCUENTO CON EL:
                USO PROGRESIVO</h5>
                <p>Basta usar los cupones de forma progresiva (de menor a mayor) comienza con el de más bajo
                valor y solicita a quien atienda una mejora de la categoría de compra mínima por usarlos de
                esta manera.</p>
                <h5>YA DUPLICASTE TU DESCUENTO</h5>
                <h5>AHORA USA CINCO VECES</h5>
                <p>Usa 5 (cinco) veces los cupones en el mismo lugar y solicita a quien atienda una mejora de la
                categoría de compra mínima por haberlo hecho.</p>
                <p>Verificará las 5 (cinco) compras y mejorará la categoría de tus cupones por segunda vez en la
                quinta compra.</p>
                <br> 
                <h5>YA CUADRUPLICASTE TU DESCUENTO EN LA QUINTA COMPRA</h5></br>
                <h5>LLEVA SIEMPRE EN LA CARTERA CUPONES PARA ECONOMIZAR DINERO TODOS LOS DIAS</h5>
                
            </div>
            <div class="imageModal">
                <img src="./assets/como_user_hero.jpeg" alt="Como usar">
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





