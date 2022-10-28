//DOM Elements
const petForm = document.getElementById('petForm') as HTMLFormElement;
const petNameInput = document.getElementById('petName') as HTMLInputElement;
const petBirthdayInput = document.getElementById('petBirthday') as HTMLInputElement;
const petHolder = document.getElementById('petHolder') as HTMLDivElement;
//End DOM Elements
//Vars
let pets: Array<Pet> = [];
//End Vars

function addPet() {
    let petName = petNameInput.value;
    let petBirthday = petBirthdayInput.valueAsDate;
    
    let newPet = new Pet(petName, petBirthday) as Pet;
    pets.push(newPet);

    //Add elements
    let petElement = document.createElement('div') as HTMLDivElement;
    let petNameElement = document.createElement('h3') as HTMLHeadingElement;
    let petBirthdayElement = document.createElement('p') as HTMLParagraphElement;

    //Style and ID rules
    petElement.classList.add('pet');
    petNameElement.classList.add('petName')
    petBirthdayElement.classList.add('petBirthday');

    //add click action
    petElement.onclick = function() {
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