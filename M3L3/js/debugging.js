//Problem One
function debugTestOne() {
    //Getting the result element and clearing out the text content right away
    let debugTestOneResultElement = document.getElementById('debugResultOne');
    debugTestOneResultElement.textContent = '';

    //getting the input value
    let debugLoopOneInputValue = document.getElementById('debugTestOneInput');

    //updating the result to be the input value
    for(let i = 1; i <= debugLoopOneInputValue.value; i++)
    {
        debugTestOneResultElement.textContent += i + ' ';
    }
}




//Problem Two
function debugTestTwo() {
    //Getting the result element and clearing out the text content right away
    let debugTestTwoResultElement = document.getElementById('debugResultTwo');
    debugTestTwoResultElement.textContent = '';

    //getting the input value
    let debugLoopTwoInputValue = Number(document.getElementById('debugTestTwoInput').value);

    //updating the result to be the input value
    for(let i = 1; i <= debugLoopTwoInputValue; i++)
    {
        debugTestTwoResultElement.textContent += i + ' ';
    }
}




//Problem Three
function debugTestThree() {
    //getting the input value
    let debugLoopThreeInputValue = document.getElementById('debugTestThreeInput').value;
    alert(debugLoopThreeInputValue);

}



//Problem Four
function debugTestFour() {
    //Get the result element and clear out the text content right away 
    let debugLoopFourResultElement = document.getElementById('debugResultFour');
    let debugLoopFourInputOne = document.getElementById('debugTestFourInputOne');
    let debugLoopFourInputTwo = document.getElementById('debugTestFourInputTwo');
    debugLoopFourResultElement.textContent = '';

    //Display the results of the inputs to the result element
    debugLoopFourResultElement.textContent = debugTestFourInputOne.valueAsNumber + debugTestFourInputTwo.valueAsNumber;
}


//Problem Four
function debugTestFive() {
    //Get the result element and clear out the text content right away 
    let debugLoopFiveResultElement = document.getElementById('debugResultFive');
    debugLoopFiveResultElement.textContent = '';

    //Get the input values 
    let debugTestFiveInputValue = document.getElementById('debugTestFiveInput').valueAsNumber;

    debugger;
    //Loop by the increment and output the results
    for(let currentNumber = 1; currentNumber <= 50; currentNumber += debugTestFiveInputValue)
    {
        debugLoopFiveResultElement.textContent += currentNumber + ' ';
    }
}

//Object constructor for creating boat objects
function Boat(name, captain, hullLength) {
    this.name = name;
    this.captain = captain;
    this.hullLength = hullLength;
    this.createParagraphOutput = function() {
        let boatParagraph = document.createElement('p');
        boatParagraph.innerText = 'Boat: ' + this.name + ' | Captained by: ' + this.captain + ' | Length: ' + this.hullLength; 
        return boatParagraph;
    }
}

//An array of Boat objects for pirate ships
let pirateShips = [
    new Boat("Queen Anne's Revenge", 'Edward Teach', 103),
    new Boat('Whydah Gally', 'Samuel Bellamy', 110),
    new Boat('Adventure Galley', 'William Kidd', 124),
    new Boat('Golden Hind', 'Francis Drake', 120)
]

//An array of Boat objects for cruise ships
let cruiseShips = [
    new Boat('Celebrity Beyond', 'Kate McCue', 1071),
    new Boat('Oasis of the Seas', 'Thore Thorolvsen', 1181),
    new Boat('Norwegian Encore', 'Niklas Persson', 1094),
    new Boat('Royal Princess', 'Tony Draper', 1083)
]


//Problem Six
function debugTestSix(boatLength) {
    debugger;

    //Get the result element and empty out the HTML because we add elements to it
    let debugLoopSixResultElement = document.getElementById('debugResultSix');
    debugLoopSixResultElement.innerHTML = '';


    //Loop through the pirate ships
    for(let currentPirateShipIndex = 0; currentPirateShipIndex < pirateShips.length; currentPirateShipIndex++) {
        if(pirateShips[currentPirateShipIndex].hullLength > boatLength)
        {
            debugLoopSixResultElement.appendChild(pirateShips[currentPirateShipIndex].createParagraphOutput());
        }
    }

    //Loop through the cruise ships
    for(let currentCruiseShipIndex = 0; currentCruiseShipIndex < cruiseShips.length; currentCruiseShipIndex++) {
        if(cruiseShips[currentCruiseShipIndex].hullLength > boatLength) 
        {
            debugLoopSixResultElement.appendChild(cruiseShips[currentCruiseShipIndex].createParagraphOutput());
        }
    }
}
