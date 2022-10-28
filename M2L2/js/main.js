//DOM Elements
const petForm = document.getElementById('petForm');
const petNameInput = document.getElementById('petName');
const petBirthdayInput = document.getElementById('petBirthday');
const petHolder = document.getElementById('petHolder');
//End DOM Elements
//Vars
let pets = [];
//End Vars
function addPet() {
    let petName = petNameInput.value;
    let petBirthday = petBirthdayInput.valueAsDate;
    let newPet = new Pet(petName, petBirthday);
    pets.push(newPet);
    //Add elements
    let petElement = document.createElement('div');
    let petNameElement = document.createElement('h3');
    let petBirthdayElement = document.createElement('p');
    //Style and ID rules
    petElement.classList.add('pet');
    petNameElement.classList.add('petName');
    petBirthdayElement.classList.add('petBirthday');
    //add click action
    petElement.onclick = function () {
        newPet.delete(petElement);
    };
    //Add content
    petNameElement.textContent = newPet.name;
    petBirthdayElement.textContent = newPet.birthday.toDateString();
    //Arrange our elements
    petElement.appendChild(petNameElement);
    petElement.appendChild(petBirthdayElement);
    petHolder.appendChild(petElement);
    console.log(pets);
    petForm.reset();
}
//# sourceMappingURL=main.js.map