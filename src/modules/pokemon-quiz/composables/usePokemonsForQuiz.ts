import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemonQuizStore";
import getPokemonOptions from "../helpers/getPokemosForQuiz";
import { computed } from "vue";
import type { PokemonQuizScore } from "../interfaces/pokemon-quiz-score";


export const usePokemons=()=>{

    const pokemonStore = usePokemonStore();
    const { pokemonArr, pokemon, showPokemon, showAnswer, message,lives, score, isGameOver, isNewHighScore } = storeToRefs(pokemonStore)
    


    const mixPokemonArray = async () => {
        pokemonStore.loadPokemons(await getPokemonOptions());
        const rndInt = Math.floor(Math.random() * 4)
        pokemonStore.setHiddenPokemon(pokemonArr.value[rndInt]);
    }

    const checkAnswer = async (selectedId: number) => {
        if (!pokemon.value) return;

        if (selectedId === pokemon.value.id) {
            pokemonStore.incrementScore();
            pokemonStore.showPokemonAndAnswer( `Correct, ${pokemon.value.name}`)
        } else {
            pokemonStore.discountLive();
            pokemonStore.showPokemonAndAnswer( `Oops, that was ${pokemon.value.name}`)
        }
    }

    const continueGame = () => {
        if(!isGameOver.value){
            pokemonStore.clearState();
            mixPokemonArray();
        }else{
            pokemonStore.resetGame();
            mixPokemonArray();
        }
    }



   
    
    const getTopScores =():PokemonQuizScore[]=>{
        try {
            const storedScores = localStorage.getItem('scores');
            if (storedScores) {
            const parsed = JSON.parse(storedScores);
                if (Array.isArray(parsed)) {
                    return parsed;
                }
                return []
            }
            return [];
        } catch (error) {
            console.log("Error when retrieving scores",error);
            return [];
        }
       
    }

    return{
        pokemonArr, 
        pokemon, 
        showPokemon, 
        showAnswer, 
        message,
        lives,
        imgSrc:computed(()=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.value?.id }.svg`),
        isNewHighScore,
        mixPokemonArray,
        checkAnswer,
        continueGame,
        score,
        isGameOver,
        getTopScores
    }

}