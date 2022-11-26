import { Student } from "./entities/student";

let students: Student[] = [];

function addStudent():void{
    let currentStudent : Student = {
        name: (<HTMLInputElement>document.getElementById('name')).value,
        identification: parseInt((<HTMLInputElement>document.getElementById('identification')).value),
        gmail: (<HTMLInputElement>document.getElementById('mail')).value,
        adress: (<HTMLInputElement>document.getElementById('adress')).value,
        enrollment: parseInt((<HTMLInputElement>document.getElementById('enrollment')).value),
        carrer: (<HTMLInputElement>document.getElementById('carrer')).value,
        carrerLevel: parseInt((<HTMLInputElement>document.getElementById('carrerLevel')).value),
    }
    students.push(currentStudent);
    console.log('sep')
};