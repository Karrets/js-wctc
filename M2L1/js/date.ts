//DOM Objects
const secondField = document.getElementById('second') as HTMLSpanElement;
const minuteField = document.getElementById('minute') as HTMLSpanElement;
const hourField = document.getElementById('hour') as HTMLSpanElement;
const dayField = document.getElementById('day') as HTMLSpanElement;
const monthField = document.getElementById('month') as HTMLSpanElement;
const yearField = document.getElementById('year') as HTMLSpanElement;
//End DOM Objects

function updateDate() {
    const newDate = new Date();

    secondField.innerText = String(newDate.getSeconds());
    minuteField.innerText = String(newDate.getMinutes());
    hourField.innerText = String(newDate.getHours());
    dayField.innerText = String(newDate.getDate());
    monthField.innerText = String(newDate.getMonth() + 1);
    yearField.innerText = String(newDate.getFullYear());
}