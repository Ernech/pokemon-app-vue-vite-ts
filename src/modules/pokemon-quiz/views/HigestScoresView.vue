<template>
    <div class="w-full max-w-3xl mx-auto p-4 md:p-6 font-pixel select-none">
        <h1 class="text-2xl md:text-4xl text-center font-black tracking-widest 
        text-yellow-400 drop-shadow-[0_4px_0_#2563eb] uppercase font-mono my-6
        ">🏆 Hall of Fame 🏆</h1>
    <div class="overflow-x-auto bg-white/10 backdrop-blur-md border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]
    rounded-sm p-2 md:p-4
    ">
      <div v-if="topSocres.length===0" class="text-center p-8 text-white">
    <h2 class="text-sm md:text-base uppercase tracking-wider animate-pulse">No scores found...<br>
     <span class="text-yellow-400 text-xs">Go catch 'em all!</span></h2>
    </div>
  <table v-else class="w-full text-left border-collapse text-xs md:text-sm bg-gray-600">
    <!-- head -->
    <thead >
      <tr class="border-b-4 border-black text-yellow-400 uppercase tracking-wider text-[11px] md:text-xs">
        <th class="p-3 text-center w-12">Rank</th>
        <th class="p-3">Trainer</th>
        <th class="p-3 text-center">Score</th>
        <th class="p-3 text-left">Date</th>
      </tr>
    </thead>
    <tbody class="divide-y-2 divide-black/10 text-white font-bold" 
   >
      <!-- row 1 -->
       
       <tr v-for="(score,index) in topSocres" :key="score.scoreId"
        :class="[
          'hover:bg-white/10 transition-colors',
          index===0 ?  'bg-yellow-500/20 text-yellow-300':'',
          index===1 ?  'bg-slate-300/20 text-slate-300':'',
          index===2 ?  'bg-amber-600/15 text-amber-500':''
        ]">
        <th class="p-3 text-center font-black">
           <span v-if="index === 0">🥇</span>
           <span v-else-if="index === 1">🥈</span>
           <span v-else-if="index === 2">🥉</span>
           <span v-else class="text-gray-400 text-xs">{{ index + 1 }}</span>
        </th>
        <td class="p-3 uppercase tracking-wider" >{{score.trainer || 'TRAINER '}}</td>
        <td class="p-3 text-center font-mono tracking-widest text-base">{{score.finalScore}} PTS</td>
        <td>{{formatatDate( score.scoreDate)}}</td>
      </tr>
     
      
    
    </tbody>
  </table>
</div>
    </div>
</template>
<script lang="ts" setup>
import { usePokemons } from '../composables/usePokemonsForQuiz';

const {getTopScores} = usePokemons()
const topSocres = getTopScores();

const formatatDate=(scoreDate:Date):string=>{
  if (!scoreDate) return '--/--/----';
  const fecha = new Date(scoreDate);
  // Validamos si la fecha es correcta
  if (isNaN(fecha.getTime())) return '--/--/----';
  
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const anio = fecha.getFullYear();
  
  return `${dia}/${mes}/${anio}`;
}

</script>