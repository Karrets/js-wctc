//DOM Objects
const secondField = document.getElementById('second');
const minuteField = document.getElementById('minute');
const hourField = document.getElementById('hour');
const dayField = document.getElementById('day');
const monthField = document.getElementById('month');
const yearField = document.getElementById('year');
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
//# sourceMappingURL=date.js.map