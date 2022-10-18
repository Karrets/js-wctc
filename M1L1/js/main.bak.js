//Setting up control variables to test scope.
var a = 1;
let b = 2;
const c = 3;
{ //Reassigning control variables, within a different scope.
    var a = 4; //Global scope
    let b = 5; //Block scope
    const c = 6; //Block scope
}
// var a = 7;
// Valid
// var > let, const
// Invalid
// let > var, const
// Invalid
// const > var, let
// Invalid
//a = '15'
// Unfortunately valid (in js)
b = 11;
// Valid
// c = 12;
// Invalid, constants may not be reassigned.
//Logging control variables.
console.log(a);
console.log(b);
console.log(c);
console.log(a + b + c);
//# sourceMappingURL=main.bak.js.map