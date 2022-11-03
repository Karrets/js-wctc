//DOM Elements
let doWhileLoopResultOne = document.getElementById('doWhileLoopResultOne');
//End
// Test One
function doWhileTestOne() {
    doWhileLoopResultOne.innerHTML = '';

    let i = 0;
    do {
        doWhileLoopResultOne.textContent += i++ + ' ';
    } while(confirm('Continue Looping?'));
}
//End