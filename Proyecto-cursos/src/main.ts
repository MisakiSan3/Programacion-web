import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Course } from "./entities/course";
import { Activitie } from "./entities/activities";
import { GradeBookSetup } from "./entities/gradeBookSetup";

let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];
let activities: Activitie[] = [];
let gradeBookSetups: GradeBookSetup[] = [];

enum CourseEnum{
    Programación = "Programación visual",
    BaseDatos = "Base de datos",
    Metodologias = "Metodologías"
}
enum AreaEnum{
    DesarrolloSoftware = "Desarrrollo de software",
    DiseñoModas = "Diseño de modas",
    Marketing = "Marketing"
}

function readFromHtml(id: string) {
  return (<HTMLInputElement>document.getElementById(id)).value;
}

function addStudent() {
  let currentStudent: Student = {
    name: readFromHtml("name"),
    identification: parseInt(readFromHtml("identification")),
    gmail: readFromHtml("mail"),
    adress: readFromHtml("adress"),
    enrollment: parseInt(readFromHtml("enrollment")),
    carrer: readFromHtml("career"),
    carrerLevel: parseInt(readFromHtml("careerLevel")),
  };
  students.push(currentStudent);
  console.table(students);
}

function addTeacher() {
  let currentTeacher: Teacher = {
    name: readFromHtml("nameTeacher"),
    identification: parseInt(readFromHtml("identificationTeacher")),
    gmail: readFromHtml("mailTeacher"),
    adress: readFromHtml("adressTeacher"),
    gradeLevel: readFromHtml("gradeLevel"),
    title: readFromHtml("title"),
    area: readFromHtml("area"),
  };
  teachers.push(currentTeacher);

  initSelect("area",AreaEnum);
}

function addCourse() {
  let currentCourse: Course = {
    numberHours: parseInt(readFromHtml("numberHours")),
    nameCourse: readFromHtml("nameCourse"),
    paralel: readFromHtml("paralel")
  }
  courses.push(currentCourse);
  console.table(courses)

}

function addGradeBook() {
    let currentGradeBookSetup: GradeBookSetup = {
      course: readFromHtml("coursegradeBook"),
      activitie: readFromHtml("activitiegradeBook"),
      value: readFromHtml("value"),
      maximunGrade: parseInt(readFromHtml("maximunGrade")),
    }
    gradeBookSetups.push(currentGradeBookSetup);
    console.table(gradeBookSetups)
    initSelect("coursegradeBook",CourseEnum)
  
  }

function addActivitie() {
  let currentActivitie: Activitie = {
    nameActivities: readFromHtml("nameActivities"),
  }
  activities.push(currentActivitie);
  console.table(activities)

}

function initSelect(idInput: string,enumerator: object): void{
    let areaTeacher = document.getElementById(idInput) as HTMLSelectElement;
    let enumArray = Object.values(enumerator);
    enumArray.forEach(value => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        areaTeacher.add(option);
    });
}

function eraseData(){
    localStorage.clear()
    console.log(localStorage.length)
}



