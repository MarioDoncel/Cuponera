

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
                <h5>¿Como usar? </h5>
                <p>Los Establecimientos aceptan los cupones en una de las 5 (cinco) categorías de “COMPRA MÍNIMA” a ser Junior, Senior, Master, Extra y Black Friday equivalentes a ahorrar 5%, 10%, 20%, 40% y 50% respectivamente.</p>
                <p>Hay dos formas de mejorar esta categoría al usarlos y cada Establecimiento Habilitado es obligado a aceptar, por lo menos, una de ellas.</p>
                <p>Estas formas son el USO PROGRESIVO y el USE 5 (CINCO) VECES.</p>
                <p>Usted precisa verificar cual puede usar visitando cada Establecimiento siendo que algunos de
                ellos lo sorprenderán aceptando las dos formas combinadas para que Usted ahorre más
                dinero.</p>
                <br> 
                <h5>USO PROGRESIVO </h5>
                <p>Basta usar los cupones de forma progresiva (de menor a mayor 20/50/100/200/500/1.000)
                comienza con el de más bajo valor y solicita a quien lo atienda una mejora de la categoría de
                compra mínima por usarlos de esta manera.</p>
                <br>
                <h5>USE CINCO VECES </h5>
                <p>Use 5 (cinco) veces los cupones en el mismo lugar y solicita a quien lo atienda una mejora de la
                categoría de compra mínima por haberlo hecho. Quien lo atienda verificará sus cinco compras
                y las mismas determinarán el valor del cupón que Usted recibirá en una mejor categoría.</p>

                <p>Así sucesivamente a cada compra le habilitarán un cupón de mayor valor pasando por el de $100,- $200,- $500,- y $1.000,- economizando al usarlos todos un total de $1.870,- con la única condición de completar sus pagos en efectivo..</p>

                <h3>LLEVE SIEMPRE EN SU CARTERA NUESTROS CUPONES PARA ECONOMIZAR SU DINERO</h4>
            </div>
            <div class="imageModal">
                <img src="./assets/LOSseisCASA1870.webp" alt="Como usar">
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
                <img src="./assets/COMOSON.webp" alt="Como es">
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





