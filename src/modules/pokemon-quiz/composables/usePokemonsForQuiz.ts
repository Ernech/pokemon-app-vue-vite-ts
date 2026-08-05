import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemonQuizStore";
import getPokemonOptions from "../helpers/getPokemosForQuiz";
import { computed } from "vue";

export const usePokemons=()=>{

    const pokemonStore = usePokemonStore();
    const { pokemonArr, pokemon, showPokemon, showAnswer, message,lives } = storeToRefs(pokemonStore)
    


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
            pokemonStore.discountLive();
            pokemonStore.showPokemonAndAnswer( `Oops, that was ${pokemon.value.name}`)
        }
    }

    const newGame = () => {
        if(lives.value>0){
            pokemonStore.clearState();
            mixPokemonArray();
        }else{
            gameOver()
        }
    }
    const gameOver = ()=>{
        console.log("Game over");
    }
    

    return{
        pokemonArr, 
        pokemon, 
        showPokemon, 
        showAnswer, 
        message,
        lives,
        imgSrc:computed(()=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.value?.id }.svg`),


        mixPokemonArray,
        checkAnswer,
        newGame
    }

}