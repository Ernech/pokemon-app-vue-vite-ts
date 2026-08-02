<template>
    <div class="bg-emerald-200 border-4 border-neutral-800 rounded-xl p-6 flex justify-center items-center shadow-inner h-64 relative overflow-hidden">

        <img v-if="!showPokemon" 
            :src="imgSrc" 
            class="brightness-0 w-64 h-64 object-contain"
            alt="pokemon">
        
        <img v-else
            :src="imgSrc"
            class="animate-reveal-brightness w-64 h-64 object-contain"
            alt="pokemon">

    </div>
</template>

<script setup lang="ts">
import { usePokemons } from '../composables/usePokemonsForQuiz';



const {showPokemon, imgSrc} = usePokemons();



</script>

<style scoped>

.pokemon-container {
    height: 200px;
    
}
img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>