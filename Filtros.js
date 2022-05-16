//creo arrays de las prendas para hacer la card//

class ropa {

    constructor(nombre, imagenUno, imagenDos, precio, color, id) {


        this.nombre = nombre;
        this.imagenUno = imagenUno;
        this.imagenDos = imagenDos;
        this.precio = precio;
        this.color = color;
        this.id = id;


    }



    /*
    getCupon(){

    if ( === "coderhouse" ) {
        
       return this.precio = this.precio * 0.7

    }

    }

    */

}

//agrego cada una de las prendas//

let depositoRopa = [];


depositoRopa.push(
    new ropa("Remera Planet", "../images/jean4.jpg", "../images/jean3.jpg", 1990, "gris", 1),
    new ropa("Remera Vicent", "../images/jean4.jpg", "../images/jean3.jpg", 2190, "Negra", 2),
    new ropa("Buzo Hard", "../images/jean4.jpg", "../images/jean3.jpg", 5390, "Gris", 3),
    new ropa("Jean Vanens", "../images/jean4.jpg", "../images/jean3.jpg", 5090, "Azul", 4),
    new ropa("Camisa Casper", "../images/jean4.jpg", "../images/jean3.jpg", 4090, "Azul", 5),
    new ropa("Zapatilla Laid", "../images/jean4.jpg", "../images/jean3.jpg", 5290, "Blanco", 6),


);




//CREAR TARJETAS//



function crearTarjetas() {

    let tarjetaPadre = document.querySelector('.tarjetaPadre')

    depositoRopa.forEach(ropa => {


        tarjetaPadre.innerHTML += ` 
       

        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card tarjetaHijo ${filtrarPorColor(ropa.color)}">
                <img src="${ropa.imagenUno}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${ropa.nombre}</h5>
                    <div class="contenedor  justify-content-mx-auto ">
                        <select name="" class="talles">
      <option value="S"> S </option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
                        </select>
                        <p class="card-text">${ropa.precio}</p>
                        <a href="#" class="btn btn-dark agregarCarrito" data-id="${ropa.id}">Añadir al carrito</a>
                        <p class="nuevoItem"></p>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
        </div>
      
          
        `

    });



}


crearTarjetas();







//FILTROS//


/*
filtrarPor(); {

    const categoriaRemeras = depositoRopa.filter(ropa => ropa.nombre = "buzo");

    console.log(categoriaRemeras);

}


*/



function filtrarPorColor(color) {

    if (ropa.color === gris) {

        return `gris`


    } else if (color === negro) {
        return `negro`
    } else {
        return `sin color`
    }


}