//================interfaces================

interface Vehiculo {
  modelo: number;
  fabricante: string;
  encender(): void;
  acelerar(): void;
  apagar(): void;
}

interface VehiculoTerrestre extends Vehiculo {
  numeroLlantas: number;
  conducir(): void;
}

interface VehiculoMaritimo extends Vehiculo {
  numeroTurbinas: number;
  navegar(): void;
}

interface VehiculoAereo extends Vehiculo {
  alcanceDespegue: number;
  volar(): void;
}

//================Vehiculos terrestres================

//================Automovil================

class Automovil implements VehiculoTerrestre {
  modelo: number = 2018;
  fabricante: string = "Mazda";
  numeroLlantas: number = 0;
  marca: string = "";

  abrirCajuela(): void {
    console.log("La cajuela del automovil se encuentra abierta");
  }
  conducir(): void {
    console.log("El vehículo está siendo conducido");
  }
  encender(): void {
    console.log("El vehículo está encendido");
  }
  acelerar(): void {
    console.log("El vehículo está acelerando");
  }
  apagar(): void {
    console.log("El vehículo está apagado");
  }
}
let automovil = new Automovil();
automovil.marca = "Mazda";
automovil.numeroLlantas = 5;
automovil.fabricante = "Mazda";
automovil.modelo = 2017;
function procesar(vehiculoTerrestre: Automovil) {
  console.log("Automovil:");
  console.log(
    "Marca: " + automovil.marca,
    "\nFabricante: " + automovil.fabricante,
    "\nModelo: " + automovil.modelo,
    "\nNumero llantas: " + automovil.numeroLlantas
  );
  vehiculoTerrestre.encender();
  vehiculoTerrestre.acelerar();
  vehiculoTerrestre.conducir();
  vehiculoTerrestre.apagar();
  vehiculoTerrestre.abrirCajuela();
}
console.log(procesar(automovil));

//===========Camion============

class Camion implements VehiculoTerrestre {
  numeroLlantas: number = 8;
  modelo: number = 2017;
  fabricante: string = "Kia";
  capacidad: number = 0;

  abrirContenedor(): void {
    console.log("El contenedor ha sido abierto");
  }
  conducir(): void {
    console.log("El vehículo está siendo conducido");
  }
  encender(): void {
    console.log("El vehículo está encendido");
  }
  acelerar(): void {
    console.log("El vehículo está acelerando");
  }
  apagar(): void {
    console.log("El vehículo está apagado");
  }
}

let camion = new Camion();
camion.capacidad = 2000;
camion.numeroLlantas = 8;
camion.fabricante = "Kia";
camion.modelo = 2022;
function mostrarcamion(camion: Camion) {
  console.log("Camion:");
  console.log(
    "Fabricante: " + camion.fabricante,
    "\nModelo: " + camion.modelo,
    "\nNumero llantas: " + camion.numeroLlantas,
    "\nCapacidad: " + camion.capacidad
  );
  camion.encender();
  camion.acelerar();
  camion.conducir();
  camion.apagar();
  camion.abrirContenedor();
}
console.log(mostrarcamion(camion));

//================Camioneta================

class Camioneta implements VehiculoTerrestre {
  numeroLlantas: number = 4;
  modelo: number = 1994;
  fabricante: string = "Chevrolet";
  altoSuspencion: number = 45;

  cargarCamioneta(): void {
    console.log("La camioneta ha sido cargada");
  }
  conducir(): void {
    console.log("El vehículo está siendo conducido");
  }
  encender(): void {
    console.log("El vehículo está encendido");
  }
  acelerar(): void {
    console.log("El vehículo está acelerando");
  }
  apagar(): void {
    console.log("El vehículo está apagado");
  }
}

let camioneta = new Camioneta();
camioneta.altoSuspencion = 38;
camioneta.numeroLlantas = 5;
camioneta.fabricante = "Mazda";
camioneta.modelo = 1987;
function mostrarCamioneta(camioneta: Camioneta) {
  console.log("Camioneta:");
  console.log(
    "Fabricante: " + camioneta.fabricante,
    "\nModelo: " + camioneta.modelo,
    "\nNumero llantas: " + camioneta.numeroLlantas,
    "\nAlto suspención: " + camioneta.altoSuspencion
  );
  camioneta.encender();
  camioneta.acelerar();
  camioneta.conducir();
  camioneta.apagar();
}
console.log(mostrarCamioneta(camioneta));

//================Vehiculos maritimos================

//================Yate================

class Yate implements VehiculoMaritimo {
  numeroTurbinas: number = 2;
  modelo: number = 2018;
  fabricante: string = "";
  cantidadPersonas: number = 0;

  encender(): void {
    console.log("El vehículo está encendido");
  }
  acelerar(): void {
    console.log("El vehículo está acelerando");
  }
  navegar(): void {
    console.log("El vehículo está navegando");
  }
  mostrarCantidadPersonas() {
    console.log(this.cantidadPersonas);
  }
  apagar(): void {
    console.log("El vehículo está apagado");
  }
}
let yate = new Yate();
yate.numeroTurbinas = 8;
yate.cantidadPersonas = 5;
yate.fabricante = "sting";
yate.modelo = 2017;
function mostrarYate(yate: Yate) {
  console.log("Yate:");
  console.log(
    "Número Turbinas: " + yate.numeroTurbinas,
    "\nFabricante: " + yate.fabricante,
    "\nModelo: " + yate.modelo,
    "\nCapacidad personas: " + yate.cantidadPersonas
  );
  yate.encender();
  yate.acelerar();
  yate.navegar();
  yate.apagar();
  yate.mostrarCantidadPersonas();
}
console.log(mostrarYate(yate));

//================Velero================

class Velero implements VehiculoMaritimo {
  numeroTurbinas: number = 0;
  modelo: number = 0;
  fabricante: string = "";
  aerodinamismo: string = "";

  encender(): void {
    console.log("El vehículo está encendido");
  }
  acelerar(): void {
    console.log("El vehículo está acelerando");
  }
  navegar(): void {
    console.log("El vehículo está navegando");
  }
  mostrarAerodinamismo() {
    console.log(this.aerodinamismo);
  }
  apagar(): void {
    console.log("El vehículo está apagado");
  }
}
let velero = new Velero();
velero.numeroTurbinas = 4;
velero.aerodinamismo = "alto";
velero.fabricante = "Shibukai";
velero.modelo = 2015;
function mostrarvelero(velero: Velero) {
  console.log("velero:");
  console.log(
    "Número Turbinas: " + velero.numeroTurbinas,
    "\nFabricante: " + velero.fabricante,
    "\nModelo: " + velero.modelo,
    "\nAerodinamismo: " + velero.aerodinamismo
  );
  velero.encender();
  velero.acelerar();
  velero.navegar();
  velero.apagar();
  velero.mostrarAerodinamismo();
}
console.log(mostrarvelero(velero));

//================Vehiculos aereos================

//================Avion================

class Avion implements VehiculoAereo {
  alcanceDespegue: number = 0;
  modelo: number = 0;
  fabricante: string = "";
  numeroAlerones: number = 0;
  encender(): void {
    console.log("El vehículo está encendido");
  }
  acelerar(): void {
    console.log("El vehículo está acelerando");
  }
  volar(): void {
    console.log("El vehículo está volando");
  }
  mostrarNumerAlerones() {
    console.log(this.numeroAlerones);
  }
  apagar(): void {
    console.log("El vehículo está apagado");
  }
}
let avion = new Avion();
avion.numeroAlerones = 7;
avion.alcanceDespegue = 1500;
avion.fabricante = "Boeing";
avion.modelo = 2020;
function mostraravion(avion: Avion) {
  console.log("Avion:");
  console.log(
    "Número alerones: " + avion.numeroAlerones,
    "\nFabricante: " + avion.fabricante,
    "\nModelo: " + avion.modelo,
    "\nAlcance de despegue: " + avion.alcanceDespegue
  );
  avion.encender();
  avion.acelerar();
  avion.volar();
  avion.apagar();
  avion.mostrarNumerAlerones();
}
console.log(mostraravion(avion));

//================Avionetas================

class Avioneta implements VehiculoAereo {
  alcanceDespegue: number = 0;
  modelo: number = 0;
  fabricante: string = "";
  longitudAla: number = 0;
  encender(): void {
    console.log("El vehículo está encendido");
  }
  acelerar(): void {
    console.log("El vehículo está acelerando");
  }
  volar(): void {
    console.log("El vehículo está volando");
  }
  mostrarLongitudAla() {
    console.log(this.longitudAla);
  }
  apagar(): void {
    console.log("El vehículo está apagado");
  }
}
let avioneta = new Avioneta();
avioneta.longitudAla = 4;
avioneta.alcanceDespegue = 700;
avioneta.fabricante = "Dodo";
avioneta.modelo = 2020;
function mostraravioneta(avioneta: Avioneta) {
  console.log("Avioneta:");
  console.log(
    "Longitud de ala: " + avioneta.longitudAla,
    "\nFabricante: " + avioneta.fabricante,
    "\nModelo: " + avioneta.modelo,
    "\nAlcance de despegue: " + avioneta.alcanceDespegue
  );
  avioneta.encender();
  avioneta.acelerar();
  avioneta.volar();
  avioneta.apagar();
  avioneta.mostrarLongitudAla();
}
console.log(mostraravioneta(avioneta));
