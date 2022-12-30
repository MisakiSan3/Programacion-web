"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
let grades = [];
let activities = [];
let gradeBookSetups = [];
let gradesSummaries = [];
let reports = [];
let areas = [
    { name: "Desarrollo de software" },
    { name: "Diseño de modas" },
    { name: "Marketing" },
];
function readFromHtml(id) {
    return document.getElementById(id).value;
}
function addStudent() {
    let currentStudent = {
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
function addTeacher() {
    initSelect("area", areas);
    let currentTeacher = {
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
function addCourse() {
    let currentCourse = {
        numberHours: parseInt(readFromHtml("numberHours")),
        name: readFromHtml("nameCourse"),
        paralel: readFromHtml("paralel"),
    };
    courses.push(currentCourse);
    console.table(courses);
}
function addGradeBook() {
    let currentGradeBookSetup = {
        course: readFromHtml("coursegradeBook"),
        activitie: readFromHtml("activitiegradeBook"),
        name: readFromHtml("value"),
        maximunGrade: parseInt(readFromHtml("maximunGrade")),
    };
    gradeBookSetups.push(currentGradeBookSetup);
    initSelect("coursegradeBook", courses);
    initSelect("activitiegradeBook", activities);
}
function addActivitie() {
    let currentActivitie = {
        name: readFromHtml("nameActivities"),
    };
    activities.push(currentActivitie);
}
function initSelect(idInput, enumerator) {
    let select = document.getElementById(idInput);
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
    let currentGradeSummary = {
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
    let currentGrade = {
        student: readFromHtml("studentGrade"),
        gradesBook: readFromHtml("gradesBook"),
        grade: parseInt(readFromHtml("grade")),
    };
    generateReport(currentGrade);
    grades.push(currentGrade);
}
function generateReport(grade) {
    let currentStudent;
    let currentGradeBook;
    let currentCourse;
    let currentGradeSummary;
    students.forEach(student => {
        if (grade.student === student.name) {
            currentStudent = student;
        }
    });
    gradeBookSetups.forEach(gradeBook => {
        if (grade.gradesBook === gradeBook.name) {
            currentGradeBook = gradeBook;
        }
    });
    courses.forEach(course => {
        if (course.name === currentGradeBook.course) {
            currentCourse = course;
        }
    });
    gradesSummaries.forEach(gradeSummary => {
        if (currentStudent.name === gradeSummary.studentGradesSummary && currentGradeBook.course === gradeSummary.courseGradesSummary) {
            currentGradeSummary = gradeSummary;
        }
    });
    let currentReport = {
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
    };
    reports.push(currentReport);
    console.table(reports);
    addToTable(reports, 'reportTable');
}
function addToTable(array, tableId) {
    let i = 0;
    const table = document.getElementById(tableId);
    const tableRow = table.insertRow(-1);
    const elementValues = Object.values(array[array.length - 1]);
    console.log(array[array.length - 1]);
    elementValues.forEach(value => {
        if (i < elementValues.length - 3) {
            const tableCell = tableRow.insertCell(-1);
            tableCell.innerText = value;
        }
        i++;
    });
}
