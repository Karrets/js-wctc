//Start DOM Objects
const valueOneInput = document.getElementById('valueOne') as HTMLInputElement;
const valueTwoInput = document.getElementById('valueTwo') as HTMLInputElement;

const sumField = document.getElementById('sum') as HTMLInputElement;
const differenceField = document.getElementById('difference') as HTMLInputElement;
const productField = document.getElementById('product') as HTMLInputElement;
const quotientField = document.getElementById('quotient') as HTMLInputElement;
const remainderField = document.getElementById('remainder') as HTMLInputElement;
const clicksField = document.getElementById('numClicks') as HTMLInputElement;
//End

let clickCounter = 0;
let valueLog: string[] = [];

function calculate(): void {
    const valueOne = Number(valueOneInput.value)
    const valueTwo = Number(valueTwoInput.value)

    sumField.value = String(valueOne + valueTwo);
    differenceField.value = String(valueOne - valueTwo);
    productField.value = String(valueOne * valueTwo);
    quotientField.value = String(valueOne / valueTwo);
    remainderField.value = String(valueOne % valueTwo);
    clicksField.value = String(++clickCounter);

    valueLog.push(`Numbers: ${valueOne}, ${valueTwo}`)
}

function logValues(): void {
    clicksField.value = String(++clickCounter);
    console.log(valueLog)
}