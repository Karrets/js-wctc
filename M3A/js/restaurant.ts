class Restaurant {
    name: string;
    location: string;
    friendly: {
        "glutenFree": boolean,
        "vegan": boolean,
        "vegetarian": boolean,
    };

    element: HTMLDivElement;

    constructor(name: string, location: string, glutenFree:boolean, vegan:boolean, vegetarian:boolean) {
        this.name = name;
        this.location = location;

        this.friendly.glutenFree = glutenFree;
        this.friendly.vegan = vegan;
        this.friendly.vegetarian = vegetarian;

        let restaurant = this.element = document.createElement('div');
        let restaurantName = this.element.appendChild(document.createElement('h4'));
        let restaurantLocation = this.element.appendChild(document.createElement('h5'));

        restaurant.classList.add('restaurant');
        restaurantName.classList.add('restaurantName');
        restaurantLocation.classList.add('restaurantLocation');

        restaurantName.textContent = this.name;
        restaurantLocation.textContent = this.location;
    }

    matches(glutenFree:boolean, vegan:boolean, vegetarian:boolean):boolean {
        return ((glutenFree && this.friendly.glutenFree) || !glutenFree) &&
               ((vegan      && this.friendly.vegan     ) || !vegan     ) &&
               ((vegetarian && this.friendly.vegetarian) || !vegetarian);
    }
}