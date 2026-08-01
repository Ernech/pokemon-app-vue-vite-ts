import { storeToRefs } from "pinia";
import { getPokemons, searchPokemon } from "../helpers/getPokedexOptions";
import { usePokedexStore } from "../stores/pokedexStore";
import type { PokemonInPokedex } from "../interfaces/pokedex.interface";

export const usePokedex=()=>{

    const pokedexStore = usePokedexStore();

    const { pokemonsArr,selectedPokemon,currentPokemons, previous, next} = storeToRefs(pokedexStore);

      const getCurrentPokemons=async()=>{
       const resp= await getPokemons(currentPokemons.value);
       pokedexStore.loadPokemons(resp.pokemons);
       pokedexStore.setPrevAndNextPokemons(resp.next,resp.previous);
    }

    const getNextPokemons=()=>{
        if(next.value){
            pokedexStore.clearPokemon();
            pokedexStore.setCurrentPokemons(next.value);
            getCurrentPokemons();
        }
    }

    const getPrevPokemons=()=>{
        if(previous.value){
            pokedexStore.clearPokemon();
            pokedexStore.setCurrentPokemons(previous.value);
            getCurrentPokemons();
        }
    }
    const selectPokemon =(pokemon:PokemonInPokedex)=>{
        if(pokemon){
            console.log({pokemon});
            pokedexStore.setPokemon(pokemon);
        }
    }

    const searchPokemonByName=async(pokemonName:string)=>{
        const pokemon = await searchPokemon(pokemonName);
        pokedexStore.setPokemon(pokemon);
    }

    return {
        next,
        previous,
        pokemonsArr,
        selectedPokemon,
        getCurrentPokemons, 
        getNextPokemons, 
        getPrevPokemons, 
        selectPokemon,
        searchPokemonByName
    };

}