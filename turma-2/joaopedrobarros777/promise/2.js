async function reverseString(string) {
    let stringReverse = string.split('').reverse().join('');
    return stringReverse
}

async function init() {
    let resultado = await reverseString('Pegoraro')
    console.log(resultado)
}

init()