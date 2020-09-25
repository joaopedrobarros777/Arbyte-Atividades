const rs = require('readline-sync');

​let cpf = rs.question("Digite o seu CPF: ");

let telephone = rs.question("Digite o seu telefone: ");

​function validateCPF(cpf) {

    let regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    return regex.test(cpf) ? "CPF válido!" : "CPF inválido!";

}

​function validateTelephone(telephone) {

    let regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

    return regex.test(telephone) ? "Telefone válido!" : "Telefone inválido!"

}

​
let isCPFValid = validateCPF(cpf);

let isTelephoneValid = validateTelephone(telephone);

​console.log(isCPFValid);

console.log(isTelephoneValid);

