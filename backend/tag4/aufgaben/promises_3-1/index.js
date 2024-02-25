function timesItself(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(number * number);
        }, 2000);
    });
}

function threeTimesItself(num) {
    return timesItself(num)
        .then(result => {
            console.log(result);
            return timesItself(result);
        })
        .then(result => {
            console.log(result);
            return timesItself(result);
        })
        .then(result => {
            console.log(result);
            return result;
        });
}

threeTimesItself(10);