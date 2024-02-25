function randomPromise(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 1000) + 1;
            resolve(random);
        }, number);
    });
}

Promise.all([randomPromise(1000), randomPromise(2000), randomPromise(3000)])
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });