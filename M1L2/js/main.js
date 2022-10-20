//Start DOM Objects
const valueOneInput = document.getElementById('valueOne');
const valueTwoInput = document.getElementById('valueTwo');
const sumField = document.getElementById('sum');
const differenceField = document.getElementById('difference');
const productField = document.getElementById('product');
const quotientField = document.getElementById('quotient');
const remainderField = document.getElementById('remainder');
const clicksField = document.getElementById('numClicks');
//End
let clickCounter = 0;
let valueLog = [];
function calculate() {
    const valueOne = Number(valueOneInput.value);
    const valueTwo = Number(valueTwoInput.value);
    sumField.value = String(valueOne + valueTwo);
    differenceField.value = String(valueOne - valueTwo);
    productField.value = String(valueOne * valueTwo);
    quotientField.value = String(valueOne / valueTwo);
    remainderField.value = String(valueOne % valueTwo);
    clicksField.value = String(++clickCounter);
    valueLog.push(`Numbers: ${valueOne}, ${valueTwo}`);
}
function logValues() {
    clicksField.value = String(++clickCounter);
    console.log(valueLog);
}
//# sourceMappingURL=main.js.map