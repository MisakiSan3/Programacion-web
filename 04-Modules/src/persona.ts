export let edad: number = 20;
let persona: string = "Isak";


export class Persona {
  nombre: string;
  identificacion: number;

  constructor(nombre: string, identificacion: number) {
    this.nombre = nombre;
    this.identificacion = identificacion;
  }
  mostrarPersona() {
    console.log(this.nombre + this.identificacion);
  }
}
