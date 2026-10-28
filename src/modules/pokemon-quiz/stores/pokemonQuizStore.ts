import { defineStore } from "pinia";
import type { PokemonForQuiz } from "../interfaces/poquemon-quiz.interface";
import { v4 as uuidv4 } from 'uuid';
import type { PokemonQuizScore } from "../interfaces/pokemon-quiz-score";

interface PokemonSate{
    
    pokemonArr: PokemonForQuiz[];
    pokemon: PokemonForQuiz | undefined;
    showPokemon:boolean;
    showAnswer:boolean;
    isNewHighScore:boolean,
    message:string;
    lives:number;
    score:number;

}

export const usePokemonStore = defineStore('pokemon',{
    state:():PokemonSate=>({
        pokemonArr:[],
        pokemon:undefined,
        showPokemon:false,
        showAnswer:false,
        isNewHighScore:false,
        message:'',
        lives:5,
        score:0
    }),
    actions:{
        loadPokemons(pokemons:PokemonForQuiz[]){
            this.pokemonArr=pokemons;
        },
        setHiddenPokemon(pokemon:PokemonForQuiz){
            this.pokemon=pokemon;
        },
        showPokemonAndAnswer(message:string){
            this.showAnswer=true;
            this.showPokemon=true;
            this.message=message;
        },
        discountLive(){
            this.lives-=1;
            if(this.isGameOver){
                this.gameOver()
            }
        },
        incrementScore(){
            this.score+=1;
        },
        clearState(){
            this.pokemonArr=[];
            this.pokemon = undefined;
            this.showPokemon = false;
            this.showAnswer = false;
            this.message = '';
        },
        resetGame(){
            this.clearState();
            this.lives=5;
            this.score=0;
        },
         gameOver(){
        if (!this.isGameOver) return;
       
        let scoresArray: PokemonQuizScore[] = [];
        this.isNewHighScore =false;
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
            finalScore: this.score,
            scoreDate: new Date()
        };

        if (scoresArray.length === 0 && this.score > 0) {
        this.isNewHighScore = true;
      } else if (scoresArray.length > 0) {
        const currentHighest = scoresArray[0].finalScore;
        if (this.score > currentHighest) {
          this.isNewHighScore = true;
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
        
    },
    getters:{
        isGameOver:(state)=>state.lives<=0
    }
});