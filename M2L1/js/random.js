//DOM Objects
const capInput = document.getElementById('cap');
const capObserver = document.getElementById('maxCap');
//END DOM Objects
//Event Listeners
capInput.addEventListener('change', maxChange);
//End Event Listeners
//Vars
let cap;
//End Vars
function maxChange() {
    cap = capInput.valueAsNumber;
    capObserver.textContent = String(cap);
    genRandom();
}
function genRandom() {
    resultArea.textContent = String(Math.floor(Math.random() * cap + 1));
}
maxChange();
//# sourceMappingURL=random.js.map