/*Clases y finciones--------------------------------------------------------------------------------------------------------------------------------------------- */
/* class Paracaidista {
    constructor (nombre, apellido, licenciaN, vencimientoPsicofisico, cantidadSaltos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.licenciaN = licenciaN;
        this.vencimientoPsicofisico = vencimientoPsicofisico;
        this.cantidadSaltos = parseInt(cantidadSaltos);
    }
} */

/*Constructores---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* let paracaidista1 = new Paracaidista ("Lucas", "Orsini", "AR12345", "30/09/2022", 202);
let paracaidista2 = new Paracaidista ("Jose", "Perez", "AR78541", "01/06/2021", 50);
let paracaidista3 = new Paracaidista ("Jose", "Rodriguez", "AR74589", "01/10/2020", 178);
let paracaidista4 = new Paracaidista ("Juan", "Peres", "AR74521", "05/05/2022", 25); */

/*Arrays------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/* let arrayParacaidistas = [];
arrayParacaidistas.push(paracaidista1);
arrayParacaidistas.push(paracaidista2);
arrayParacaidistas.push(paracaidista3);
arrayParacaidistas.push(paracaidista4);
 */

function enviar() {
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