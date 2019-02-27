/* Manejo de data */

const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filtered;
};
//Funcion para ordenar en forma alfabetica ascendente los nombres de los pokemones

const sortData= (pokeData,name,nameaz);
  const arrPokemonesNameAz = name.sort((a, b) => {
  return a-b
  });
  return arrPokemonesNameAz;


window.filterData = filterData;
window.sortData = sortData ;



 