/* Manejo de data */

const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filtered;
};
//Funcion para ordenar en forma alfabetica ascendente los nombres de los pokemones

const sortData = (name,opcNameAz)=>{
  
  let arrOrderAz = name.sort((a, b) => {
    return a[opcNameAz].localeCompare(b[opcNameAz]);
     })
     return arrOrderAz;
   };



window.filterData = filterData;
window.sortData = sortData;


