const rs = require('readline-sync')
const axios = require('axios')
const chalk = require('chalk')

const URL = 'https://pokeapi.co/api/v2/pokemon/'

let pokemon = rs.question('qual o seu pokemon?\n')

async function getPokemon(pokemon) {
    let {data} = await axios.get(URL + pokemon)
    // console.log('habilidades:', data.abilities)
    // console.log('tipos:', data.types)
    data.types.forEach(tipo => {
        pegarDanos(tipo.type.url)
    })
    data.abilities.forEach(habilidades => {
        pegarHabilidades(habilidades.abilities.url)
    })
}

getPokemon(pokemon)

async function pegarDanos(URL) {
    let {data} = await axios.get(URL)
    let {no_damage_to, half_damage_to, double_damage_to} = data.damage_relations
    console.log('dano zero:----------')
    no_damage_to.forEach(semDano => {
        console.log(semDano.name)
    })
    console.log('metade do dano:------')
    half_damage_to.forEach(metadeDano => {
        console.log(metadeDano.name)
    })
    console.log('dano dobrado:-------')
    double_damage_to.forEach(dobroDano => {
        console.log(dobroDano.name)
    })
}

async function pegarHabilidades(pokemon) {
    let {data: pokemon} = await axios.get(`${API}${pokemon}`)

    let name = pokemon.name;
    let abilities = pokemon.abilities;

    console.log(chalk.green.bold(`Nome: ${name}`))

    abilities.forEach(async ({ability}) => {
        let {data: result} = await axios.get(ability.url);

        let resultado = result.effect_entries.find(entry => entry.language.name === 'en');

        console.log(chalk.blue(`${abilityName}:`));
        console.log(resultado.effect);
    })
}

pegarHabilidades()
