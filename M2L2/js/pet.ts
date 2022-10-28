class Pet {
    name: string;
    birthday: Date;

    constructor(name: string, birthday: Date) {
        this.name = name;
        this.birthday = birthday;
    }

    delete(element: HTMLDivElement):void {
        if(confirm(`Delete ${this.name}?`)) {
            element.style.opacity = '0';
            element.style.transform = 'scale(0)';
            setTimeout(() => element.remove(), 500);
            //https://stackoverflow.com/a/33424363 Help with cool transition!
        }
    }
}