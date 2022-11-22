"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.edad = void 0;
exports.edad = 20;
let persona = "Isak";
class Persona {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    mostrarPersona() {
        console.log(this.nombre + this.identificacion);
    }
}
exports.Persona = Persona;
