<template>
    <div v-if="isGameOver" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click=""></div>

    <div class="relative w-full max-w-sm bg-white border-4 border-black p-6 
                shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] rounded-sm text-center font-pixel animate-fade-in">
      
      <div class="text-red-600 text-3xl mb-2 animate-pulse">⚠️</div>
      
      <h3 class="text-sm md:text-base uppercase tracking-wider text-black font-bold leading-tight">
        Game Over
      </h3>
      <p class="text-xs text-gray-600 mt-2">
        Your final score (<span class="text-red-600 font-bold">{{ score }} pts</span>)!
      </p>

      <div class="mt-6 grid grid-cols-2 gap-4">
        <button 
          @click="continueGame"
          class="py-2.5 bg-gray-200 border-2 border-black text-xs uppercase text-black font-bold
                 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-300 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          New, Game
        </button>

        <!-- Botón para confirmar y ejecutar la redirección -->
        <button 
          @click="exitGame"
          class="py-2.5 bg-red-600 border-2 border-black text-xs uppercase text-white font-bold
                 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
        >
          Quit Game
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { usePokemons } from '../composables/usePokemonsForQuiz';
const router = useRouter();
const {score, isGameOver,lives, continueGame } = usePokemons();
const exitGame = ()=>{
  score.value=0;
  lives.value = 5;
  router.push('/')
}
</script>