const pokeData = window.POKEMON.pokemon;
const container = document.getElementById('root');// donde contendre mis cartas con pokemon

const newData = (pokeData) => {
	let result = '';
   pokeData.forEach(element => { //element representa al objeto que esta dentro de la data
 
	container.innerHTML += `
		 <div>
			 <div class="card">
             <div class="box">
             <h2>${element.name}</h2>
				 <div class="img">
                     <img src="${element.img}" alt="${element.name}">
                     <p>Tipo:${element.type}</p>
				 </div>				 
			 </div>
			 </div>
		 </div>` 
	 });
   return result;
 }
//Filtrando
 document.getElementById('category').addEventListener('change',() => {
	 let condition = document.getElementById('category').value;
	 let filtered = window.filterData(pokeData, condition);
	 //Limpiando div
	 container.innerHTML = '';

	 filtered.forEach(element => {
		 container.innerHTML += `<div>
		 <div class="card">
		 <div class="box">
		 <h2>${element.name}</h2>
			 <div class="img">
				 <img src="${element.img}" alt="${element.name}">
				 <p>Tipo:${element.type}</p>
			 </div>				 
		 </div>
		 </div>
	 </div>` 
	 })
 })

 window.onload = newData(pokeData);


