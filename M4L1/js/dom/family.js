//DOM BUTTONS
let parentButton = document.getElementById('btnParent');
let childButton = document.getElementById('btnChild');
let prvSiblingButton = document.getElementById('btnPreviousSibling');
let nxtSiblingButton = document.getElementById('btnNextSibling');

function active() {
    return document.querySelector('.activeElement');
}
//END
//EVENT LISTENERS
parentButton.addEventListener('click', goParent);
childButton.addEventListener('click', goChild);
prvSiblingButton.addEventListener('click', prvSibling);
nxtSiblingButton.addEventListener('click', nxtSibling);
//END

function goParent() {
    let cur = active();
    if(cur.parentElement !== null) {
        cur.parentElement.classList.add('activeElement');
        cur.classList.remove('activeElement');
    } else {
        console.log('No parent.')
    }
}

function goChild() {
    let cur = active();
    if(cur.firstElementChild !== null) {
        cur.firstElementChild.classList.add('activeElement');
        cur.classList.remove('activeElement');
    } else {
        console.log('No child.')
    }
}

function prvSibling() {
    let cur = active();
    if(cur.previousElementSibling !== null) {
        cur.previousElementSibling.classList.add('activeElement');
        cur.classList.remove('activeElement');
    } else {
        console.log('No previous sibling.');
    }
}

function nxtSibling() {
    let cur = active();
    if(cur.nextElementSibling !== null) {
        cur.nextElementSibling.classList.add('activeElement');
        cur.classList.remove('activeElement');
    } else {
        console.log('No next sibling');
    }
}