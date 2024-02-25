function randomPromise() {
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 10) + 1;
        if (random < 6) {
            reject(random);
        } else {
            resolve(random);
        }
    });
}

randomPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });