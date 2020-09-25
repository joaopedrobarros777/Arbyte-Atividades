const cars = require('./cars.json')
const rs = require('readline-sync')

function maiorAceleracao() {
    let carro;
    let ultimaAceleracao;

    cars.forEach((car) => {
        if (car.Acceleration > ultimaAceleracao) {
            
            ultimaAceleracao = car.Acceleration;
            carroComMaiorAceleracao = carro;
        } else {
            console.log('esse carro tem a aceleracao inferior ('+ car.Acceleration + ')');
        }
    })
    console.log(carro)
}


function maiorPotencia() {
    let carro;
    let ultimaPotencia;

    cars.forEach((car) => {
        if (car.Horsepower > ultimaPotencia) {
            console.log('carro com maior potencia encontrado! ('+ car.Horsepower + ')')
            ultimaPotencia = car.Horsepower;
            carroComMaiorPotencia = car;
        } else {
            console.log('esse carro tem a potencia inferior ('+ car.Horsepower + ')');
        }
    })
}

let opcao = rs.question('A - Maior aceleracao\nB - Maior potencia\nC - Sair\n');

console.log('o usuario escolheu a opcao' + opcao);

if (opcao == 'A') {
    maiorAceleracao()
} else if (opcao == 'B') {
    maiorPotencia()
} else {
    console.log('Ciao')
}

