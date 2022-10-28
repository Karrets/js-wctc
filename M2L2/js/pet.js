class Pet {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }
    delete(element) {
        if (confirm(`Delete ${this.name}?`)) {
            element.style.opacity = '0';
            element.style.transform = 'scale(0)';
            setTimeout(() => element.remove(), 500);
            //https://stackoverflow.com/a/33424363 Help with cool transition!
        }
    }
}
//# sourceMappingURL=pet.js.map