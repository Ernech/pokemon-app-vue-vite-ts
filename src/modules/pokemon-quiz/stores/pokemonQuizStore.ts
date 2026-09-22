import { defineStore } from "pinia";
import type { PokemonForQuiz } from "../interfaces/poquemon-quiz.interface";


interface PokemonSate{
    
    pokemonArr: PokemonForQuiz[];
    pokemon: PokemonForQuiz | undefined;
    showPokemon:boolean;
    showAnswer:boolean;
    message:string;
    lives:number;
    score:number;

}

export const usePokemonStore = defineStore('pokemon',{
    state:():PokemonSate=>({
        pokemonArr: JSON.parse(localStorage.getItem('pokemon_quiz_arr') || '[]'),
        pokemon: JSON.parse(localStorage.getItem('pokemon_quiz_correct') || 'null') || undefined,
        showPokemon:false,
        showAnswer:false,
        message:'',
        lives:Number(localStorage.getItem('pokemon_quiz_lives')) || 5,
        score:Number(localStorage.getItem('pokemon_quiz_score')) || 0
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
            this.resetStorage();
        },
        resetGame(){
            this.clearState();
            this.lives=5;
            this.score=0;
            this.resetStorage();
        },
        syncStorage(){
            localStorage.setItem('pokemon_quiz_score', this.score.toString());
            localStorage.setItem('pokemon_quiz_lives', this.lives.toString());
            localStorage.setItem('pokemon_quiz_arr', JSON.stringify(this.pokemonArr));
            
            if (this.pokemon) {
                localStorage.setItem('pokemon_quiz_correct', JSON.stringify(this.pokemon));
            }
        },
        resetStorage(){
            localStorage.removeItem('pokemon_quiz_score');
            localStorage.removeItem('pokemon_quiz_lives');
            localStorage.removeItem('pokemon_quiz_arr');
            localStorage.removeItem('pokemon_quiz_correct');
        }
        
    },
    getters:{
        isGameOver:(state)=>state.lives<=0
    }
});