/* Manejo de data */

const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filtered;
};
//Funcion para ordenar en forma alfabetica ascendente los nombres de los pokemones

const sortData = (pokeData,sortBy,sortOrder)=>{
  
  let arrOrderAz = pokeData.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
     })
     if (sortOrder === "falling"){
      arrOrderAz.reverse();
    }
    return arrOrderAz;
  }

window.filterData = filterData;
window.sortData = sortData;



