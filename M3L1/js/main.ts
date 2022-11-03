//OddEven
function oddEven() {
    const input = document.getElementById('OddEvenInput') as HTMLInputElement;

    if(input.valueAsNumber % 2 == 0) {
        input.style.background = 'lightgreen';
    } else {
        input.style.background = 'pink';
    }
}
//End OddEven
//Confirm
function widgetConfirm() {
    const output = document.getElementById('confirmResult') as HTMLParagraphElement;

    if(confirm('Confirm or Deny.')) {
        output.textContent = 'Confirmed :)';
    } else {
        output.textContent = 'Denied :(';
    }
}
//End
//Text Truthy?
function textTruthy() {
    const input = document.getElementById('textTruthyInput') as HTMLInputElement;
    const output = document.getElementById('textTruthyResult') as HTMLParagraphElement;

    if(input.value) {
        output.textContent = 'This is truthy (true)';
    } else {
        output.textContent = 'This is falsy (false)';
    }
}
//End
//Numeric truthy?
function numericTruthy() {
    const input = document.getElementById('numericTruthyInput') as HTMLInputElement;
    const output = document.getElementById('numericTruthyResult') as HTMLParagraphElement;

    if(input.valueAsNumber) {
        output.textContent = 'This is truthy (true)';
    } else {
        output.textContent = 'This is falsy (false)';
    }
}
//End
//AMPM
function widgetAMPM(element: HTMLElement) {
    let current = new Date();

    if(current.getHours() >= 12) {
        element.textContent = 'Currently PM';
    } else {
        element.textContent = 'Currently AM';
    }
}
//END AMPM
//Logical AND
function logicalAnd() {
    const output = document.getElementById('logicalAndResult') as HTMLParagraphElement;
    let valueOne: boolean = (document.getElementById('logicalAndValueOneTrue') as HTMLInputElement).checked;
    let valueTwo: boolean = (document.getElementById('logicalAndValueTwoTrue') as HTMLInputElement).checked;

    output.textContent = `${valueOne} && ${valueTwo} = ${valueOne && valueTwo}`;
}
//END Logical AND
//Logical OR
function logicalOr() {
    const output = document.getElementById('logicalOrResult') as HTMLParagraphElement;
    let valueOne: boolean = (document.getElementById('logicalOrValueOneTrue') as HTMLInputElement).checked;
    let valueTwo: boolean = (document.getElementById('logicalOrValueTwoTrue') as HTMLInputElement).checked;

    output.textContent = `${valueOne} || ${valueTwo} = ${valueOne || valueTwo}`;
}
//END Logical OR
//Switch
function widgetSwitch() {
    const inputText = document.getElementById('switchText') as HTMLInputElement;
    const outputType = document.getElementById('switchOutput') as HTMLSelectElement;
    const outputTextP = document.getElementById('switchResult') as HTMLParagraphElement;

    outputTextP.textContent = '';

    switch(outputType.value) {
        case '_alert':
            alert(inputText.value)
            break;
        case '_clog':
            console.log(inputText.value)
            break;
        case '_text':
            outputTextP.textContent = inputText.value;
            break;
    }
}
//End Switch