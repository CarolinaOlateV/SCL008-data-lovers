/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filtered;
};
//Funcion para ordenar en forma alfabetica ascesdente los nombres de los pokemones
function orderNameAz(pokeData) {
  let pokemonesAz = pokeData;
  pokemonesAz = ordenNameAz.sort((pokeData,name,orderNameAz) => {
    if (a.name > b.name)
      return 1
    else
      return -1
  })
  return pokemonesAz
}
//Funcion para ordenar en forma alfabetica descendente los nombres de los pokemones
function orderNameZa(pokeData) {
  let pokemonesZa = pokeData;
  pokemonesZa = orderNameZa.sort((a, b) => {
    if (a.name < b.name)
      return 1
    else
      return -1
  })
  return pokemonesZa
}
window.filterData = filterData;



