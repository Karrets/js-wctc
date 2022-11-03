//OddEven
function oddEven() {
    const input = document.getElementById('OddEvenInput');
    if (input.valueAsNumber % 2 == 0) {
        input.style.background = 'lightgreen';
    }
    else {
        input.style.background = 'pink';
    }
}
//End OddEven
//Confirm
function widgetConfirm() {
    const output = document.getElementById('confirmResult');
    if (confirm('Confirm or Deny.')) {
        output.textContent = 'Confirmed :)';
    }
    else {
        output.textContent = 'Denied :(';
    }
}
//End
//Text Truthy?
function textTruthy() {
    const input = document.getElementById('textTruthyInput');
    const output = document.getElementById('textTruthyResult');
    if (input.value) {
        output.textContent = 'This is truthy (true)';
    }
    else {
        output.textContent = 'This is falsy (false)';
    }
}
//End
//Numeric truthy?
function numericTruthy() {
    const input = document.getElementById('numericTruthyInput');
    const output = document.getElementById('numericTruthyResult');
    if (input.valueAsNumber) {
        output.textContent = 'This is truthy (true)';
    }
    else {
        output.textContent = 'This is falsy (false)';
    }
}
//End
//AMPM
function widgetAMPM(element) {
    let current = new Date();
    if (current.getHours() >= 12) {
        element.textContent = 'Currently PM';
    }
    else {
        element.textContent = 'Currently AM';
    }
}
//END AMPM
//Logical AND
function logicalAnd() {
    const output = document.getElementById('logicalAndResult');
    let valueOne = document.getElementById('logicalAndValueOneTrue').checked;
    let valueTwo = document.getElementById('logicalAndValueTwoTrue').checked;
    output.textContent = `${valueOne} && ${valueTwo} = ${valueOne && valueTwo}`;
}
//END Logical AND
//Logical OR
function logicalOr() {
    const output = document.getElementById('logicalOrResult');
    let valueOne = document.getElementById('logicalOrValueOneTrue').checked;
    let valueTwo = document.getElementById('logicalOrValueTwoTrue').checked;
    output.textContent = `${valueOne} || ${valueTwo} = ${valueOne || valueTwo}`;
}
//END Logical OR
//Switch
function widgetSwitch() {
    const inputText = document.getElementById('switchText');
    const outputType = document.getElementById('switchOutput');
    const outputTextP = document.getElementById('switchResult');
    outputTextP.textContent = '';
    switch (outputType.value) {
        case '_alert':
            alert(inputText.value);
            break;
        case '_clog':
            console.log(inputText.value);
            break;
        case '_text':
            outputTextP.textContent = inputText.value;
            break;
    }
}
//End Switch
//# sourceMappingURL=main.js.map