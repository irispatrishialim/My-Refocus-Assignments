const zoo_website = {
    "zoo_name": "Manila Zoo",
    "zoo_description": "Biggest zoo in Manila",
    "arr_animals": [
        { "animal_emoji": "🦁", "animal_name": "Lion" },
        { "animal_emoji": "🐍", "animal_name": "Snake" },
        { "animal_emoji": "🐟", "animal_name": "Fish" }
    ],
    "displayZooName": function () {
        console.log(this.zoo_name);
    },
    "displayZooDescription": function () {
        console.log(this.zoo_description);
    },
    "enumerateAnimals": function () {
        for (animal of this.arr_animals) {
            console.log(`Please welcome ${animal.animal_name}, a ${animal.animal_emoji}`);
        }
    }
};


zoo_website.enumerateAnimals();

