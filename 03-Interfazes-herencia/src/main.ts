//================interfaces================

interface Vehiculo {
    modelo: number;
    fabricante: string;
    encender(): void;
    acelerar(): void;
    apagar(): void;

};

interface VehiculoTerrestre extends Vehiculo {
    numeroLlantas: number;
    conducir(): void;
};

interface VehiculoMaritimo extends Vehiculo {
    numeroTurbinas: number;
    navegar(): void;
}

interface VehiculoAereo extends Vehiculo {
    alcanceDespegue: number;
    volar(): void;
}

//================Clases================

class Automovil implements VehiculoTerrestre {
    modelo: number = 2018;
    fabricante: string = 'Mazda';
    numeroLlantas : number = 0;
    marca : string = '';

    abrirCajuela(): void {
        console.log('La cajuela del automovil se encuentra abierta')
    };
    conducir(): void {
        console.log('El vehículo está siendo conducido');
    };
    encender(): void {
        console.log('El vehículo estáencendido');
    };
    acelerar(): void {
        console.log('El vehículo está acelerando');
    };
    apagar(): void {
        console.log('El vehículo está apagado');
    };
}

//================Funciones================

function procesar(vehiculoTerrestre: VehiculoTerrestre) {
    vehiculoTerrestre.encender();
    vehiculoTerrestre.acelerar();
    vehiculoTerrestre.conducir();
}
let automovil = new Automovil();
automovil.marca = 'Mazda'
automovil.numeroLlantas = 5;
automovil.fabricante = 'Mazda'
automovil.modelo = 2987
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