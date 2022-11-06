const dishMenu = {
    "dishes": [{
        "dishID": 1,
        "dishName": "Caesar Salad",
        "dishPrice": 160,
        "ingredients": ['Romaine', 'Iceberg', 'Lollo Rosso Letuce', 'Croutons']
    },
    {
        "dishID": 2,
        "dishName": "Classic Beef Burger",
        "dishPrice": 180,
        "ingredients": ['Juicy Beef Patty', 'Mixed Lettuce', 'Tomatoes', 'Cheddar Cheese']
    },
    {
        "dishID": 3,
        "dishName": "Roasted Chicken Dijon",
        "dishPrice": 140,
        "ingredients": ['Chicken', 'Dijon Mustard', 'Onion', 'Lettuce']
    }],
    //Trial
    "enumerateDish": function () {
        for (menu of this.dishes) {
            console.log(`\n${menu.dishName}, ₱${menu.dishPrice} \nContains ${menu.ingredients}`);
        }
    }
}

//Trial
dishMenu.enumerateDish();


