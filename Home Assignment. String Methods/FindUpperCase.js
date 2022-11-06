function findUpperCase(str) {
    const upperStr = str.replace(/[^A-Z]/g, '');
    if (upperStr !== "") {
        console.log(upperStr[0]);
    } else {
        console.log(`No UpperCase`);
    }
}
findUpperCase("there is storm coming to the East of the Philippines");
findUpperCase("no more rainy days here, sun is about to show up");
