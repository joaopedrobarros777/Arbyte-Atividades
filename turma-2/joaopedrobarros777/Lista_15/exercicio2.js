const cars = require("./cars.json")

const comparar = () => {
    let i = 0;
    cars.forEach(element => {
      if (element.Origin == 'Japan') {
        i += 1;
      }
    });
      console.log(`Na lista existem ${i} carros do Japão.\n`)
}

comparar()