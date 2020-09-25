function retornaString(string) {
    return new Promise((resolve, reject) => {
        let frase = string + " " + "Arbyte"
        resolve(frase)
    })
}

// retornaString("sei la").then(frase => console.log(frase))

async function init() {
    let frase = await retornaString("sei la");
    console.log(frase)
}

init()