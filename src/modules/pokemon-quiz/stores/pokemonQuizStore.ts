import { defineStore } from "pinia";
import type { PokemonForQuiz } from "../interfaces/poquemon-quiz.interface";


interface PokemonSate{
    
    pokemonArr: PokemonForQuiz[];
    pokemon: PokemonForQuiz | undefined;
    showPokemon:boolean;
    showAnswer:boolean;
    message:string;

}

export const usePokemonStore = defineStore('pokemon',{
    state:():PokemonSate=>({
        pokemonArr:[],
        pokemon:undefined,
        showPokemon:false,
        showAnswer:false,
        message:''
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
        clearState(){
            this.pokemonArr=[];
            this.pokemon = undefined;
            this.showPokemon = false;
            this.showAnswer = false;
            this.message = '';
        }
    }
});