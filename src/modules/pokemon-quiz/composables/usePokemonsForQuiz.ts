import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/pokemonQuizStore";
import getPokemonOptions from "../helpers/getPokemosForQuiz";
import { computed } from "vue";
import type { PokemonQuizScore } from "../interfaces/pokemon-quiz-score";
import { v4 as uuidv4 } from 'uuid';

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
            gameOver();
            pokemonStore.resetGame();
            mixPokemonArray();
        }
    }
    const gameOver = ()=>{
       
        let scoresArray: PokemonQuizScore[] = [];
        isNewHighScore.value =false;
        try {
            const storedScores = localStorage.getItem('scores');
            if (storedScores) {
            const parsed = JSON.parse(storedScores);
            
          
            if (Array.isArray(parsed)) {
                scoresArray = parsed;
            }
            }
        } catch (error) {
        
            console.error("LocalStorage 'scores' was corrupted. Resetting data.", error);
            scoresArray = []; 
        }

   
        const savedName = localStorage.getItem('currentPlayer') || 'TRAINER';

     
        const newScore: PokemonQuizScore = {
            scoreId:uuidv4(),
            trainer: savedName,
            finalScore: score.value,
            scoreDate: new Date()
        };

        if (scoresArray.length === 0 && score.value > 0) {
        isNewHighScore.value = true;
      } else if (scoresArray.length > 0) {
        // El primer elemento (index 0) siempre es el puntaje más alto porque están ordenados
        const currentHighest = scoresArray[0].finalScore;
        if (score.value > currentHighest) {
          isNewHighScore.value = true;
        }
      }
        scoresArray.push(newScore);

    
        scoresArray.sort((a, b) => b.finalScore - a.finalScore);
        const topScores = scoresArray.slice(0, 10);

       
        try {
            localStorage.setItem('scores', JSON.stringify(topScores));
        } catch (error) {
            console.error("Failed to write to localStorage (space limit reached?)", error);
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