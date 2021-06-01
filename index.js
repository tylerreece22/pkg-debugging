const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

(async () => {
    while (true) {
        await delay(1000)
        console.log('working')
    }
})()