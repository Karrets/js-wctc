//DOM Object
const resultArea = document.getElementById('resultArea') as HTMLHeadingElement;
//End DOM Objects

function getDir() {
    let loc = window.location.pathname;
    return loc.substring(0, loc.lastIndexOf('/') + 1);
}

function RedirectToPath(relative: string) {
    window.location.pathname = getDir() + relative + '.html';
}