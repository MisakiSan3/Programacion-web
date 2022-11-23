"use strict";
//================interfaces================
//================Vehiculos terrestres================
//================Automovil================
class Automovil {
    constructor() {
        this.modelo = 2018;
        this.fabricante = "Mazda";
        this.numeroLlantas = 0;
        this.marca = "";
    }
    abrirCajuela() {
        console.log("La cajuela del automovil se encuentra abierta");
    }
    conducir() {
        console.log("El vehículo está siendo conducido");
    }
    encender() {
        console.log("El vehículo está encendido");
    }
    acelerar() {
        console.log("El vehículo está acelerando");
    }
    apagar() {
        console.log("El vehículo está apagado");
    }
}
let automovil = new Automovil();
automovil.marca = "Mazda";
automovil.numeroLlantas = 5;
automovil.fabricante = "Mazda";
automovil.modelo = 2017;
function procesar(vehiculoTerrestre) {
    console.log("Automovil:");
    console.log("Marca: " + automovil.marca, "\nFabricante: " + automovil.fabricante, "\nModelo: " + automovil.modelo, "\nNumero llantas: " + automovil.numeroLlantas);
    vehiculoTerrestre.encender();
    vehiculoTerrestre.acelerar();
    vehiculoTerrestre.conducir();
    vehiculoTerrestre.apagar();
    vehiculoTerrestre.abrirCajuela();
}
console.log(procesar(automovil));
//===========Camion============
class Camion {
    constructor() {
        this.numeroLlantas = 8;
        this.modelo = 2017;
        this.fabricante = "Kia";
        this.capacidad = 0;
    }
    abrirContenedor() {
        console.log("El contenedor ha sido abierto");
    }
    conducir() {
        console.log("El vehículo está siendo conducido");
    }
    encender() {
        console.log("El vehículo está encendido");
    }
    acelerar() {
        console.log("El vehículo está acelerando");
    }
    apagar() {
        console.log("El vehículo está apagado");
    }
}
let camion = new Camion();
camion.capacidad = 2000;
camion.numeroLlantas = 8;
camion.fabricante = "Kia";
camion.modelo = 2022;
function mostrarcamion(camion) {
    console.log("Camion:");
    console.log("Fabricante: " + camion.fabricante, "\nModelo: " + camion.modelo, "\nNumero llantas: " + camion.numeroLlantas, "\nCapacidad: " + camion.capacidad);
    camion.encender();
    camion.acelerar();
    camion.conducir();
    camion.apagar();
    camion.abrirContenedor();
}
console.log(mostrarcamion(camion));
//================Camioneta================
class Camioneta {
    constructor() {
        this.numeroLlantas = 4;
        this.modelo = 1994;
        this.fabricante = "Chevrolet";
        this.altoSuspencion = 45;
    }
    cargarCamioneta() {
        console.log("La camioneta ha sido cargada");
    }
    conducir() {
        console.log("El vehículo está siendo conducido");
    }
    encender() {
        console.log("El vehículo está encendido");
    }
    acelerar() {
        console.log("El vehículo está acelerando");
    }
    apagar() {
        console.log("El vehículo está apagado");
    }
}
let camioneta = new Camioneta();
camioneta.altoSuspencion = 38;
camioneta.numeroLlantas = 5;
camioneta.fabricante = "Mazda";
camioneta.modelo = 1987;
function mostrarCamioneta(camioneta) {
    console.log("Camioneta:");
    console.log("Fabricante: " + camioneta.fabricante, "\nModelo: " + camioneta.modelo, "\nNumero llantas: " + camioneta.numeroLlantas, "\nAlto suspención: " + camioneta.altoSuspencion);
    camioneta.encender();
    camioneta.acelerar();
    camioneta.conducir();
    camioneta.apagar();
}
console.log(mostrarCamioneta(camioneta));
//================Vehiculos maritimos================
//================Yate================
class Yate {
    constructor() {
        this.numeroTurbinas = 2;
        this.modelo = 2018;
        this.fabricante = "";
        this.cantidadPersonas = 0;
    }
    encender() {
        console.log("El vehículo está encendido");
    }
    acelerar() {
        console.log("El vehículo está acelerando");
    }
    navegar() {
        console.log("El vehículo está navegando");
    }
    mostrarCantidadPersonas() {
        console.log(this.cantidadPersonas);
    }
    apagar() {
        console.log("El vehículo está apagado");
    }
}
let yate = new Yate();
yate.numeroTurbinas = 8;
yate.cantidadPersonas = 5;
yate.fabricante = "sting";
yate.modelo = 2017;
function mostrarYate(yate) {
    console.log("Yate:");
    console.log("Número Turbinas: " + yate.numeroTurbinas, "\nFabricante: " + yate.fabricante, "\nModelo: " + yate.modelo, "\nCapacidad personas: " + yate.cantidadPersonas);
    yate.encender();
    yate.acelerar();
    yate.navegar();
    yate.apagar();
    yate.mostrarCantidadPersonas();
}
console.log(mostrarYate(yate));
//================Velero================
class Velero {
    constructor() {
        this.numeroTurbinas = 0;
        this.modelo = 0;
        this.fabricante = "";
        this.aerodinamismo = "";
    }
    encender() {
        console.log("El vehículo está encendido");
    }
    acelerar() {
        console.log("El vehículo está acelerando");
    }
    navegar() {
        console.log("El vehículo está navegando");
    }
    mostrarAerodinamismo() {
        console.log(this.aerodinamismo);
    }
    apagar() {
        console.log("El vehículo está apagado");
    }
}
let velero = new Velero();
velero.numeroTurbinas = 4;
velero.aerodinamismo = "alto";
velero.fabricante = "Shibukai";
velero.modelo = 2015;
function mostrarvelero(velero) {
    console.log("velero:");
    console.log("Número Turbinas: " + velero.numeroTurbinas, "\nFabricante: " + velero.fabricante, "\nModelo: " + velero.modelo, "\nAerodinamismo: " + velero.aerodinamismo);
    velero.encender();
    velero.acelerar();
    velero.navegar();
    velero.apagar();
    velero.mostrarAerodinamismo();
}
console.log(mostrarvelero(velero));
//================Vehiculos aereos================
//================Avion================
class Avion {
    constructor() {
        this.alcanceDespegue = 0;
        this.modelo = 0;
        this.fabricante = "";
        this.numeroAlerones = 0;
    }
    encender() {
        console.log("El vehículo está encendido");
    }
    acelerar() {
        console.log("El vehículo está acelerando");
    }
    volar() {
        console.log("El vehículo está volando");
    }
    mostrarNumerAlerones() {
        console.log(this.numeroAlerones);
    }
    apagar() {
        console.log("El vehículo está apagado");
    }
}
let avion = new Avion();
avion.numeroAlerones = 7;
avion.alcanceDespegue = 1500;
avion.fabricante = "Boeing";
avion.modelo = 2020;
function mostraravion(avion) {
    console.log("Avion:");
    console.log("Número alerones: " + avion.numeroAlerones, "\nFabricante: " + avion.fabricante, "\nModelo: " + avion.modelo, "\nAlcance de despegue: " + avion.alcanceDespegue);
    avion.encender();
    avion.acelerar();
    avion.volar();
    avion.apagar();
    avion.mostrarNumerAlerones();
}
console.log(mostraravion(avion));
//================Avionetas================
class Avioneta {
    constructor() {
        this.alcanceDespegue = 0;
        this.modelo = 0;
        this.fabricante = "";
        this.longitudAla = 0;
    }
    encender() {
        console.log("El vehículo está encendido");
    }
    acelerar() {
        console.log("El vehículo está acelerando");
    }
    volar() {
        console.log("El vehículo está volando");
    }
    mostrarLongitudAla() {
        console.log(this.longitudAla);
    }
    apagar() {
        console.log("El vehículo está apagado");
    }
}
let avioneta = new Avioneta();
avioneta.longitudAla = 4;
avioneta.alcanceDespegue = 700;
avioneta.fabricante = "Dodo";
avioneta.modelo = 2020;
function mostraravioneta(avioneta) {
    console.log("Avioneta:");
    console.log("Longitud de ala: " + avioneta.longitudAla, "\nFabricante: " + avioneta.fabricante, "\nModelo: " + avioneta.modelo, "\nAlcance de despegue: " + avioneta.alcanceDespegue);
    avioneta.encender();
    avioneta.acelerar();
    avioneta.volar();
    avioneta.apagar();
    avioneta.mostrarLongitudAla();
}
console.log(mostraravioneta(avioneta));
