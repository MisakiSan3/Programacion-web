import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Course } from "./entities/course";
import { Activitie } from "./entities/activities";
import { GradeBookSetup } from "./entities/gradeBookSetup";
import { GradesSummary } from "./entities/gradesSummary";
import { Grade } from "./entities/grade.entity";
import { ReportGradeDTO } from "./entities/generateReportDTO";

let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];
let grades: Grade[] = [];
let activities: Activitie[] = [];
let gradeBookSetups: GradeBookSetup[] = [];
let gradesSummaries: GradesSummary[] = [];
let reports: ReportGradeDTO[] = [];
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
}

function addCourse(): void {
  let currentCourse: Course = {
    numberHours: parseInt(readFromHtml("numberHours")),
    name: readFromHtml("nameCourse"),
    paralel: readFromHtml("paralel"),
  };
  courses.push(currentCourse)
  console.table(courses);
}

function addGradeBook(): void {
  let currentGradeBookSetup: GradeBookSetup = {
    course: readFromHtml("coursegradeBook"),
    activitie: readFromHtml("activitiegradeBook"),
    name: readFromHtml("value"),
    maximunGrade: parseInt(readFromHtml("maximunGrade")),
  };
  gradeBookSetups.push(currentGradeBookSetup);
  initSelect("coursegradeBook", courses);
  initSelect("activitiegradeBook", activities);
}

function addActivitie(): void {
  let currentActivitie: Activitie = {
    name: readFromHtml("nameActivities"),
  };
  activities.push(currentActivitie);
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
  initSelect("studentGradesSummary", students);
  initSelect("courseGradesSummary", courses);
  initSelect("teacherGradesSummary", teachers);
}

function addGrade() {
  initSelect("gradesBook", gradeBookSetups);
  initSelect("studentGrade", students);
  let currentGrade: Grade = {
    student: readFromHtml("studentGrade"),
    gradesBook: readFromHtml("gradesBook"),
    grade: parseInt(readFromHtml("grade")),
  };
  generateReport(currentGrade)
  grades.push(currentGrade);
 
}
function generateReport(grade: Grade){
  let currentStudent: any;
  let currentGradeBook: any;
  let currentCourse: any;
  let currentGradeSummary: any;
  students.forEach(student => {
    if (grade.student === student.name) {
      currentStudent = student
    }
  });
  gradeBookSetups.forEach(gradeBook => {
    if (grade.gradesBook === gradeBook.name) {
      currentGradeBook = gradeBook
    }
  });
  courses.forEach(course => {
    if (course.name === currentGradeBook.course) {
      currentCourse = course
    }
  });
  gradesSummaries.forEach(gradeSummary => {
    if (currentStudent.name === gradeSummary.studentGradesSummary && currentGradeBook.course === gradeSummary.courseGradesSummary) {
      currentGradeSummary = gradeSummary
    }
  });
  let currentReport: ReportGradeDTO = {
    enrollment: currentStudent.enrollment,
    name: currentStudent.name,
    identification: currentStudent.identification,
    gmail: currentStudent.gmail,
    adress: currentStudent.adress,
    carrer: currentStudent.carrer,
    paralel: currentCourse.paralel,
    carrerLevel: currentStudent.carrerLevel,
    course: currentGradeBook.course,
    teacher: currentGradeSummary.teacherGradesSummary,
    numberHours: currentCourse.numberHours,
    activitie: currentGradeBook.activitie,
    finalGrade: currentGradeSummary.finalGrade,
    maximunGrade: currentGradeBook.maximunGrade,
    courseGradesSummary: currentGradeBook.course,
    studentGradesSummary: grade.student,
    teacherGradesSummary: currentGradeSummary.teacherGradesSummary,

  }
  reports.push(currentReport);
  console.table(reports)
  addToTable(reports,'reportTable')
}



function addToTable(array: any[], tableId: string){
  let i: number = 0;
  const table = document.getElementById(tableId) as HTMLTableElement
    const tableRow = table.insertRow(-1)
    const elementValues: any[] = Object.values(array[array.length -1])
    console.log(array[array.length -1])
    elementValues.forEach(value => {
      if (i < elementValues.length -3 ) {
        const tableCell  = tableRow.insertCell(-1)
        tableCell.innerText =   value
      }
      i++
    });

}
