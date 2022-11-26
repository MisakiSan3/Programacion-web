class FiguraGeometrica {
  protected superficie: number = 30;
  protected tipo: string = "Octágono";

  // getters
  public get superficies() {
    return this.superficie;
  }

  public get tipos() {
    return this.tipo;
  }

  // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set tipos(tipo: string) {
    this.tipo = tipo;
  }
}

class Circulos extends FiguraGeometrica {
  protected superficie = 89;
  protected tipo = "Circulo";
  private radio: number = 2.83;

  // getters
  public get superficies() {
    return this.superficie;
  }
  public get radios() {
    return this.radio;
  }

  public get tipos() {
    return this.tipo;
  }

    // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set radios(radio: number) {
    this.radio = radio;
  }
  public set tipos(tipo: string) {
    this.tipo = tipo;
  }
}

class Triangulos extends FiguraGeometrica {
  protected superficie = 89;
  protected tipo = "Circulo";
  private base: number = 10;
  private altura: number = 7;

    // getters
  public get superficies() {
    return this.superficie;
  }
  public get bases() {
    return this.base;
  }
  public get alturas() {
    return this.altura;
  }

  public get tipos() {
    return this.tipo;
  }

    // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set bases(base: number) {
    this.base = base;
  }
  public set alturas(altura: number) {
    this.altura = altura;
  }
  public set tipos(tipo: string) {
    this.tipo = tipo;
  }
}

class Rectangulos extends FiguraGeometrica {
  protected superficie = 89;
  protected tipo = "Circulo";
  private lado: number = 4;

    // getters
  public get superficies() {
    return this.superficie;
  }
  public get lados() {
    return this.lado;
  }

  public get tipos() {
    return this.tipo;
  }

    // setters
  public set superficies(superficie: number) {
    this.superficie = superficie;
  }
  public set lados(lado: number) {
    this.lado = lado;
  }

  public set tipos(tipo: string) {
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
function mostrarTriangulo(triangulo: Triangulos) {
  console.log(
    "Tipo: " +
      triangulo.tipos +
      "\nSuperficie: " +
      triangulo.superficies +
      "\nAltura: " +
      triangulo.alturas +
      "\nBase: " +
      triangulo.bases
  );
}
function mostrarCirculo(circulo: Circulos) {
  console.log(
    "Tipo: " +
      circulo.tipos +
      "\nSuperficie: " +
      circulo.superficies +
      "\nAltura: " +
      circulo.radios
  );
}

function mostrarRectangulo(rectangulo: Rectangulos) {
  console.log(
    "Tipo: " +
      rectangulo.tipos +
      "\nSuperficie: " +
      rectangulo.superficies +
      "\nAltura: " +
      rectangulo.lados
  );
}
console.log(
  this.mostrarCirculo(circulo),
  this.mostrarRectangulo(rectangulo),
  this.mostrarTriangulo(triangulo)
);
