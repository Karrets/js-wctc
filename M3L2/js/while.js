//DOM Elements
let whileLoopResultOne = document.getElementById('whileLoopResultOne');
let whileLoopResultTwo = document.getElementById('whileLoopResultTwo');

let whileLoopTwoCount = document.getElementById('whileLoopTwoCount');
//End
//Test One
function whileTestOne() {
    let i = 0;
    while(confirm('Continue Looping?')) {
        whileLoopResultOne.textContent += i++ + ' ';
    }
}
//End
//Test Two
function whileTestTwo() {
    let i = 0;

    while(i <= whileLoopTwoCount.valueAsNumber) {
        whileLoopResultTwo.textContent += i++ + ' '
    }
}
//End