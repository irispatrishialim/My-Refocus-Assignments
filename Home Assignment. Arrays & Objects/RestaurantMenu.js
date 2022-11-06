const restaurantMenu = {
    "restaurantName": "Sorisso Cafe & Restaurant",
    "dishes": [
        {
            "dishID": 1,
            "dishName": "Fettuccine Pasta",
            "dishPrice": 686,
            "ingredients": ['Fettuccine', ' Grilled Chicken', ' Creamy Sauce', ' Mushroom', ' Thyme', ' Garlic']
        },
        {
            "dishID": 2,
            "dishName": "Fettuccine Arrabiata",
            "dishPrice": 699,
            "ingredients": ['Fettuccine', ' Grilled Chicken', ' Jalapeno', ' Olives', ' Tomato Sauce']
        },
        {
            "dishID": 3,
            "dishName": "Penne Pasta",
            "dishPrice": 675,
            "ingredients": ['Penne Pasta', ' Mushroom', ' Grilled Chicken', ' Milk spicy creamy sauce']
        }
    ],
    "displayRestaurantName": function () {
        console.log(this.restaurantName);
    },
    "displayMenu": function () {
        for (menu of this.dishes) {
            console.log(`\n${menu.dishName}, ₱${menu.dishPrice} \nContains ${menu.ingredients}`);
        }
    }
}

restaurantMenu.displayRestaurantName();
restaurantMenu.displayMenu();