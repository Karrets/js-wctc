//DOM Objects
const lengthInput = document.getElementById('length') as HTMLInputElement;
const widthInput = document.getElementById('width') as HTMLInputElement;
//END DOM Objects
//Event Listeners
lengthInput.addEventListener('change', runAreaCalc);
widthInput.addEventListener('change', runAreaCalc);
//End Event Listeners

function getArea(width: number, height: number):number {
    return width * height;
}

function runAreaCalc() {
    resultArea.textContent = String(getArea(lengthInput.valueAsNumber, widthInput.valueAsNumber))
}

runAreaCalc();