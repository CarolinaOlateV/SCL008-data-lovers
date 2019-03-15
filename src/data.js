/* Manejo de data */

const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filtered;
};
//Funcion para ordenar en forma alfabetica ascendente los nombres de los pokemones

const sortData = (pokeData,sortBy,sortOrder) => {
  
  let orderAz = pokeData.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
     })
     if (sortOrder === "z--a"){
      orderAz.reverse();
    }
    return orderAz;
  };

  const numData = (pokeData,sortBy,sortOrder) => {
  
    let number = pokeData.sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy]);
       })
       if (sortOrder === "num-last"){
        number.reverse();
      }
      return number;
    };

    const computeStats = (pokeData, condition) => {
      let counter=0;
      pokeData.forEach(element => {
          if (element.type.includes(condition)){
              counter=counter+1;
          }
      });
      return Math.round((counter/151)*100) +"%";
         //al contador se la pasa la regla de 3 para sacar el porcentaje y luego se redondea con Math.round al numero mas cercano.
     };

window.filterData = filterData;
window.sortData = sortData;
window.numData = numData;
window.computeStats = computeStats;



