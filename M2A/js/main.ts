//DOM Objects
const studentForm = document.getElementById('studentForm') as HTMLFormElement;
const studentFNameInput = document.getElementById('studentFName') as HTMLInputElement;
const studentLNameInput = document.getElementById('studentLName') as HTMLInputElement;
const studentProgramInput = document.getElementById('studentProgram') as HTMLSelectElement;
const studentEnrollDateInput = document.getElementById('studentEnrollDate') as HTMLInputElement;
const studentViewer = document.getElementById('studentViewer') as HTMLDivElement;
//End DOM
//Globals
let students: Array<Student> = [];
//End Globals

function formSubmit() {
    let fName = studentFNameInput.value;
    let lName = studentLNameInput.value;
    let program = studentProgramInput.value;
    let enrollDate = studentEnrollDateInput.valueAsDate;
    
    let newStudent = new Student(fName, lName, program, enrollDate);
    newStudent.buildElement(studentViewer);

    students.push(newStudent);
    studentForm.reset();
}