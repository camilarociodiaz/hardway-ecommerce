//APLICANDO ANIMACIONES 

$(".textoConfirmacion").hide()
$(".alertConfirmacion").hide()


$(".agregarCarrito").on("click", function(e) {

    e.preventDefault();


    if (e.target.classList.contains('agregarCarrito')) {




        $(".alertConfirmacion")
            .show()
            .css("color", "white").css("background-color", "rgb(32, 32, 32)")
            .fadeOut(1800)

    }


})




let banner = $("#banner")
banner.animate({ height: "105%", width: "105%" }, (2000));






//API//

//localizar geograficamente donde se encuentra el cliente//



$(document).ready(function() {

    let geoLoc = navigator.geolocation.getCurrentPosition(mostrarGeo);


    function mostrarGeo(position) {

        console.log(position);

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        console.log("latitud: " + lat);
        console.log("Long: " + long);

        geoFinal(lat, long);

    }

})



//Agregar el clima segun la ubicacion exacta del cliente//

function geoFinal(lat, long) {

    $.ajax({

        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8ae405df7ea5fbdf016b4ca92b7720bc`,
        type: `GET`,
        data: {
            appid: `8ae405df7ea5fbdf016b4ca92b7720bc`,
            dataType: `jsonp`,
            units: `metric`,
            lang: `es`,

        },
        success: function(data) {


            console.log(data);
            let icono = data.weather[0].icon;
            let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";

            $("#icono").attr("src", iconoURL);
            let clima = `<div id="cajaClima2">
                             <p id="climaCiudad"><b>${data.name}</b></p> 
                                            
                             <img src= "${iconoURL}"></img>                            
                             <p>TEMP: ${data.main.temp} °C   </p>
                             <p>.    ${data.weather[0].description}</p>     
                            

                        </div>`;


            $("#caja").append(clima);



        },


    })
}


/*

$(".agregarCarrito").click(function() {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto ha sido añadido al carrito',
        showConfirmButton: false,
        timer: 1500
    })


})


*/