//DOM Objects
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
//END DOM Objects
//Event Listeners
lengthInput.addEventListener('change', runAreaCalc);
widthInput.addEventListener('change', runAreaCalc);
//End Event Listeners
function getArea(width, height) {
    return width * height;
}
function runAreaCalc() {
    resultArea.textContent = String(getArea(lengthInput.valueAsNumber, widthInput.valueAsNumber));
}
runAreaCalc();
//# sourceMappingURL=area.js.map