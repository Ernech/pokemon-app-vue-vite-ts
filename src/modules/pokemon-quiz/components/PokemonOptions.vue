<template>
  <div v-if="!showAnswer" class="grid grid-cols-1 gap-3 mt-6">
    <div v-for="pokemon in pokemons" >
        <button 
            class="btn btn-outline btn-lg w-full justify-start border-3 border-neutral-900 bg-base-100 text-neutral-900 font-bold tracking-wide normal-case shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            :key="pokemon.id"
            :disabled="showPokemon"
            @click="checkAnswer(pokemon.id)">
            <span class="badge badge-primary mr-3 border-2 border-neutral-900 font-mono upercase">
                {{ pokemon.name }}
            </span>
        </button>

    </div>
  
    
     </div>
       <div class="w-full grid grid-cols-1 gap-3 mt-6" v-else>
            <h2 class="font-pixel text-2xl">{{ message }}</h2>
            <button class="btn btn-outline btn-lg border-3 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" @click="newGame">
                <span class="font-pixel uppercase">
                    New Game
                </span>
            </button>
        </div>
</template>

<script setup lang="ts">
import { usePokemons } from '../composables/usePokemonsForQuiz';

const {pokemonArr:pokemons, checkAnswer,showPokemon, showAnswer,message,newGame}=usePokemons()

</script>

<style scoped>
/* ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
} */
</style>