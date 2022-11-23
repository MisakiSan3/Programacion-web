"use strict";
class Student {
    constructor() {
        this.name = 'Algo';
        this.semester = 6;
        this.course = 'Inglés';
    }
    // getters
    get courses() {
        return this.course;
    }
    get semesters() {
        return this.semester;
    }
    get names() {
        return this.name;
    }
    // setters
    set courses(thecourse) {
        this.course = thecourse;
    }
    set semesters(thesemester) {
        this.semester = thesemester;
    }
    set names(thename) {
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
