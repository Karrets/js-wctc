window.addEventListener('load', function() {
    console.log('Page Loaded');
});

let input = document.getElementById('inputFocus');

input.addEventListener('focus', function() {
    this.classList.add('active');
});

input.addEventListener('blur', function() {
    this.classList.remove('active');
});

let mousePosElem = document.getElementById('mousePosition');

document.addEventListener('mousemove', function(e) {
    mousePosElem.value = e.pageX + ' ' + e.pageY;
})