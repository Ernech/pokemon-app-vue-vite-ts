<template>
    <div class="w-full p-4 md:p-3">
        <h1 class="text-center">Your higest scores</h1>
        <div class="overflow-x-auto">
    <div v-if="topSocres.length===0">
    <h2>No scores</h2>
    </div>
  <table v-else class="table bg-white">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Trainer</th>
        <th>Score</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
       
       <tr v-for="(score,index) in topSocres" :key="score.scoreId">
        <th>{{index+1}}</th>
        <td>{{score.trainer}}</td>
        <td>{{score.finalScore}}</td>
        <td>{{score.scoreDate}}</td>
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

</script>