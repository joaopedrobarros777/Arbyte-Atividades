async function stringToUperCase(string) {
    let stringToUperCase = string.toUpperCase();
    return stringToUperCase
}

async function init() {
    let resultado = await stringToUperCase('Pegoraro')
    console.log(resultado)
}

init()