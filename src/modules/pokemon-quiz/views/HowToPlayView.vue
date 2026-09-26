<template >
 <div class="w-full max-w-2xl mx-auto p-4 md:p-6 font-pixel select-none">
    
    <!-- TÍTULO RETRO -->
    <h1 class="text-2xl md:text-4xl text-center font-black tracking-widest text-yellow-400 drop-shadow-[0_4px_0_#2563eb] uppercase mb-6">
      How To Play
    </h1>

    <!-- CONTENEDOR DEL CARRUSEL DE DAISYUI -->
    <div class="carousel w-full bg-white/10 backdrop-blur-md border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] rounded-sm p-6 md:p-12">
      
      <!-- Slide 1: Introducción Profesor Oak -->
      <div id="slide1" class="carousel-item w-full flex flex-col items-center">
        <IntroOakSlide />
        
      </div>
      
      <!-- Slide 2: Mecánica de Combate y Vidas -->
      <div id="slide2" class="carousel-item w-full flex flex-col items-center">
        <!-- <BattleMechanicsSlide /> -->
        <h2 class="text-white text-center">Slide 2: Gameplay & Lives System</h2>
      </div>
      
      <!-- Slide 3: Fin del Juego y Salón de la Fama -->
      <div id="slide3" class="carousel-item w-full flex flex-col items-center">
        <!-- <GameOverRecordsSlide /> -->
        <h2 class="text-white text-center">Slide 3: Scoring & Hall of Fame</h2>
      </div>

    </div>

    <!-- BOTONES DE NAVEGACIÓN COMPARTIDOS (DaisyUI / Links abajo) -->
    <div class="flex justify-center w-full py-4 gap-2">
      <a href="#slide1" class="btn btn-xs bg-black text-white border border-white/20 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">1</a> 
      <a href="#slide2" class="btn btn-xs bg-black text-white border border-white/20 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">2</a> 
      <a href="#slide3" class="btn btn-xs bg-black text-white border border-white/20 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">3</a>
    </div>

  </div>
</template>
<script setup lang="ts">
import IntroOakSlide from '../components/how-to-play/IntroOakSlide.vue';

</script>