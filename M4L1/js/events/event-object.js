let buttonContainer = document.getElementById('btnContainer');
let buttonContainerTwo = document.getElementById('btnContainerTwo');

buttonContainer.addEventListener("click", function(e) {
    console.log(e.target);
})

buttonContainerTwo.addEventListener("click", function(e, arg) {
    buttonClickTwo(e, "woa")
}, )

function buttonClickTwo(e, param) {
    console.log(e, param)
}