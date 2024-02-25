const setTimeoutPromise = (ms) =>{
    return new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve()
    },ms)

    })
}


const timeout = setTimeoutPromise().then(()=>{
    console.log('ich wurde in einem Promise geloggt');
})