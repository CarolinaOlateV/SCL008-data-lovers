const pokeData = POKEMON.pokemon;
const container = document.getElementById('root');// donde contendre mis cartas con pokemon

const newData = (pokeData) => {
	let result = '';
	//console.log(DATA)
   pokeData.forEach(element => {
	 // element --> DATA[i]
	 //console.log(element.house);
	 
  
		 result = container.innerHTML += `
		 <div>
			 <div class="card">
             <div class="box">
             <h2>${element.name}</h2>
				 <div class="img">
                     <img src="${element.img}">
                     <p>Tipo:${element.type}</p>
				 </div>				 
			 </div>
			 </div>
		 </div>` 
	 } 
   );
   return result;
 }

 window.onload = newData(pokeData);
