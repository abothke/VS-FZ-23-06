function dblAfter2Seconds(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(number * 2);
        }, 2000);
    });
    }

    dblAfter2Seconds(10).then((result) => {
    console.log(result);
    });