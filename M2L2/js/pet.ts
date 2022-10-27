class Pet {
    name: string;
    birthday: Date;

    constructor(name: string, birthday: Date) {
        this.name = name;
        this.birthday = birthday;
    }

    delete():void {
        alert(this.name + ' has been deleted.');
    }
}