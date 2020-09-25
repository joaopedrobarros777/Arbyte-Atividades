
function numero() {
    let numeroAleatorio = Math.random()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numeroAleatorio)
        }, 3000)
    })
}

numero().then(res => {
    console.log(res)
})