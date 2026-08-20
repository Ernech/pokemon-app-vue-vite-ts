<template>
  <div class="min-h-screen flex flex-col justify-between items-center p-4 md:p-8 select-none">
    
    <div class="hidden md:block"></div>

    <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 
                bg-white/10 backdrop-blur-md border border-white/20 
                shadow-2xl rounded-3xl p-6 md:p-12 items-center">
      
      <div class="flex justify-center items-center relative group">
        <div class="absolute w-40 h-40 md:w-64 md:h-64 bg-yellow-400/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-colors duration-500"></div>
        
        <img 
          src="../assets/pokeball-img.png" 
          alt="Pokeball" 
          class="h-44 w-44 md:h-80 md:w-80 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] 
                 animate-bounce [animation-duration:3s] hover:scale-110 hover:rotate-12 transition-transform duration-300 relative z-10 cursor-pointer"
        >
      </div>

      
      <div class="flex flex-col justify-center gap-4 max-w-md mx-auto w-full">
        
       
        <h1 class="text-3xl md:text-5xl text-center font-black tracking-wider 
                   text-yellow-400 drop-shadow-[0_4px_0_#2563eb] uppercase font-mono leading-none">
          Welcome to the<br>
          <span class="text-red-500 drop-shadow-[0_4px_0_#1e3a8a]">Pokémon</span> Quiz
        </h1>
        
       
        <p class="text-sm md:text-base text-gray-100 font-pixel text-center md:text-justify leading-relaxed opacity-95 my-2">
          A new silhouette has appeared! Can you recognize it before it's too late? Tap the correct name and prove your status as a top Trainer.
        </p>
        
       
        <div class="flex flex-col gap-3.5 w-full mt-2">
         
          <router-link 
            to="/pokemon-quiz"
            class="py-3.5 w-full bg-yellow-400 border-3 border-black font-pixel text-xs text-center tracking-wider uppercase text-black font-bold
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            Start Game
          </router-link>

          <!-- Botón How to Play -->
          <router-link 
            to=""
            class="py-3.5 w-full bg-white border-3 border-black font-pixel text-center text-xs tracking-wider uppercase text-black
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            How to Play
          </router-link>

          <!-- Botón Highest Scores -->
          <router-link 
            to=""
            class="py-3.5 w-full bg-white border-3 border-black font-pixel text-xs text-center tracking-wider uppercase text-black
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            Highest Scores
          </router-link>
        </div>

      </div>
    </div>
    
    <!-- FOOTER PERFECTAMENTE ALINEADO ABAJO -->
    <footer class="mt-8 text-center w-full">
      <p class="font-pixel text-[13px] md:text-[15px] text-white tracking-wide uppercase drop-shadow-[0_1.5px_0_rgba(0,0,0,0.8)] opacity-90">
        Powered by the 
        <a href="https://pokeapi.co" target="_blank" class="text-blue-800 underline hover:text-blue-600 transition-colors font-bold drop-shadow-none">
          PokéAPI
        </a>
      </p>
    </footer>

  </div>
</template>

<script setup lang="ts">

</script>
