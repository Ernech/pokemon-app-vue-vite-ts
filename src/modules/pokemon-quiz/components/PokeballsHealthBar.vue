<template>
    <div class="flex justify-between items-center bg-slate-200 border-2 border-neutral-900 rounded-lg p-2 mb-4">
        <span class="font-pixel text-[15px] text-neutral-700 uppercase tracking-tight">Lives: </span>
        <div class="flex flex-row">
            <img v-for="i in 5" :key="i" src="../../../assets/pokeball.png" alt="Pokeball" class="h-10 w-10" 
            :class= "['w-6 h-6 object-contain transition-all duration-500 ease-in-out', 
            i <= lives ? 
            'brightness-100 opacity-100 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]' : 'brightness-0 opacity-40']">
        </div>
    </div>
</template>
<script lang="ts", setup>
import { usePokemons } from '../composables/usePokemonsForQuiz';

const {lives}= usePokemons()
</script>