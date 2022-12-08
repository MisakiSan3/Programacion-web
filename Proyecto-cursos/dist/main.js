"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
let activities = [];
let gradeBookSetups = [];
let gradesSummaries = [];
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
    console.table(students);
}
function addTeacher() {
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
    initSelect("area", areas);
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
        value: readFromHtml("value"),
        maximunGrade: parseInt(readFromHtml("maximunGrade")),
    };
    gradeBookSetups.push(currentGradeBookSetup);
    console.table(gradeBookSetups);
    initSelect("coursegradeBook", courses);
    initSelect("activitiegradeBook", activities);
}
function addActivitie() {
    let currentActivitie = {
        name: readFromHtml("nameActivities"),
    };
    activities.push(currentActivitie);
    console.table(activities);
}
function initSelect(idInput, enumerator) {
    let select = document.getElementById(idInput);
    enumerator.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
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
    console.table(gradesSummaries);
    initSelect("studentGradesSummary", students);
    initSelect("courseGradesSummary", courses);
    initSelect("teacherGradesSummary", teachers);
}
class ReportGrade {
    constructor(name) {
        this.name = name;
    }
}
