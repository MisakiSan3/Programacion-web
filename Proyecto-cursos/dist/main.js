"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
function addStudent() {
    let currentStudent = {
        name: document.getElementById('name').value,
        identification: parseInt(document.getElementById('identification').value),
        gmail: document.getElementById('mail').value,
        adress: document.getElementById('adress').value,
        enrollment: parseInt(document.getElementById('enrollment').value),
        carrer: document.getElementById('carrer').value,
        carrerLevel: parseInt(document.getElementById('carrerLevel').value),
    };
    students.push(currentStudent);
    console.log('sep');
}
;
