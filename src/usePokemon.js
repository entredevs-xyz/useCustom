import { useState } from "react"



export const usePokemon = () => {


    const [pokemon, setPokemon] = useState('')
    const procurarPokemon = (nomePokemon) => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
        .then(response => response.json())
        .then(dadosPokemon => {
            setPokemon(dadosPokemon.sprites.front_default)
        })
        
    }


    return {
        pokemon,
        procurarPokemon
    }

}
