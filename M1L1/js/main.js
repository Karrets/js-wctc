//This is a function--it is reusable code. We connected this function, buttonClick(), to the onclick trigger
function buttonClick() {
    let valueOne = document.getElementById("value1");
    let valueTwo = document.getElementById("value2");
    let result = document.getElementById("result");
    debugger;
    result.value = String(Number(valueOne.value) + Number(valueTwo.value));
}
//# sourceMappingURL=main.js.map