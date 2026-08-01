import { defineStore } from "pinia";
import type { PokemonInPokedex } from "../interfaces/pokedex.interface";

interface PokedexState{
    pokemonsArr:PokemonInPokedex[];
    selectedPokemon:PokemonInPokedex | null;
    currentPokemons:string;
    previous: string | null;
    next: string | null;
    isLoading: boolean;
}

export const usePokedexStore = defineStore('pokedexStore',{


     state:():PokedexState=>({
        pokemonsArr:[],
        selectedPokemon:null,
        currentPokemons:'https://pokeapi.co/api/v2/pokemon?limit=4&offset=0',
        previous:null,
        next: null,
        isLoading:false
    }),
    actions:{
         loadPokemons(pokemons:PokemonInPokedex[]){
            this.isLoading=false;
            this.pokemonsArr=pokemons;
        },
        setPokemon(pokemon:PokemonInPokedex){
            this.selectedPokemon=pokemon;
        },
        setPrevAndNextPokemons(next:string, prev:string){
            this.next=next;
            this.previous=prev;
        },
        setCurrentPokemons(current:string){
            this.currentPokemons=current;
        },
        clearPokemon(){
            this.pokemonsArr=[]
        }


    }


})