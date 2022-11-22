"use strict";
//================interfaces================
;
;
//================Clases================
class Automovil {
    constructor() {
        this.modelo = 2018;
        this.fabricante = 'Mazda';
        this.numeroLlantas = 0;
        this.marca = '';
    }
    abrirCajuela() {
        console.log('La cajuela del automovil se encuentra abierta');
    }
    ;
    conducir() {
        console.log('El vehículo está siendo conducido');
    }
    ;
    encender() {
        console.log('El vehículo estáencendido');
    }
    ;
    acelerar() {
        console.log('El vehículo está acelerando');
    }
    ;
    apagar() {
        console.log('El vehículo está apagado');
    }
    ;
}
//================Funciones================
function procesar(vehiculoTerrestre) {
    vehiculoTerrestre.encender();
    vehiculoTerrestre.acelerar();
    vehiculoTerrestre.conducir();
}
let automovil = new Automovil();
automovil.marca = 'Mazda';
automovil.numeroLlantas = 5;
automovil.fabricante = 'Mazda';
automovil.modelo = 2987;
console.log(automovil.marca);
console.log(automovil.fabricante);
console.log(automovil.modelo);
console.log(automovil.numeroLlantas);
console.log(automovil.abrirCajuela());
console.log(automovil.encender());
console.log(automovil.acelerar());
console.log(automovil.apagar());
//de vehiculo terrestre = camion, camioneta
//vehiculo maritimo = yate,velero
// vehiculo aereo = avion, avioneta
