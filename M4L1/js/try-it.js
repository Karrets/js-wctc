let drawing = document.getElementById('tryItGrid');
let colorPicker = document.getElementById('colorPicker');
let reset = document.getElementById('gridReset');


drawing.addEventListener('mouseover', function(e) {
    e.target.style.background = colorPicker.value;
});

reset.addEventListener('click', function() {
    for(let i = 0; i < drawing.children.length; i++) {
        drawing.children[i].classList.remove('active');
    }
});

