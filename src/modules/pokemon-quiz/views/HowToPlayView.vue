<template >
 <div class="w-full max-w-2xl mx-auto p-4 md:p-6 font-pixel select-none">
    
   
    <h1 class="text-2xl md:text-4xl text-center font-black tracking-widest text-yellow-400 drop-shadow-[0_4px_0_#2563eb] uppercase mb-6">
      How To Play
    </h1>

    <div class="w-full bg-white/10 backdrop-blur-md border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] rounded-sm p-4 md:p-8 min-h-[350px] flex items-center justify-center">
    
      <Transition name="fade" mode="out-in">
     
        <div v-if="currentSlide === 1" key="oak" class="w-full flex flex-col items-center">
          <IntroOakSlide class="w-full" />
        </div>
        
        <div v-else-if="currentSlide === 2" key="battle" class="w-full flex flex-col items-center">
          <BattleMechanicsSlide class="w-full" />
        </div>
  
        <div v-else-if="currentSlide === 3" key="records" class="w-full flex flex-col items-center">
          <ScoringAndHallOfFame class="w-full" />
        </div>

      </Transition>

    </div>

    <!-- BOTONES DE NAVEGACIÓN RETRO ACTUALIZADOS -->
    <div class="flex justify-center w-full py-4 gap-3">
      <button 
        v-for="slide in 3" 
        :key="slide"
        @click="currentSlide = slide"
        :class="[
          'px-3 py-1 text-xs text-white border-2 border-black font-bold font-mono transition-all',
          currentSlide === slide 
            ? 'bg-yellow-400 text-black shadow-none translate-x-0.5 translate-y-0.5' 
            : 'bg-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-800'
        ]"
      >
        {{ slide }}
      </button>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BattleMechanicsSlide from '../components/how-to-play/BattleMechanicsSlide.vue';
import IntroOakSlide from '../components/how-to-play/IntroOakSlide.vue';
import ScoringAndHallOfFame from '../components/how-to-play/ScoringAndHallOfFame.vue';
const currentSlide = ref(1);
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>