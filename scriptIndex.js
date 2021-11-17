

// ========= MODAL INDEX ========
const modal = document.querySelector('.modal-overlay')
const howItWorks = document.querySelector("#howWorks")
const howUse = document.querySelector("#howUse")
let modalHtml;

howItWorks.addEventListener('click', () => {
    modalHtml = `
    <div class="modal">
        <div class="howItWorks">
            <div class="textModal">
                <h4>USTED PAGA LA CUENTA EN EFECTIVO Y PODRÁ COMPLETAR SU PAGO CON UNO DE NUESTROS CUPONES EN CUALQUIERA DE LOS ESTABLECIMIENTOS HABILITADOS</h4>
                <p>Siempre le ofrecemos un descuento, puede ser desde hasta 5%, 10% o 20%. Depende de la categoría <small>[Junior, Senior, Master]</small> de COMPRA MÍNIMA escogida por cada establecimiento habilitado. <br><br> Verificque la categoría que escogió cada establecimiento y <a href="./stores.html">descubra los establecimientos comerciales</a>  de su comuna que más valor le dan a su dinero aceptando nuestros cupones!</p>
                <h4>LOS PUEDE BUSCAR USTED MISMO O RECIBIRLOS EN SU CASA EN LAS COMUNAS 6 Y 7</h4> 
                <p>Si desea economizar dinero y vive en la Comuna 6 recíbalos en su casa, solicitas la colección completa ($20 $50 $100 $200 $500 $1.000) por mensaje a nuestra página y la recibes gratis en su casa, el costo de la entrega se la paga usted al entregador después de recibir todos los cupones. </p>

                <h3>LLEVE SIEMPRE EN SU CARTERA NUESTROS CUPONES PARA ECONOMIZAR SU DINERO</h4>
            </div>
            <div class="imageModal">
                <img src="./assets/ComoFunciona.jpg" alt="">
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
howUse.addEventListener('click', () => {
    modalHtml = `
    <div class="modal">
        <div class="howItWorks">
            <div class="textModal">
                <h4>Si Usted ya tiene los 6 (seis) cupones de $ 20 /50 /100 /200 /500 /1.000 le enseñamos como usarlos todos en la mejor categoría de “COMPRA MÍNIMA” posible para economizar hasta 20% sólo por pagar las cuentas en efectivo.</h4>
                <br>
                <h5>¿Cómo hacerlo? </h5>
                <p>Tome el cupón de menor valor $20,- le tacha las compras mínimas (esta es la manera como cada local habilitado lo/la invita a conocer su establecimiento) para usarlo como si fuera dinero y realiza una compra completando su pago con dinero en efectivo. </p>
                <br> 
                <p>Ahora que ya se hizo cliente usando el cupón de $20,- le muestra a quien lo atendió el cupón de $50,- para que se lo habilite en la mejor categoría de COMPRA MÍNIMA posible para su próxima compra (solicite que lo haga en la master siempre y ahorre hasta 20%). Así sucesivamente va aumentando el valor de los cupones y consiguiendo un descuento cada vez mayor para una compra de mayor volumen pasando por el de $100,- $200,- $500,- y $1.000,- economizando un total de $1.870,- con la única condición de completar sus pagos en efectivo. </p>

                <h3>LLEVE SIEMPRE EN SU CARTERA NUESTROS CUPONES PARA ECONOMIZAR SU DINERO</h4>
            </div>
            <div class="imageModal">
                <img src="./assets/comoUsar.jpg" alt="Como usar">
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





