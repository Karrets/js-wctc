//DOM Elements
let forLoopResultOne = document.getElementById('forLoopResultOne');
let forLoopResultTwo = document.getElementById('forLoopResultTwo');
let forLoopResultThree = document.getElementById('forLoopResultThree');
let forLoopResultFour = document.getElementById('forLoopResultFour');
let forLoopResultFive = document.getElementById('forLoopResultFive');
let forLoopResultSix = document.getElementById('forLoopResultSix');

let forLoopTwoInput = document.getElementById('forLoopTwoInput');

let forLoopThreeBaseInput = document.getElementById('forLoopThreeBaseInput');
let forLoopThreeTopInput = document.getElementById('forLoopThreeTopInput');

let forLoopFourBaseInput = document.getElementById('forLoopFourBaseInput');
let forLoopFourTopInput = document.getElementById('forLoopFourTopInput');
let forLoopFourIncrementInput = document.getElementById('forLoopFourIncrementInput');

let forLoopSixAge = document.getElementById('forLoopSixAge');
//End
//Objects + Vars
//Objects and Array used for testing:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let people = [
    new Person('Cindy', 14),
    new Person('John', 24),
    new Person('Shandy', 34),
    new Person('Raul', 44),
    new Person('Hannes', 54),
    new Person('Sonam', 64)
]

//the length property can be used to get the number of items in an array
// console.log(people.length);
//End
//Test One
for (let i = 0; i < 10; i++) {
    forLoopResultOne.innerHTML = '';

    forLoopResultOne.textContent += i + ' ';
}
//End
//Test Two
function testTwo() {
    forLoopResultTwo.innerHTML = '';

    for (let i = 0; i < forLoopTwoInput.valueAsNumber; i++) {
        forLoopResultTwo.textContent += i + ' ';
    }
}

//End
//Test Three 
function testThree() {
    forLoopResultThree.innerHTML = '';

    for (let i = forLoopThreeBaseInput.valueAsNumber; i < forLoopThreeTopInput.valueAsNumber; i++) {
        forLoopResultThree.textContent += i + ' ';
    }
}

//End
// Test Four
function testFour() {
    forLoopResultFour.innerHTML = '';

    for (let i = forLoopFourBaseInput.valueAsNumber;
         i < forLoopFourTopInput.valueAsNumber;
         i += forLoopFourIncrementInput.valueAsNumber) {

        forLoopResultFour.textContent += i + ' ';
    }
}

//End
//Test Five
//you can clear out an element by doing: element.innerHTML = '';
function testFive() {
    forLoopResultFive.innerHTML = '';

    for(let i = 0; i < people.length; i++) {
        let newPerson = document.createElement('p')
        newPerson.textContent = `Person ${i + 1}: ${people[i].name}, ${people[i].age}`
        forLoopResultFive.appendChild(newPerson);
    }
}

//End
//Test Six 
//you can clear out an element by doing: element.innerHTML = '';
function testSix() {
    forLoopResultSix.innerHTML = '';

    for(let i = 0; i < people.length; i++) {
        if(people[i].age > forLoopSixAge.valueAsNumber) {
            let newPerson = document.createElement('p')
            newPerson.textContent = `Person ${i + 1}: ${people[i].name}, ${people[i].age}`
            forLoopResultSix.appendChild(newPerson);
        }
    }
}

//End