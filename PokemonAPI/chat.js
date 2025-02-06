async function  Pokemonapi() {
    try{
        const inp = document.querySelector("#inptext").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inp}`)

        const data = await response.json()
        const img = document.getElementById("pokeimg")
        const textheight = document.querySelector("#pokeheight")
        const textweight = document.querySelector("#pokeweight")

        img.style.display = "block"
        img.src = data.sprites.front_default
        textheight.innerHTML = `Height:${data.height}`
        textweight.innerHTML = `Weight:${data.weight}`
    }
    catch(error)
    {
        console.error(error);
        alert("Something is wrong, please enter a valid name!")
        
    }
}

const generatortext = document.querySelector("#generatortext")
const generatorbtn = document.querySelector("#generatorbtn")

generatorbtn.addEventListener("click", () => {
    const box = document.querySelector("#checkbox")
    const pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Bulbasaur",
    "Squirtle", "Eevee", "Jigglypuff", "Snorlax", "Gengar", "Lucario",
    "Arcanine", "Dragonite", "Machamp", "Espeon", "Infernape"]
    generatortext.value = pokemons[Math.floor(Math.random() * 15)]
    generatortext.select()
    navigator.clipboard.writeText(generatortext.value)
    alert("Pokemon Copiat!")

    if(box.checked){
        document.querySelector("#inptext").value = generatortext.value
    }
})




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


