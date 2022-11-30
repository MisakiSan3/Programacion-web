"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function readFromHtml(id) {
    return document.getElementById(id).value;
}
function addStudent() {
    let students = [];
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
    console.log(currentStudent);
}
function addTeacher() {
    let teachers = [];
    let currentTeacher = {
        name: readFromHtml("nameTeacher"),
        identification: parseInt(readFromHtml("identificationTeacher")),
        gmail: readFromHtml("mailTeacher"),
        adress: readFromHtml("adressTeacher"),
        gradeLevel: readFromHtml("gradeLevel"),
        title: readFromHtml("title"),
        class: readFromHtml("class"),
    };
    teachers.push(currentTeacher);
    console.log(currentTeacher);
}
function addCourse() {
    let courses = [];
    let currentCourse = {
        numberStudents: parseInt(readFromHtml("numberStudents")),
        teacher: readFromHtml("teacher"),
        paralel: readFromHtml("paralel")
    };
    courses.push(currentCourse);
    console.log(currentCourse);
}
