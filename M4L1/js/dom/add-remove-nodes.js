let myElements = document.getElementsByClassName('updateMe');

for(let i = 0; i < myElements.length; i++) {
    myElements[i].innerHTML = '<p><em>Wow!!!</em> You seeing this?</p>';
}

let myActiveElements = document.getElementsByClassName('active');

while(myActiveElements.length > 0) {
    myActiveElements[0].remove();
}