var oxygenSaturation = 95;

function isOxygenNormal(oxygenSaturation) {
    if (oxygenSaturation > 95) {
        console.log(`Normal reading.`);
    } else if (oxygenSaturation === 95) {
        console.log(`Acceptable to continue home monitoring.`);
    } else if (oxygenSaturation < 95 && oxygenSaturation > 92) {
        console.log(`Seek advice from health professionals.`);
    } else if (oxygenSaturation < 93) {
        console.log(`Seek urgent medical advice.`);
    } else {
        console.log(`The value of the age variable is not numerical.`);
    }
}

isOxygenNormal(oxygenSaturation);



