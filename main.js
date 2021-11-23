/*Clases y finciones--------------------------------------------------------------------------------------------------------------------------------------------- */
class Paracaidista {
    constructor (nombre, apellido, licenciaN, vencimientoPsicofisico, cantidadSaltos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.licenciaN = licenciaN;
        this.vencimientoPsicofisico = vencimientoPsicofisico;
        this.cantidadSaltos = parseInt(cantidadSaltos);
    }
}

/*Constructores---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
let paracaidista1 = new Paracaidista ("Lucas", "Orsini", "AR12345", "2023-09-30", 202);
let paracaidista2 = new Paracaidista ("Jose", "Perez", "AR78541", "2020-06-01T00:00:00", 50);
let paracaidista3 = new Paracaidista ("Jose", "Rodriguez", "AR74589", "2025-10-01T00:00:00", 178);
let paracaidista4 = new Paracaidista ("Juan", "Peres", "AR74521", "2020-05-05T00:00:00", 25); 

/*Arrays------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
let arrayParacaidistas = []; 
arrayParacaidistas.push(paracaidista1);
arrayParacaidistas.push(paracaidista2);
arrayParacaidistas.push(paracaidista3);
arrayParacaidistas.push(paracaidista4); 
 
/*Funcion que muestra la operacion de compra de tickets */
function enviar(e) {
    e.preventDefault();
    let nombre = document.getElementById("name");
    let apellido = document.getElementById("surname");
    let telefono = document.getElementById("tel");
    let email = document.getElementById("email");
    let licencia = document.getElementById("licencia");
    let cantidadSaltos = document.getElementById("tickets");
    let cantidadCuotas = document.getElementById("cuotas");

    let precio = 3000;
    let total = parseFloat(cantidadSaltos.value * precio);
    let financiado = parseFloat(total / cantidadCuotas.value);

    let formulario = document.getElementById("confirmacionForm");
    let confirmacion = document.createElement("div");

    confirmacion.innerHTML = `<p>Nombre: ${nombre.value}</p>
                               <p>Apellido: ${apellido.value}</p>
                               <p>Telefono: ${telefono.value}</p>
                               <p>Email: ${email.value}</p>
                               <p>Licencia: ${licencia.value}</p>
                               <p>Cantidad Tickets: ${cantidadSaltos.value}</p>
                               <p>Cantidad de Cuotas: ${cantidadCuotas.value}</p>
                               <p>Total a pagar: $ ${total}</p>
                               <p>Financiacion ${cantidadCuotas.value} cuotas de $ ${financiado}</p>
                                `;

        formulario.appendChild(confirmacion);
}


/*Funcion que muestra todos los paracaidistas que estan anotados y si tienen el psicofisico vencido */
/* function mostrarParaca (e) {
    e.preventDefault();
    
    for (const paracas of arrayParacaidistas) {
        let nombre = paracas.nombre;
        let apellido = paracas.apellido;
        let licenciaN = paracas.licenciaN;
        let vencimientoPsico = paracas.vencimientoPsicofisico;
        let cantidadSaltos = paracas.cantidadSaltos;
        
        let fecha = new Date();
        let objetoFecha = new Date(vencimientoPsico);
        console.log(fecha);
        console.log(objetoFecha);
        
        if (objetoFecha.getTime() > fecha.getTime()) { 
            let mostrar = document.getElementById("mostrar");
            let mostrarTodo = document.createElement("div");

            mostrarTodo.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="Fotos/foto.jpg" class="card-img-top" alt="paraca">
                                    <div class="card-body">
                                    <p class="card-text">Nombre: ${nombre}</p>
                                    <p>Apellido: ${apellido}
                                    <p>Licencia Nº: ${licenciaN}  
                                    <p>Vencimiento Psicofisico: Vigente                         
                                    <p>Cantidad de saltos: ${cantidadSaltos}
                                </div>
                               `

            mostrar.appendChild(mostrarTodo);
        } else {
            let mostrar = document.getElementById("mostrar");
        let mostrarTodo = document.createElement("div");

        mostrarTodo.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="Fotos/foto.jpg" class="card-img-top" alt="paraca">
                                    <div class="card-body">
                                    <p class="card-text">Nombre: ${nombre}</p>
                                    <p>Apellido: ${apellido}
                                    <p>Licencia Nº: ${licenciaN}  
                                    <p>Vencimiento Psicofisico: Vencido                         
                                    <p>Cantidad de saltos: ${cantidadSaltos}
                                </div>
                               `

        mostrar.appendChild(mostrarTodo);
        }
    }
} */

/*Funcion para poner Paracaidista en local storage */
function nuevoParaca (e) {
    e.preventDefault();
    let nombreNuevo = document.getElementById("nameNew");
    let apellidoNuevo = document.getElementById("surnameNew");
    let telefonoNuevo = document.getElementById("telNew");
    let emailNuevo = document.getElementById("emailNew");
    let licenciaNueva = document.getElementById("licenciaNew");
    let psicofisico = document.getElementById("psicofisico");
    let pscicoJson = JSON.stringify(psicofisico.value);
    let totalSaltos = document.getElementById("cantidadSaltos");

    localStorage.setItem("Nombre", nombreNuevo.value);
    localStorage.setItem("Apellido", apellidoNuevo.value);
    localStorage.setItem("Telefono", telefonoNuevo.value);
    localStorage.setItem("Email", emailNuevo.value);
    localStorage.setItem("Licencia Nº", licenciaNueva.value);
    
    localStorage.setItem("Vencimiento Psicofisico", pscicoJson);
    
    localStorage.setItem("Cantidad de saltos", totalSaltos.value);

    

    document.getElementById("formulario1").reset();
}

/*Manejadores de eventos */
let confirFormulario = document.getElementById("enviar");
confirFormulario.addEventListener("click", enviar);

/* let confirmarMostrar = document.getElementById("enviar1");
confirmarMostrar.addEventListener("click", mostrarParaca); */

let confirmarNuevo = document.getElementById("botonNew");
confirmarNuevo.addEventListener("click", nuevoParaca);




/*Desafio Entregable JQuery */
$("#enviar1").click(function(e) {
    e.preventDefault();
    
    for (const paracas of arrayParacaidistas) {
        let nombre = paracas.nombre;
        let apellido = paracas.apellido;
        let licenciaN = paracas.licenciaN;
        let vencimientoPsico = paracas.vencimientoPsicofisico;
        let cantidadSaltos = paracas.cantidadSaltos;
        
        let fecha = new Date();
        let objetoFecha = new Date(vencimientoPsico);
        console.log(fecha);
        console.log(objetoFecha);
        
        if (objetoFecha.getTime() > fecha.getTime()) { 
            
            $("#mostrar").append(`<div class="card" style="width: 18rem;">
            <img src="Fotos/foto.jpg" class="card-img-top" alt="paraca">
            <div class="card-body">
            <p class="card-text">Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}
            <p>Licencia Nº: ${licenciaN}  
            <p>Vencimiento Psicofisico: Vigente                         
            <p>Cantidad de saltos: ${cantidadSaltos}
        </div>
        `) 
        } else {
            $("#mostrar").append(`<div class="card" style="width: 18rem;">
            <img src="Fotos/foto.jpg" class="card-img-top" alt="paraca">
            <div class="card-body">
            <p class="card-text">Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}
            <p>Licencia Nº: ${licenciaN}  
            <p>Vencimiento Psicofisico: Vigente                         
            <p>Cantidad de saltos: ${cantidadSaltos}
        </div>
       `)

        
        }
    }
});



/*Desafio complementario animaciones concatenadas */
/* $("#hideForm").click(function(){
    $(".formulario1")
        .css("background-color", "red")
            .fadeOut(3000)
                .fadeIn(3000);
                    
}); */


/* let urlJSON = "http://hp-api.herokuapp.com/api/characters";

$("#buttonJSON").click(function(){
    $.get(urlJSON, function(datos){
        for(let personajes of datos){
            console.log(personajes.name);

            $("body").prepend(`<div>
                                    <p>${personajes.name}</p>
                                    <img src="${personajes.image}"></img>
                                    </div>`);
                                    
        }
    });
}) */

/* let geoLoc = navigator.geolocation.getCurrentPosition(mostrarGeo);


function mostrarGeo(position) {
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    console.log("latitud" + longitud);
    console.log("latitud" + latitud);
}

let urlClima = "http://api.openweathermap.org/data/2.5/weather?lat=-31.428&lon=-62.0827&appid=5b1b42cb7e852dd9e2b729eafb1e6443";


$("#clima").click(function(){
    $.get(urlClima, function(datos){
        console.log(datos);
    })
}) */

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?id=3837675&appid=5b1b42cb7e852dd9e2b729eafb1e6443',
    type: 'get',
    data: {
        id: '3837675',
        appid: '5b1b42cb7e852dd9e2b729eafb1e6443',
        dataType: 'jsonp',
        units: 'metric',   
    },


    success:function(data) {
        console.log(data);
        console.log(data.name);
        console.log(" La humedad es : " + data.main.humidity + " % " + " El viento es de: " + data.wind.speed);

        let divClima = `<div class="meteo">
                            <p>Aeroclub San Fancisco - ${data.name}, Cordoba</p>
                            <p>Temperatura: ${data.main.temp} ºC<p/>
                            <p>Sensacion termica: ${data.main.feels_like} ºC<p/>
                            <p>Temperatura Minima: ${data.main.temp_max} ºC<p/>
                            <p>Temperatura Maxima: ${data.main.temp_min} ºC<p/>
                            <p>Presion atmosferica: ${data.main.pressure} hPa<p/>
                            <p>Velocidad del viento: ${data.wind.speed} Km/h<p/>
                            <p>Direccion del viento: ${data.wind.deg} º<p/>
                            <p>Rafagas: ${data.wind.gust} Km/h<p/>
                            <p>Nubosidad: ${data.weather[0].main}</p>
                            <img src="http://openweathermap.org/img/wn/01d.png"
                        </div>`

        $("#infoMeteo").append(divClima);
        
    }
})