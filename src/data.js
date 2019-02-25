/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filtered;
};

window.filterData = filterData;
