/*Clases y funciones--------------------------------------------------------------------------------------------------------------------------------------------- */
class Staff {
    constructor (nombre, apellido, licenciaN,  cantidadSaltos, puesto, imagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.licenciaN = licenciaN;
        this.cantidadSaltos = parseInt(cantidadSaltos);
        this.puesto = puesto;
        this.imagen = imagen;
    }
}

/*Constructores---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
let staff1 = new Staff ("Roberto", "Carlos", "AR12345", 2500,"Instructor", "Fotos/instructor.jpg");
let staff2 = new Staff ("Jose", "Perez", "AR78541",3000, "Piloto Tandem", "Fotos/tandem.jpg");
let staff3 = new Staff ("Jose", "Rodriguez", "AR74589",1500,"Camarografo", "Fotos/camara.jpg");
let staff4 = new Staff ("Juan", "Peres", "AR74521",550, "Plegador", "Fotos/plegador.jpg"); 


/*Arrays------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
let arrayStaff = []; 
arrayStaff.push(staff1);
arrayStaff.push(staff2);
arrayStaff.push(staff3);
arrayStaff.push(staff4); 

/*Muestra el Staff con fotos */
for (const staff of arrayStaff) {
    let nombre = staff.nombre;
    let apellido = staff.apellido;
    let licenciaN = staff.licenciaN;
    let cantidadSaltos = staff.cantidadSaltos;
    let puesto = staff.puesto;
    let img = staff.imagen;


    let mostrar = document.getElementById("mostrarStaff");
    let mostrarTodo = document.createElement("div");

    mostrarTodo.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="${img}" class="card-img-top imgCard" alt="paraca">
                                    <div class="card-body">
                                    <p class="card-text">Nombre: ${nombre}</p>
                                    <p>Apellido: ${apellido}
                                    <p>Licencia Nº: ${licenciaN}                          
                                    <p>Cantidad de saltos: ${cantidadSaltos}
                                    <p>Puesto : ${puesto}</p>
                                </div>
                               `

            mostrar.appendChild(mostrarTodo);
}

/*Funcion que muestra la operacion de compra de tickets */
function enviar(e) {
    e.preventDefault();
    
    let nombre = document.getElementById("name");
    let apellido = document.getElementById("surname");
    let telefono = document.getElementById("tel");
    let email = document.getElementById("email");
    /* let licencia = document.getElementById("licencia"); */
    let cantidadSaltos = document.getElementById("tickets");
    let cantidadCuotas = document.getElementById("cuotas");
    

    
    let precio = 3000;
    let total = parseFloat(cantidadSaltos.value * precio);
    let financiado = parseFloat(total / cantidadCuotas.value);

    if (cantidadCuotas.value > 1) {
        total = total + (total * 0.2);
        financiado = financiado + (financiado * 0.2);
    } 

    let formulario = document.getElementById("confirmacionForm");
    let confirmacion = document.createElement("div");

    confirmacion.innerHTML = `<p>
                                <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Mostrar Compra
                                </button>
                              </p>
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body">
                                            <p>Nombre: ${nombre.value}</p>
                                            <p>Apellido: ${apellido.value}</p>
                                            <p>Telefono: ${telefono.value}</p>
                                            <p>Email: ${email.value}</p>
                                            <p>Cantidad Tickets: ${cantidadSaltos.value}</p>
                                            <p>Cantidad de Cuotas: ${cantidadCuotas.value}</p>
                                            <p>Total a pagar: $ ${total}</p>
                                            <p>Financiacion ${cantidadCuotas.value} cuotas de $ ${financiado}</p>
                                        </div>
                                    </div>`;

        formulario.appendChild(confirmacion);
}

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

    let fecha = new Date();
    let objetoFecha = new Date(psicofisico.value);
    console.log(fecha);
    console.log(objetoFecha);

    if (objetoFecha.getTime() > fecha.getTime()) { 
        let mostrar = document.getElementById("mostrar");
        let mostrarTodo = document.createElement("div");

        mostrarTodo.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="Fotos/foto.jpg" class="card-img-top" alt="paraca">
                                <div class="card-body">
                                <p class="card-text">Nombre: ${nombreNuevo.value}</p>
                                <p>Apellido: ${apellidoNuevo.value}
                                <p>Licencia Nº: ${licenciaNueva.value}  
                                <p>Vencimiento Psicofisico: Vigente                         
                                <p>Cantidad de saltos: ${totalSaltos.value}
                            </div>
                           `

        mostrar.appendChild(mostrarTodo);
    } else {
        let mostrar = document.getElementById("mostrar");
        let mostrarTodo = document.createElement("div");

        mostrarTodo.innerHTML = `<div class="card" style="width: 18rem;">
                                 <img src="Fotos/foto.jpg" class="card-img-top" alt="paraca">
                                <div class="card-body">
                                <p class="card-text">Nombre: ${nombreNuevo.value}</p>
                                <p>Apellido: ${apellidoNuevo.value}
                                <p>Licencia Nº: ${licenciaNueva.value}  
                                <p>Vencimiento Psicofisico: Vencido                         
                                <p>Cantidad de saltos: ${totalSaltos.value}
                                </div>`

        mostrar.appendChild(mostrarTodo);
    }

        document.getElementById("formulario1").reset();
}

/*Manejadores de eventos */
let confirFormulario = document.getElementById("enviar");
confirFormulario.addEventListener("click", enviar);

let confirmarNuevo = document.getElementById("botonNew");
confirmarNuevo.addEventListener("click", nuevoParaca);


/*AJAX Api para tomas datos del clima */
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?id=3837675&appid=5b1b42cb7e852dd9e2b729eafb1e6443',
    type: 'get',
    data: {
        id: '3837675',
        appid: '5b1b42cb7e852dd9e2b729eafb1e6443',
        dataType: 'jsonp',
        units: 'metric',  
        cnt: `7`, 
    
    },
    success:function(data) {
        console.log(data);
        console.log(data.name);
        console.log(" La humedad es : " + data.main.humidity + " % " + " El viento es de: " + data.wind.speed);

        let divClima = `
                        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Aeroclub San Francisco - ${data.name}</h5>
                        <h4 class="card-subtitle mb-2 text-muted">Cordoba</h4>
                        <p>Sensacion termica: ${data.main.feels_like} ºC<p/>
                            <p>Temperatura Minima: ${data.main.temp_max} ºC<p/>
                            <p>Temperatura Maxima: ${data.main.temp_min} ºC<p/>
                            <p>Presion atmosferica: ${data.main.pressure} hPa<p/>
                            <p>Velocidad del viento: ${data.wind.speed} Km/h<p/>
                            <p>Direccion del viento: ${data.wind.deg} º<p/>
                            <p>Rafagas: ${data.wind.gust} Km/h<p/>
                            <p>Nubosidad: ${data.weather[0].main}</p>
                        
                        </div>
                        </div>`
                        
        $("#infoMeteo").append(divClima);
        
    }
})


