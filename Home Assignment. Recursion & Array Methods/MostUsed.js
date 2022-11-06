const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome"
];

const count = {};

arr.forEach(function (element) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
});


console.log(count);