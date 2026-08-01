import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemonQuizStore";
import getPokemonOptions from "../helpers/getPokemosForQuiz";
import { computed } from "vue";

export const usePokemons=()=>{

    const pokemonStore = usePokemonStore();
    const { pokemonArr, pokemon, showPokemon, showAnswer, message } = storeToRefs(pokemonStore)
    


    const mixPokemonArray = async () => {
        pokemonStore.loadPokemons(await getPokemonOptions());
        const rndInt = Math.floor(Math.random() * 4)
        pokemonStore.setHiddenPokemon(pokemonArr.value[rndInt]);
    }

    const checkAnswer = async (selectedId: number) => {
        if (!pokemon.value) return;

        if (selectedId === pokemon.value.id) {
            pokemonStore.showPokemonAndAnswer( `Correct, ${pokemon.value.name}`)
        } else {
            pokemonStore.showPokemonAndAnswer( `Oops, that was ${pokemon.value.name}`)
        }
    }

    const newGame = () => {
        pokemonStore.clearState();
        mixPokemonArray()
    }

    return{
        pokemonArr, 
        pokemon, 
        showPokemon, 
        showAnswer, 
        message,

        imgSrc:computed(()=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.value?.id }.svg`),


        mixPokemonArray,
        checkAnswer,
        newGame
    }

}