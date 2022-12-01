"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
let activities = [];
let gradeBookSetups = [];
var CourseEnum;
(function (CourseEnum) {
    CourseEnum["Programaci\u00F3n"] = "Programaci\u00F3n visual";
    CourseEnum["BaseDatos"] = "Base de datos";
    CourseEnum["Metodologias"] = "Metodolog\u00EDas";
})(CourseEnum || (CourseEnum = {}));
var AreaEnum;
(function (AreaEnum) {
    AreaEnum["DesarrolloSoftware"] = "Desarrrollo de software";
    AreaEnum["Dise\u00F1oModas"] = "Dise\u00F1o de modas";
    AreaEnum["Marketing"] = "Marketing";
})(AreaEnum || (AreaEnum = {}));
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
    initSelect("area", AreaEnum);
}
function addCourse() {
    let currentCourse = {
        numberHours: parseInt(readFromHtml("numberHours")),
        nameCourse: readFromHtml("nameCourse"),
        paralel: readFromHtml("paralel")
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
    initSelect("coursegradeBook", CourseEnum);
}
function addActivitie() {
    let currentActivitie = {
        nameActivities: readFromHtml("nameActivities"),
    };
    activities.push(currentActivitie);
    console.table(activities);
}
function initSelect(idInput, enumerator) {
    let areaTeacher = document.getElementById(idInput);
    let enumArray = Object.values(enumerator);
    enumArray.forEach(value => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        areaTeacher.add(option);
    });
}
function eraseData() {
    localStorage.clear();
    console.log(localStorage.length);
}
