<template>
    <div>
        <h1 class="text-4xl md:text-5xl font-black tracking-widest text-yellow-400 drop-shadow-[0_5px_0_#3b82f6] uppercase font-mono my-3">Welcome to the Pokemon Quiz</h1>
        <div class="flex flex-col gap-3.5">
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
        <footer class="mt-8 text-center">
            <p class="font-pixel text-[15px] text-white tracking-wide uppercase drop-shadow-[0_1.5px_0_rgba(0,0,0,0.8)] opacity-90">
                Powered by the 
                <a href="https://pokeapi.co" target="_blank" class="text-yellow-300 underline hover:text-yellow-400 transition-colors">
                    PokéAPI
                </a>
            </p>
      </footer>
    </div>
</template>
<script setup lang="ts">

</script>
