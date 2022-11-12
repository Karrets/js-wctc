function htmlOnClick() {
    console.log('HTML On Click');
}

document.getElementById('btnDomClick').onclick = function() {
    console.log('DOM Handler Click');
}

document.getElementById('btnDomClick').onclick = function() {
    alert('DOM Handler Click, v2');
}

document.getElementById('btnListenerClick').addEventListener('click', function() {
    console.log('DOM Click Listener');
})

document.getElementById('btnListenerClick').addEventListener('click', function() {
    alert('DOM Click Listener, v2');
})