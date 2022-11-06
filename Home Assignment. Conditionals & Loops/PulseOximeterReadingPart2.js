var pulseRatePerMinute = 131;

function isOxygenNormal(pulseRatePerMinute) {
    if (pulseRatePerMinute <= 100 && pulseRatePerMinute >= 40) {
        console.log(`Normal reading.`);
    } else if (pulseRatePerMinute > 100 && pulseRatePerMinute <= 109) {
        console.log('Acceptable to continue home monitoring.');
    } else if (pulseRatePerMinute > 109 && pulseRatePerMinute <= 130) {
        console.log(`Seek advice from health professionals.`);
    } else if (pulseRatePerMinute > 130) {
        console.log(`Seek urgent medical advice.`);
    } else {
        console.log(`The value of the age variable is not numerical.`);
    }
}

isOxygenNormal(pulseRatePerMinute);