class Student {
    constructor(fName, lName, program, enrollDate) {
        this.fName = fName;
        this.lName = lName;
        this.program = program;
        this.enrollDate = enrollDate;
    }
    alertSelf() {
        alert(`${this.fName} ${this.lName} enrolled in ${this.program} on ${this.enrollDate.toDateString()}`);
    }
    buildElement(base) {
        //Create Elements
        let studentDiv = document.createElement("div");
        let nameElem = document.createElement('p');
        let programHeaderElem = document.createElement('p');
        let programElem = document.createElement('p');
        let enrollDateHeaderElem = document.createElement('p');
        let enrollDateElem = document.createElement('p');
        //End
        //Create Connections
        studentDiv.appendChild(nameElem);
        studentDiv.appendChild(document.createElement('br'));
        studentDiv.appendChild(programHeaderElem);
        studentDiv.appendChild(programElem);
        studentDiv.appendChild(document.createElement('br'));
        studentDiv.appendChild(enrollDateHeaderElem);
        studentDiv.appendChild(enrollDateElem);
        //End
        //Add Styling
        studentDiv.classList.add('student');
        nameElem.classList.add('studentName');
        programHeaderElem.classList.add('studentProgramHeader');
        programElem.classList.add('studentProgram');
        enrollDateHeaderElem.classList.add('studentEnrollDateHeader');
        enrollDateElem.classList.add('studentEnrollDate');
        //End
        //Add Content
        nameElem.innerText = `${this.fName} ${this.lName}`;
        programHeaderElem.innerText = 'Program:';
        programElem.innerText = this.program;
        enrollDateHeaderElem.innerText = 'Enrolled:';
        enrollDateElem.innerText = this.enrollDate.toDateString();
        //End
        //Add Events
        let instance = this;
        studentDiv.onclick = function () {
            instance.alertSelf();
        };
        //END
        //Attach to DOM
        base.appendChild(studentDiv);
        //End
    }
}
//# sourceMappingURL=student.js.map