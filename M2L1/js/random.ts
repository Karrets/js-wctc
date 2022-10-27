//DOM Objects
const capInput = document.getElementById('cap') as HTMLInputElement;
const capObserver = document.getElementById('maxCap') as HTMLSpanElement;
//END DOM Objects
//Event Listeners
capInput.addEventListener('change', maxChange);
//End Event Listeners
//Vars
let cap;
//End Vars

function maxChange():void {
    cap = capInput.valueAsNumber;
    capObserver.textContent = String(cap);
    genRandom();
}

function genRandom():void {
    resultArea.textContent = String(Math.floor(Math.random() * cap + 1));
}

maxChange();