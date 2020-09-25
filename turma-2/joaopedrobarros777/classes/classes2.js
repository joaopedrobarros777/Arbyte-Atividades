const rs = require("readline-sync")
let Pessoa = require('./Pessoas')

let nome = rs.question('qual o seu nome?')
let idade = rs.question('qual a sua idade?')
let cpf = rs.question('qual o seu cpf?')
let cidade = rs.question('qual a sua cidade?')
let telefone = rs.question('qual o seu telefone?')

let pessoa = new Pessoa(nome, idade, cpf, cidade, telefone)

console.log(pessoa)