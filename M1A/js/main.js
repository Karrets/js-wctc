//Formatter thing?
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
//Credit: https://stackoverflow.com/a/16233919
//Begin DOM-items
const principal = document.getElementById('principal');
const interestRate = document.getElementById('interestRate');
const loanLength = document.getElementById('loanLength');
const payPeriod = document.getElementById('payPeriod');
const result = document.getElementById('result');
const payPeriodResult = document.getElementById('payPeriodResult');
//End
//Begin Methods
function calculatePayment() {
    let _principal = Number(principal.value);
    let _payPeriod = Number(payPeriod.value);
    let _payments = Number(loanLength.value) * _payPeriod;
    let _interestRate = (Number(interestRate.value) / 100) / _payPeriod; //Convert to period based decimal.
    let value = _principal * ((_interestRate * (Math.pow((1 + _interestRate), _payments)))
        /
            ((Math.pow((1 + _interestRate), _payments)) - 1));
    result.innerText = formatter.format(value);
    payPeriodResult.innerText = `(${periodsToText(_payPeriod)})`;
}
function periodsToText(num) {
    switch (num) {
        case 52:
            return "due weekly";
        case 26:
            return "due alternating weeks";
        case 12:
            return "due monthly";
        case 6:
            return "due alternating months";
    }
}
//End
//# sourceMappingURL=main.js.map