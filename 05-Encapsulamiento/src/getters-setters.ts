class Student {
  private name: string;
  private semester: number;
  private course: string;
  constructor(nm: string, sm: number, cs: string) {
    this.name = nm;
    this.semester = sm;
    this.course = cs;
  }
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
let student = new Student("Algo más", 4, "Web Development");

// uso de setters
student.courses = "Desarrollo de software";
student.names = "Isak Gómez";
student.semesters = 3;

// uso de getters
console.log("Nombre: " + student.names);
console.log("Curso: " + student.courses);
console.log("Semestre: " + student.semesters);

// hacer superclase figura geometrica (2 propiedades protected): y 3 subclases: circulos(radio private), triangulos ( base,altura private), rectangulo ( lado private) 
