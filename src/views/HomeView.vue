<template>
  <div class="grid grid-cols-1 md:grid-cols-2 backdrop-blur-md">
    <div class="flex justify-center items-center">
      <img src="../assets/pokeball-img.png" alt="Pokeball" class="h-150 w-150">
    </div>
    <div class="flex flex-col justify-center items-center gap-3.5">
        <h1 class="text-2xl md:text-4xl text-center font-black tracking-widest text-yellow-400 drop-shadow-[0_5px_0_#3b82f6] uppercase font-mono my-3">Welcome to the Pokemon Quiz</h1>
        <p class="text-base md:text-lg text-white font-pixel text-justify">A new silhouette has appeared! Can you recognize it before it's too late? Tap the correct name and prove your status as a top Trainer.</p>
            <button 
            @click=""
            class="btn bg-white btn-lg w-full border-3 border-neutral-900 font-pixel text-xs tracking-wider uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
            Start Game
          </button>
          <button 
            @click=""
            class="btn bg-white btn-lg w-full border-3 border-neutral-900 font-pixel text-xs tracking-wider uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
            How to Play
          </button>
           <button 
            @click=""
            class="btn bg-white btn-lg w-full border-3 border-neutral-900 font-pixel text-xs tracking-wider uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
            Higest Scores
          </button>
        </div>
      
   
  </div>
    <footer class="mt-8 text-center">
            <p class="font-pixel text-[15px] text-white tracking-wide uppercase drop-shadow-[0_1.5px_0_rgba(0,0,0,0.8)] opacity-90 ">
                Powered by the 
                <a href="https://pokeapi.co" target="_blank" class="text-blue-700 underline hover:text-blue-500 transition-colors font-bold drop-shadow-none">
                    PokéAPI
                </a>
            </p>
      </footer>
</template>
<script setup lang="ts">

</script>
