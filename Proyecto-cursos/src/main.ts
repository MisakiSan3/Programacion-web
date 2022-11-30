import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Course } from "./entities/course";
import { Activitie } from "./entities/activities";

function readFromHtml(id: string) {
  return (<HTMLInputElement>document.getElementById(id)).value;
}

function addStudent() {
  let students: Student[] = [];
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
  console.log(currentStudent);
}

function addTeacher() {
  let teachers: Teacher[] = [];
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
  console.log(currentTeacher);
}

function addCourse() {
  let courses: Course[] = [];
  let currentCourse: Course = {
    numberHours: parseInt(readFromHtml("numberHours")),
    nameCourse: readFromHtml("nameCourse"),
    paralel: readFromHtml("paralel")
  }
  courses.push(currentCourse);
  console.log(currentCourse)

}

function addActivitie() {
  let activities: Activitie[] = [];
  let currentActivitie: Activitie = {
    nameActivities: readFromHtml("nameActivities"),
  }
  activities.push(currentActivitie);
  console.log(currentActivitie)

}



