//DOM Objects
const studentForm = document.getElementById('studentForm');
const studentFNameInput = document.getElementById('studentFName');
const studentLNameInput = document.getElementById('studentLName');
const studentProgramInput = document.getElementById('studentProgram');
const studentEnrollDateInput = document.getElementById('studentEnrollDate');
const studentViewer = document.getElementById('studentViewer');
//End DOM
//Globals
let students = [];
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
//# sourceMappingURL=main.js.map