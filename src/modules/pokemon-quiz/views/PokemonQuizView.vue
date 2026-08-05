<template>
   
        <h1 class="text-4xl 
        md:text-5xl 
        font-black tracking-wider
        text-yellow-400 
        drop-shadow-[0_4px_0_rgba(29,78,216,1)]
        uppercase 
        text-center
        mb-5 
        ">Who's that pokemon?</h1>
        <div class="min-h-132 card w-full max-w-md bg-slate-50 border-4 border-neutral-900 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] px-6 py-4">
             <h1 v-if="!pokemon" class="flex font-pixel">Hold on please...</h1>
             <template v-else>
                <PokeballsHealthBar/>
                 <PokemonPicture />
                 <PokemonOptions />
             </template>
        </div>
</template>

<script setup lang="ts">
import PokeballsHealthBar from '../components/PokeballsHealthBar.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemons } from '../composables/usePokemonsForQuiz';


const { pokemon, mixPokemonArray } = usePokemons();

mixPokemonArray();
</script>
