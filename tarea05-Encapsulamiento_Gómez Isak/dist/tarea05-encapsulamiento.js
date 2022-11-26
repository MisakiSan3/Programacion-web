"use strict";
class FiguraGeometrica {
    constructor() {
        this.superficie = 30;
        this.tipo = "Octágono";
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
class Circulos extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.superficie = 89;
        this.tipo = "Circulo";
        this.radio = 2.83;
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get radios() {
        return this.radio;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set radios(radio) {
        this.radio = radio;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
class Triangulos extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.superficie = 89;
        this.tipo = "Circulo";
        this.base = 10;
        this.altura = 7;
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get bases() {
        return this.base;
    }
    get alturas() {
        return this.altura;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set bases(base) {
        this.base = base;
    }
    set alturas(altura) {
        this.altura = altura;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
class Rectangulos extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.superficie = 89;
        this.tipo = "Circulo";
        this.lado = 4;
    }
    // getters
    get superficies() {
        return this.superficie;
    }
    get lados() {
        return this.lado;
    }
    get tipos() {
        return this.tipo;
    }
    // setters
    set superficies(superficie) {
        this.superficie = superficie;
    }
    set lados(lado) {
        this.lado = lado;
    }
    set tipos(tipo) {
        this.tipo = tipo;
    }
}
// instanciar objetos
let rectangulo = new Rectangulos();
rectangulo.tipos = "Rectangulo";
rectangulo.lados = 4;
rectangulo.superficies = 36;
let triangulo = new Triangulos();
triangulo.tipos = "Triangulo Equilatero";
triangulo.superficies = 180;
triangulo.bases = 60;
triangulo.alturas = 3;
let circulo = new Circulos();
circulo.tipos = "Circulo";
circulo.radios = 70;
circulo.superficies = 300;
// console.log
function mostrarTriangulo(triangulo) {
    console.log("Tipo: " +
        triangulo.tipos +
        "\nSuperficie: " +
        triangulo.superficies +
        "\nAltura: " +
        triangulo.alturas +
        "\nBase: " +
        triangulo.bases);
}
function mostrarCirculo(circulo) {
    console.log("Tipo: " +
        circulo.tipos +
        "\nSuperficie: " +
        circulo.superficies +
        "\nAltura: " +
        circulo.radios);
}
function mostrarRectangulo(rectangulo) {
    console.log("Tipo: " +
        rectangulo.tipos +
        "\nSuperficie: " +
        rectangulo.superficies +
        "\nAltura: " +
        rectangulo.lados);
}
console.log(this.mostrarCirculo(circulo), this.mostrarRectangulo(rectangulo), this.mostrarTriangulo(triangulo));
