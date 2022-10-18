//This is a function--it is reusable code. We connected this function, buttonClick(), to the onclick trigger
function buttonClick() {
    let valueOne = document.getElementById("value1") as HTMLInputElement;
    let valueTwo = document.getElementById("value2") as HTMLInputElement;
    let result = document.getElementById("result") as HTMLInputElement;
    debugger;
    result.value = String(Number(valueOne.value) + Number(valueTwo.value));
}
