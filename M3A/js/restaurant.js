class Restaurant {
    constructor(name, location, glutenFree, vegan, vegetarian) {
        this.name = name;
        this.location = location;
        this.glutenFree = glutenFree;
        this.vegan = vegan;
        this.vegetarian = vegetarian;
        //You said in class that creating and storing the element in the object as a property was an acceptable
        //alternative to the method described as followed in the assignment:
        // * The restaurant object should have a method (anonymous function) that does the following:
        //    - Creates an HTML element with the restaurant name and restaurant address
        //    - Returns one HTML element
        //
        // Instead I plan to remove the relations from the existing element as to not need to rebuild the element
        //each time it is needed.
        let restaurant = this.element = document.createElement('div');
        let restaurantName = this.element.appendChild(document.createElement('h4'));
        let restaurantLocation = this.element.appendChild(document.createElement('h5'));
        restaurant.classList.add('restaurant');
        restaurantName.classList.add('restaurantName');
        restaurantLocation.classList.add('restaurantLocation');
        restaurantName.textContent = this.name;
        restaurantLocation.textContent = this.location;
    }
    matches(glutenFree, vegan, vegetarian) {
        return ((glutenFree && this.glutenFree) || !glutenFree) &&
            ((vegan && this.vegan) || !vegan) &&
            ((vegetarian && this.vegetarian) || !vegetarian);
    }
    show() {
        Restaurant.wouldBeParent.appendChild(this.element);
    }
    hide() {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}
//# sourceMappingURL=restaurant.js.map