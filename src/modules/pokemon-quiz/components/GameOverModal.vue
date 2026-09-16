<template>
    <div v-if="isGameOver" class="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
    <div class="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

    <div class="relative w-full max-w-sm bg-white border-4 border-black p-6 pt-10
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] rounded-sm text-center font-pixel animate-fade-in text-slate-900">
      <img src="../../../assets/pokeball-img.png" alt="decoracion" 
           class="absolute -top-3 -left-3 w-8 h-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] animate-pulse [animation-duration:4s]">
      <img src="../../../assets/pokeball-img.png" alt="decoracion" 
           class="absolute -top-3 -right-3 w-8 h-8 drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)] animate-pulse [animation-duration:4s]">
 
      
     
      <h3 class="text-xl md:text-2xl uppercase tracking-widest text-red-600 font-black leading-none drop-shadow-[0_2px_0_#000000]">
        Game Over
      </h3>
      <div class="mt-4 bg-gray-100 border-2 border-dashed border-gray-400 p-4 rounded-sm">
        <p class="text-[11px] uppercase tracking-wider text-gray-500">
          Trainer
        </p>
        <p class="text-sm font-bold uppercase tracking-widest text-blue-600 -mt-0.5">
          {{currentTrainer}}
        </p>
        <p class="text-[11px] uppercase tracking-wider text-gray-500 mt-3">
          Final Score
        </p>
         <p class="text-3xl font-black tracking-widest text-yellow-500 drop-shadow-[2px_2px_0_#000000] animate-bounce [animation-duration:2s]">
          {{ score }} <span class="text-xs text-black drop-shadow-none">PTS</span>
        </p>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-4">
        <button 
          @click="continueGame"
          class="py-3 bg-yellow-400 border-2 border-black text-xs uppercase text-black font-bold tracking-wider
                 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          New Game
        </button>

        <!-- Botón para confirmar y ejecutar la redirección -->
        <button 
          @click="exitGame"
          class="py-3 bg-red-600 border-2 border-black text-xs uppercase text-white font-bold tracking-wider
                 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          Quit
        </button>
      </div>
       <img src="../../../assets/pokeball-img.png" alt="decoracion" 
           class="absolute -bottom-3 -left-3 w-8 h-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] animate-pulse [animation-duration:4s]">
      <img src="../../../assets/pokeball-img.png" alt="decoracion" 
           class="absolute -bottom-3 -right-3 w-8 h-8 drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)] animate-pulse [animation-duration:4s]">
 
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { usePokemons } from '../composables/usePokemonsForQuiz';
import { computed } from 'vue';
const router = useRouter();
const {score, isGameOver,lives, continueGame } = usePokemons();
const currentTrainer = computed(() => {
  return localStorage.getItem('currentPlayer') || 'TRAINER';
});
const exitGame = ()=>{
  score.value=0;
  lives.value = 5;
  router.push('/')
}
</script>