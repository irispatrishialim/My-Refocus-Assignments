function powerOfNumber(num, pow) {
    let computePower = num ** pow;
    console.log(`Hi Sam, ${num} to the power of ${pow} is ${computePower}.`)
}

powerOfNumber(3, 3);

//Using loops
function powerOfNumber(num, pow) {
    let newNum = 1;
    for (var i = 0; i < pow; i++) {
        newNum *= num;
    }
    console.log(`Hi Sam, ${num} to the power of ${pow} is ${newNum}.`);
}

powerOfNumber(2, 3);
