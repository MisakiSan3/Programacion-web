document.write('Clases y herencia con typescript')
 
class Persona {
    protected nombre: string;
    protected identificacion: string;
    protected edad: number;
    protected direccion: string;
    constructor(nombre: string, identificacion: string, edad: number, direccion: string) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.edad = edad;
        this.direccion = direccion;
    }
    imprimir() {
        console.log('Su nombre es: ' + this.nombre);
        console.log('Su identificacion es: ' + this.identificacion);
        console.log('Su edad es: ' + this.edad);
        console.log('Su direccion es: ' + this.direccion);
    }
}
 
class Estudiante extends Persona {
    private numeroMatricula: number;
    private nivel: string;
    constructor(nombre: string, identificacion: string, edad: number, direccion: string, numeroMatricula: number, nivel: string) {
        super(nombre, identificacion, edad, direccion);
        this.nombre = nombre
        this.numeroMatricula = numeroMatricula
        this.nivel = nivel
    }
    imprimir() {
        console.log('Estudiante:');
        super.imprimir();
        console.log('Su número de seguro es: ' + this.numeroMatricula);
        console.log('Su titulo es: ' + this.nivel);
    }
}
 
class Docente extends Persona {
    private numeroSeguro: number;
    private titulo: string;
    numeroHorasExtra: number;
    pagoXHorasExtra: number;
    constructor(nombre: string, identificacion: string, edad: number, direccion: string, numeroSeguro: number, titulo: string,numeroHorasExtra: number,pagoXHorasExtra: number) {
        super(nombre, identificacion, edad, direccion);
        this.numeroSeguro = numeroSeguro
        this.titulo = titulo
        this.numeroHorasExtra = numeroHorasExtra
        this.pagoXHorasExtra = pagoXHorasExtra
    };
    imprimir() {
        console.log('Docente:');
        super.imprimir();
        console.log('Su número de seguro es: ' + this.numeroSeguro);
        console.log('Su titulo es: ' + this.titulo);
    };
    calcularSueldo(){
        this.numeroHorasExtra = 10
        this.pagoXHorasExtra = 15
        let sueldoTotal = this.numeroHorasExtra * this.pagoXHorasExtra;
        document.write('<br>' + 'Su sueldo es: ' + sueldoTotal + '$')
    }
}
let persona = new Persona('Jorge', '1739', 27, 'La mena');
let docente = new Docente('Armando', '1752', 24, 'Quito', 128, 'Rector',10,18);
let estudiante = new Estudiante('Felix', '1792', 18, 'Quito', 144, '1er');
 
//console.log(docente.numeroSeguro, docente.titulo);
//console.log(estudiante.numeroMatricula, estudiante.nivel);
persona.imprimir()
docente.imprimir()
estudiante.imprimir()
 docente.calcularSueldo()
//calcular sueldo"
//crear una clase padre Transporte y tres subclases "aereo","maritimo","terrestre"
