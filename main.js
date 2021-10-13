class Paracaidista {
    constructor (nombre, apellido, licenciaN, vencimientoPsicofisico, cantidadSaltos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.licenciaN = licenciaN;
        this.vencimientoPsicofisico = vencimientoPsicofisico;
        this.cantidadSaltos = parseInt(cantidadSaltos);
    }

    
}


let paracaidista1 = new Paracaidista ("Lucas", "Orsini", "AR12345", "30/09/2022", 202);
let paracaidista2 = new Paracaidista ("Jose", "Perez", "AR78541", "01/06/2021", 50);
let paracaidista3 = new Paracaidista ("Jose", "Rodriguez", "AR74589", "01/10/2020", 178);
let paracaidista4 = new Paracaidista ("Juan", "Peres", "AR74521", "05/05/2022", 25);


let select = parseInt(prompt("Selecciones el nombre del paracaidista\n1-Lucas Orsini\n2-Jose Perez\n3-Jose Rodriguez\n4-Juan Perez"));
let arrayParacaidistas = [];

arrayParacaidistas.push(paracaidista1);
arrayParacaidistas.push(paracaidista2);
arrayParacaidistas.push(paracaidista3);
arrayParacaidistas.push(paracaidista4);

const fecha = new Date ();
console.log(Date);

console.log(arrayParacaidistas);
const paracaMenosSaltos = arrayParacaidistas.filter (Paracaidista => Paracaidista.cantidadSaltos <= 50);

if (select == 1) {
    alert("Nombre: " + paracaidista1.nombre + "\nApellido: " + paracaidista1.apellido + "\nLicencia Nº: " + paracaidista1.licenciaN + "\nVencimiento psicofisico: " + paracaidista1.vencimientoPsicofisico + "\nCantidad de saltos: " + paracaidista1.cantidadSaltos);
} else if (select == 2) {
    alert("Nombre: " + paracaidista2.nombre + "\nApellido: " + paracaidista2.apellido + "\nLicencia Nº: " + paracaidista2.licenciaN + "\nVencimiento psicofisico: " + paracaidista2.vencimientoPsicofisico + "\nCantidad de saltos: " + paracaidista2.cantidadSaltos);
} else if (select == 3) {
    alert("Nombre: " + paracaidista3.nombre + "\nApellido: " + paracaidista3.apellido + "\nLicencia Nº: " + paracaidista3.licenciaN + "\nVencimiento psicofisico: " + paracaidista3.vencimientoPsicofisico + "\nCantidad de saltos: " + paracaidista3.cantidadSaltos);
} else if (select == 4) {
    alert("Nombre: " + paracaidista4.nombre + "\nApellido: " + paracaidista4.apellido + "\nLicencia Nº: " + paracaidista4.licenciaN + "\nVencimiento psicofisico: " + paracaidista4.vencimientoPsicofisico + "\nCantidad de saltos: " + paracaidista4.cantidadSaltos);
} else {
    console.log("La persona no existe");
} 


console.log(paracaMenosSaltos); 



