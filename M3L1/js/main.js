//AMPM
function AMPM(element) {
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
function LogicalAnd() {
    const output = document.getElementById('logicalAndResult');
    let valueOne = document.getElementById('logicalAndValueOneTrue').checked;
    let valueTwo = document.getElementById('logicalAndValueTwoTrue').checked;
    output.textContent = `${valueOne} && ${valueTwo} = ${valueOne && valueTwo}`;
}
//END Logical AND
//# sourceMappingURL=main.js.map