<template>
        <button 
        @click="showQuitModal=true"
        class="relative self-start mb-4 md:fixed md:top-4 md:left-4 md:mb-0 bg-white border-2 
        border-black p-2 
        font-pixel shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
        hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
        transition-all
        rounded-md
        ">&lt; Exit Game</button>
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
                <PokeballsHealthBarAndScore/>
                 <PokemonPicture />
                 <PokemonOptions />
             </template>
        </div>
    <div v-if="showQuitModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="showQuitModal = false"></div>

    <div class="relative w-full max-w-sm bg-white border-4 border-black p-6 
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] rounded-sm text-center font-pixel animate-fade-in">
      
      <div class="text-red-600 text-3xl mb-2 animate-pulse">⚠️</div>
      
      <h3 class="text-sm md:text-base uppercase tracking-wider text-black font-bold leading-tight">
        Quit Game?
      </h3>
      <p class="text-xs text-gray-600 mt-2">
        Your current score (<span class="text-red-600 font-bold">{{ score }} pts</span>) will be lost!
      </p>

      <div class="mt-6 grid grid-cols-2 gap-4">
        <!-- Botón para cancelar -->
        <button 
          @click="showQuitModal = false"
          class="py-2.5 bg-gray-200 border-2 border-black text-xs uppercase text-black font-bold
                 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-300 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          No, Stay
        </button>

        <!-- Botón para confirmar y ejecutar la redirección -->
        <button 
          @click="exitGame"
          class="py-2.5 bg-red-600 border-2 border-black text-xs uppercase text-white font-bold
                 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          Yes, Quit
        </button>
      </div>
    </div>
  </div>
  <GameOverModal/>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import PokeballsHealthBarAndScore from '../components/PokeballsHealthBarAndScore.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemons } from '../composables/usePokemonsForQuiz';
import { ref } from 'vue'
import GameOverModal from '../components/GameOverModal.vue';
const { pokemon, mixPokemonArray, score, lives } = usePokemons();
const router = useRouter()
mixPokemonArray();
const showQuitModal = ref(false)
const exitGame = ()=>{
  //Reset Score and lives
  score.value=0;
  lives.value = 5;
  router.push('/')
}



</script>
