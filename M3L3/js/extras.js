document.getElementById('onMouseOver').addEventListener('mouseover', hoverFunction);

function hoverFunction() {
    alert('Hover the element.');
}

$(document).ready(function() {
    $('#onMouseOverJQuery').mouseover(jQHoverFunction);
});

function jQHoverFunction() {
    alert('Hover the element. (And use JQuery to let you know!)');
}