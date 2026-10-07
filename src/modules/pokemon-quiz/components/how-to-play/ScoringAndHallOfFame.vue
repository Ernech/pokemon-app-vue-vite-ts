<template>
    <div class="w-full flex flex-col justify-center items-center gap-4">
        
        <table class="w-full text-left border-collapse text-xs md:text-sm bg-gray-600">
            <!-- head -->
            <thead>
                <tr class="border-b-4 border-black text-yellow-400 uppercase tracking-wider text-[11px] md:text-xs">
                    <th class="p-3 text-center w-12">Rank</th>
                    <th class="p-3">Trainer</th>
                    <th class="p-3 text-center">Score</th>
                    <th class="p-3 text-left">Date</th>
                </tr>
            </thead>
            <tbody class="divide-y-2 divide-black/10 text-white font-bold">
                <!-- row 1 -->

                <tr v-for="(score, index) in topScoresMock" :key="score.scoreId" :class="[
                    'hover:bg-white/10 transition-colors',
                    index === 0 ? 'bg-yellow-500/20 text-yellow-300' : '',
                    index === 1 ? 'bg-slate-300/20 text-slate-300' : '',
                    index === 2 ? 'bg-amber-600/15 text-amber-500' : ''
                ]">
                    <th class="p-3 text-center font-black">
                        <span v-if="index === 0">🥇</span>
                        <span v-else-if="index === 1">🥈</span>
                        <span v-else-if="index === 2">🥉</span>
                        <span v-else class="text-gray-400 text-xs">{{ index + 1 }}</span>
                    </th>
                    <td class="p-3 uppercase tracking-wider">{{ score.trainer || 'TRAINER ' }}</td>
                    <td class="p-3 text-center font-mono tracking-widest text-base">{{ score.finalScore }} PTS</td>
                    <td>{{ formatatDate(score.scoreDate) }}</td>
                </tr>
            </tbody>
        </table>
        <div class="w-full max-w-md">
      <div class="text-center p-4 border-2 border-dashed border-neutral-400 text-white text-xs uppercase tracking-widest bg-black/10">
        — High Scores Table Preview —
      </div>
    </div>
       <div class="w-full max-w-md bg-white border-4 border-black p-4 rounded-none 
                shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] text-center text-xs md:text-sm leading-relaxed uppercase tracking-wider">
      
      <!-- Icono decorativo del Salón de la Fama -->
      <span class="block text-2xl mb-1 animate-pulse">👑</span>
      
      <p>
        "Your greatest triumphs are immortalized here! Only the <span class="text-blue-600 font-bold">top 10 records</span> will earn a place in the glorious <span class="text-yellow-500 font-bold">Hall of Fame</span>."
      </p>
      
      <p class="mt-2 text-[10px] text-gray-500 normal-case">
        (Scores are securely saved in your browser's localStorage).
      </p>

    </div>

    <!-- 3. BOTÓN INTERACTIVO PARA FINALIZAR EL TUTORIAL -->
    <button 
      @click="finishTutorial"
      class="mt-2 py-3 px-6 bg-green-600 border-3 border-black text-xs uppercase text-white font-bold tracking-widest
             shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-green-500 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
    >
      Finish Tutorial 🎮
    </button>
    </div>

</template>
<script lang="ts" setup>
import type { PokemonQuizScore } from '../../interfaces/pokemon-quiz-score';
import { useRouter } from 'vue-router';
const router = useRouter();

const topScoresMock: PokemonQuizScore[] = [
    {
        scoreId: "6ccaefc0-e0a9-46a7-89a7-4eb8c5cb0f3f",
        trainer: "Trainer 1",
        finalScore: 25,
        scoreDate: new Date("2026-10-02")

    },
    {
        scoreId: "f05b9fd1-07f0-48ea-8e19-92ecb08ab8d4",
        trainer: "Trainer 2",
        finalScore: 22,
        scoreDate: new Date("2026-05-12")

    },
    {
        scoreId: "c5045970-9632-4f72-8c87-05aaf6d13bb1",
        trainer: "Trainer 3",
        finalScore: 20,
        scoreDate: new Date("2026-06-12")

    },
    {
        scoreId: "3ad7a91f-1b28-40c9-88bc-51187a5f0805",
        trainer: "Trainer 4",
        finalScore: 18,
        scoreDate: new Date("2026-07-15")
    },
    {
        scoreId: "082979d0-c1b3-4a0f-85fa-603d85c72a65",
        trainer: "Trainer 5",
        finalScore: 16,
        scoreDate: new Date("2026-08-22")

    }
]
const formatatDate = (scoreDate: Date): string => {
    if (!scoreDate) return '--/--/----';
    const fecha = new Date(scoreDate);
    // Validamos si la fecha es correcta
    if (isNaN(fecha.getTime())) return '--/--/----';

    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}
const finishTutorial = () => {
  router.push('/');
};
</script>