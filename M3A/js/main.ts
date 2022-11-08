//DOM
const selectionForm = document.getElementById('selectorForm') as HTMLFormElement;
const selectionGluten = document.getElementById('gluten') as HTMLInputElement;
const selectionVegan = document.getElementById('vegan') as HTMLInputElement;
const selectionVegetarian = document.getElementById('vegetarian') as HTMLInputElement;
Restaurant.wouldBeParent = document.getElementById('restaurantList') as HTMLDivElement;
//End DOM
//Events
selectionForm.addEventListener("submit", applyRestrictions);
//End Events
//Vars
const restaurants: Restaurant[] = [
    new Restaurant('Macho Meals'   , '337 St Paul Ave.'    , false, false, false),
    new Restaurant('Veganic Corner', '24 S. Buckingham Rd.', true , true , true ),
    new Restaurant('Sherryl Meals' , '7897 Glen Eagles Ct.', false, true , true ),
    new Restaurant('Salad Heaven'  , '593 Harvey St.'      , false, true , true ),
    new Restaurant('Root Shoots'   , '18 South Chapel St.' , true , true , true ),
    new Restaurant('Grill Moguls'  , '40 State Rd.'        , true , false, false),
    new Restaurant('NovaFood'      , '9026 Jones Rd.'      , true , true , false),
    new Restaurant('Sangli'        , '426 Summerhouse Ave.', false, false, false),
    new Restaurant('Lavoya Diner'  , '83 Beacon Lane'      , true , false, true ),
    new Restaurant('Andisova'      , '474 Mayfield Ave.'   , true , false, false)
];

const availableRestaurants: Restaurant[] = [];
//End Vars

function applyRestrictions(event: Event) {
    if(event) event.preventDefault();

    for(let i = 0; i < restaurants.length; i++) {
        if(restaurants[i].matches(selectionGluten.checked, selectionVegan.checked, selectionVegetarian.checked)) {
            restaurants[i].show();
        } else {
            restaurants[i].hide();
        }
    }
}

applyRestrictions(null);