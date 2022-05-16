const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#listaCarrito tbody');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const listaPrendas = document.querySelector('#listaPrendas');
const sumarTotal2 = document.querySelector('#totalCarrito')



let articulosCarrito = [];

//funcion para agregar al carrito una prenda cuando apretan el boton de agregar al carrito//
cargarEvent();

function cargarEvent() {

    listaPrendas.addEventListener('click', agregarPrenda);



    //para eliminar prendas del carrito

    carrito.addEventListener('click', eliminarPrenda);

    //vaciar el carrito

    vaciarCarrito.addEventListener('click', (e) => {
        e.preventDefault();
        articulosCarrito = [];

        limpiarHTML();
        limpiarHTML2();

    })






    document.addEventListener('DOMContentLoaded', () => {

        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })




}





function agregarPrenda(e) {

    e.preventDefault();


    if (e.target.classList.contains('agregarCarrito')) {
        const prendaSeleccionada = e.target.parentElement.parentElement.parentElement;

        leerDatosPrenda(prendaSeleccionada);

    }
}





//eliminar prendas del carrito 
function eliminarPrenda(e) {



    if (e.target.classList.contains('borrarPrenda')) {


        const prendaId = e.target.getAttribute('data-id');



        articulosCarrito = articulosCarrito.filter(prenda => prenda.id !== prendaId);

        carritoHTML();


    }





}




function leerDatosPrenda(prenda) {


    //creo un objeto con los datos de la prenda//

    const infoPrenda = {
        imagen: prenda.querySelector('img').src,
        titulo: prenda.querySelector('h5').textContent,
        talle: prenda.querySelector('select').value,
        precio: prenda.querySelector('p').textContent,
        id: prenda.querySelector('a').getAttribute('data-id'),
        cantidad: 1,



    }


    //revisar si un articulo ya existe en el carrito

    const existe = articulosCarrito.some(prenda => prenda.id === infoPrenda.id);



    if (existe) {


        const prenda = articulosCarrito.map(prenda => {

            if (prenda.id === infoPrenda.id) {

                prenda.cantidad++;
                return prenda;
            } else {

                return prenda;
            }



        });


        articulosCarrito = [...prenda];

    } else {

        //agregar elementos al array carrito//

        articulosCarrito = [...articulosCarrito, infoPrenda];
    }


    carritoHTML();



}





//mostrar el carrito de compras al HTML

function carritoHTML() {

    //limpiar HTML para evitar duplicados en el objeto

    limpiarHTML();

    //recorrer el carrito para generar el HTML



    articulosCarrito.forEach(prenda => {

        const rowCarrito = document.createElement('tr');
        rowCarrito.innerHTML =

            `
           <td>  
           <img src="${prenda.imagen}" width="100">
           </td>
          

            <td>${prenda.titulo} </td>
            <td> ${prenda.talle}   </td>
            <td> ${prenda.precio} </td>
            
            <td> ${prenda.cantidad} </td>
           
            
            <td> $ ${prenda.precio * prenda.cantidad}</td>

            <a href='#' class="borrarPrenda" data-id="${prenda.id}"> x </a>
            </td> 
           
            

            `;


        //agrego el HTML del carrito al tbody

        contenedorCarrito.appendChild(rowCarrito);




    })


    function calcularTotal() {


        let total = 0;
        for (let i = 0; i < 100; i++) {

            let element = Number((articulosCarrito[i].precio) * (articulosCarrito[i].cantidad));
            total = total + element;


            document.getElementById('totalCarrito').innerHTML = "$ " + total;


        }









        //agregamos un localStorage al carrito de compras
        sincronizarStorage();

        function sincronizarStorage() {

            localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

        }



    }


    calcularTotal();





}


function limpiarHTML() {

    while (contenedorCarrito.firstChild) {

        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

};


function limpiarHTML2() {

    while (sumarTotal2.firstChild) {

        sumarTotal2.removeChild(sumarTotal2.firstChild);
    }

};