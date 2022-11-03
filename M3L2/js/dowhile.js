//DOM Elements
let doWhileLoopResultOne = document.getElementById('doWhileLoopResultOne');
//End
// Test One
function doWhileTestOne() {
    let i = 0;
    do {
        doWhileLoopResultOne.textContent += i++ + ' ';
    } while(confirm('Continue Looping?'));
}
//End