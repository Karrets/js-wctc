//AMPM
function AMPM(element: HTMLElement) {
    let current = new Date();

    if(current.getHours() >= 12) {
        element.textContent = 'Currently PM';
    } else {
        element.textContent = 'Currently AM';
    }
}
//END AMPM
//Logical AND
function LogicalAnd() {
    const output = document.getElementById('logicalAndResult') as HTMLParagraphElement;
    let valueOne: boolean = (document.getElementById('logicalAndValueOneTrue') as HTMLInputElement).checked;
    let valueTwo: boolean = (document.getElementById('logicalAndValueTwoTrue') as HTMLInputElement).checked;

    output.textContent = `${valueOne} && ${valueTwo} = ${valueOne && valueTwo}`;
}
//END Logical AND