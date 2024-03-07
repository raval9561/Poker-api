console.log('hello world');

const pokemon = [
	{
		"name": "Bulbasaur",
		"hp": 45,
		"type": "grass"
	},
	{
		"name": "Charmander",
		"hp": 52,
		"type": "fire"
	},
	{
		"name": "Squirtle",
		"hp": 48,
		"type": "water"
	}
];

for(let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].name);
}

// //***** AJAX ******/ 
// // create object
// const xhr = new XMLHttpRequest();
// // create GET request, url of where to get the data, true send data asynchronously
// xhr.open("GET", "https://pokeapi.co/v2/pokemon/pikachu", true);
// // listen for the response, when ready, run the function
// xhr.onreadystatechange = function(){
// 	// if successful
// 	if(this.readyState == 4 && this.status == 200){
// 		console.log( this.responseText );
// 	}else{
// 		console.log(this.readyState, this.status);
// 	}
// }
// // send request
// xhr.send();


// // REMEMBER that JavaScript is Asynchronous
// console.log('start')

// // get data from api using Axios Library
// axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`).then(function(response){
//     console.log('axios');

//     // once request gets back, look at what is inside
//     console.log(response);

//     // we want the data from the response
//     const pokemonData = response.data;
//     console.log(response.data);
// });

// console.log('end');

// This should say 'start', 'end', then the response in the console?
// Nope. The response takes time and comes in last.

function getNewPokemonData(event) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + event.target.value;

    // modern JavaScript uses fetch, which became available in 2015
    fetch(url)
	.then(function(response) {
        // log initial response
        console.log(response);
        // convert response to JSON object
        return response.json();
    })
	.then(function(responseJSON) {
        // log JSON object for debugging
        console.log(responseJSON);

        // update pokemon page with JSON object data
        updatePokemon(responseJSON);
    })
	.catch(error=>console.log(error)); // catch errors
}
document.getElementById("poke").addEventListener("change", getNewPokemonData);

function updatePokemon(pokeData) {
    // updates website
    document.querySelector("img").src = pokeData.sprites.front_default;
    document.querySelector("img").src = pokeData.sprites.front_default;
	document.querySelector("h1").innerText = pokeData.species.name;
	document.getElementById("type").innerText = "Type: " + pokeData.types[0].type.name;
	document.getElementById("lbs").innerText = pokeData.weight + " lbs";
	document.getElementById("hp").innerText = "HP:" + pokeData.stats[0].base_stat;
	document.getElementById("attack").innerText = "Attack:" + pokeData.stats[1].base_stat;
	document.getElementById("defense").innerText = "Defense:" + pokeData.stats[2].base_stat;
	document.getElementById("speed").innerText = "Speed:" + pokeData.stats[5].base_stat;
}
