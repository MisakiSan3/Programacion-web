import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Course } from "./entities/course";
import { Activitie } from "./entities/activities";
import { GradeBookSetup } from "./entities/gradeBookSetup";
import { GradesSummary } from "./entities/gradesSummary";

let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];
let activities: Activitie[] = [];
let gradeBookSetups: GradeBookSetup[] = [];
let gradesSummaries: GradesSummary[] = [];
let areas: any[] = [
  { name: "Desarrollo de software" },
  { name: "Diseño de modas" },
  { name: "Marketing" },
];

function readFromHtml(id: string): string {
  return (<HTMLInputElement>document.getElementById(id)).value;
}

function addStudent(): void {
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
  addToTable(students,'studentsTable');
}

function addTeacher(): void {
  initSelect("area", areas);
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
  addToTable(teachers,'teachersTable')
}

function addCourse(): void {
  let currentCourse: Course = {
    numberHours: parseInt(readFromHtml("numberHours")),
    name: readFromHtml("nameCourse"),
    paralel: readFromHtml("paralel"),
  };
  courses.push(currentCourse);
  console.table(courses);
  addToTable(courses,'coursesTable')
}

function addGradeBook(): void {
  let currentGradeBookSetup: GradeBookSetup = {
    course: readFromHtml("coursegradeBook"),
    activitie: readFromHtml("activitiegradeBook"),
    value: readFromHtml("value"),
    maximunGrade: parseInt(readFromHtml("maximunGrade")),
  };
  gradeBookSetups.push(currentGradeBookSetup);
  console.table(gradeBookSetups);
  initSelect("coursegradeBook", courses);
  initSelect("activitiegradeBook", activities);
  addToTable(gradeBookSetups,'gradeBookTable')
}

function addActivitie(): void {
  let currentActivitie: Activitie = {
    name: readFromHtml("nameActivities"),
  };
  activities.push(currentActivitie);
  console.table(activities);
  addToTable(activities,'activitiesTable')
}

function initSelect(idInput: string, enumerator: any[]): void {
  let select = document.getElementById(idInput) as HTMLSelectElement;
  enumerator.forEach((value) => {
    let option = document.createElement("option");
    option.value = value.name;
    option.text = value.name;
    select.add(option);
  });
}

function eraseData() {
  localStorage.clear();
  console.log(localStorage.length);
}

function addGradeSummary() {
  let currentGradeSummary: GradesSummary = {
    studentGradesSummary: readFromHtml("studentGradesSummary"),
    courseGradesSummary: readFromHtml("courseGradesSummary"),
    teacherGradesSummary: readFromHtml("teacherGradesSummary"),
    finalGrade: parseInt(readFromHtml("finalGrade")),
  };
  gradesSummaries.push(currentGradeSummary);
  console.table(gradesSummaries);
  initSelect("studentGradesSummary", students);
  initSelect("courseGradesSummary", courses);
  initSelect("teacherGradesSummary", teachers);
  addToTable(gradesSummaries,'activitiesSummaryTable')
}

class ReportGrade {
  constructor(public name: string) {}
}

function addToTable(array: any[], tableId: string){
  const table = document.getElementById(tableId) as HTMLTableElement
    const tableRow = table.insertRow(-1)
    const elementValues: any[] = Object.values(array[array.length -1])
    console.log(array[array.length -1])
    elementValues.forEach(value => {
      const tableCell  = tableRow.insertCell(-1)
      tableCell.innerText =   value
    });

}
