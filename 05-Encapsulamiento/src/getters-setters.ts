class Student {
  private name: string = 'Algo';
  private semester: number = 6;
  private course: string = 'Inglés';
  
  // getters
  public get courses() {
    return this.course;
  }

  public get semesters() {
    return this.semester;
  }

  public get names() {
    return this.name;
  }
  // setters
  public set courses(thecourse: string) {
    this.course = thecourse;
  }
  public set semesters(thesemester: number) {
    this.semester = thesemester;
  }
  public set names(thename: string) {
    this.name = thename;
  }
}

// instanciar objetos
let student = new Student();

// uso de setters
student.courses = "Desarrollo de software";
student.names = "Isak Gómez";
student.semesters = 3;

// uso de getters
console.log("Nombre: " + student.names);
console.log("Curso: " + student.courses);
console.log("Semestre: " + student.semesters);

// hacer superclase figura geometrica (2 propiedades protected): y 3 subclases: circulos(radio private), triangulos ( base,altura private), rectangulo ( lado private) 
