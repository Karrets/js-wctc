let loopPracticeOne = document.getElementsByClassName('loopMePracticeOne');

for(let i = 0; i < loopPracticeOne.length; i++) {
    console.log(loopPracticeOne[i]);
}

let loopPracticeTwo = document.getElementsByClassName('loopMePracticeTwo');

for(let i = 0; i < loopPracticeTwo.length; i++) {
    loopPracticeTwo[i].className += ' deactivate';
    // loopPracticeTwo[i].classList.add('deactivate');
}
