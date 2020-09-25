const rs = require("readline-sync")
let Pessoas = require('./Pessoas')

function cadastraUsuario(){

    let nome = rs.question('qual o seu nome?')
    let idade = rs.question('qual a sua idade?')
    let cpf = rs.question('qual o seu cpf?')
    let cidade = rs.question('qual a sua cidade?')
    let telefone = rs.question('qual o seu telefone?')

    let pessoa = new Pessoa(nome, idade, cpf, cidade, telefone)

    return pessoa;
}

function cadastrarUsuarios(quantidade) {
    let usuarios = [];

    for (let i = 0; i < quantidade; i++) {
        let usuario = cadastraUsuario();
        usuarios.push(usuario);
    }

    return usuarios;
}

function comparaUsuarios(usuarios) {
    let usuarioAtual = usuarios[0];
    let proximoUsuario = usuarios[1];

    let comparador = {
        nome: false,
        idade: false,
        cpf: false,
        cidade: false,
        telefone: false
    }

    if (usuarioAtual.nome === proximoUsuario.nome) {
        comparador.nome = true;
    }

    if (usuarioAtual.idade === proximoUsuario.idade) {
        comparador.idade = true;
    }

    if (usuarioAtual.cpf === proximoUsuario.cpf) {
        comparador.cpf = true;
    }

    if (usuarioAtual.cidade === proximoUsuario.cidade) {
        comparador.cidade = true;
    }

    if (usuarioAtual.telefone === proximoUsuario.telefone) {
        comparador.telefone = true;
    }

    return comparador;
}

function principal() {
    let usuarios = cadastrarUsuarios(2)

    comparaUsuarios(usuarios)
}

principal();