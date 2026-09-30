<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center font-pixel p-2 text-slate-900 select-none">
        <div class="flex justify-center items-center">
            <div
                class="w-full max-w-xs bg-slate-50 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 rounded-none">
                <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-2 text-center">
                    - UI Preview -
                </p>
                <div class="flex justify-between items-center bg-slate-200 border-2 border-black p-2 mb-3">
                    <div class="flex items-center gap-1.5">
                        <span class="text-[11px] text-neutral-700 uppercase tracking-tight">Lives:</span>
                        <div class="flex flex-row">
                            <!-- Replicamos tu lógica exacta pero estática para el ejemplo -->
                            <img v-for="i in 5" :key="i" src="../../../../assets/pokeball.png" alt="Pokeball" :class="[
                                'w-5 h-5 object-contain transition-all duration-500',
                                i <= 3 ? 'brightness-100 opacity-100 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.15)]' : 'brightness-0 opacity-40'
                            ]">
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[12px] text-neutral-700 uppercase tracking-tight block font-bold">Score:
                            12</span>
                    </div>

                </div>
                <div
                    class="bg-emerald-200 border-4 border-neutral-800 rounded-xl p-6 flex justify-center items-center shadow-inner h-40 relative overflow-hidden">

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                        class="brightness-0 w-32 h-32 object-contain" alt="pokemon">
                </div>
                <div class="grid grid-cols-1 gap-3 mt-6">
                    <div v-for="pokemon in examplePokemons">
                        <button
                            class="btn btn-outline btn-lg w-full justify-start border-3 border-neutral-900 bg-base-100 text-neutral-900 font-bold tracking-wide normal-case shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                            :key="pokemon.id" disabled="true">
                            <span class="badge badge-primary mr-3 border-2 border-neutral-900 font-mono upercase">
                                {{ pokemon.name }}
                            </span>
                        </button>

                    </div>
                </div>

            </div>
        </div>
         <div class="flex flex-col gap-4 text-xs md:text-sm uppercase tracking-wide text-white leading-relaxed">
      
      <h3 class="text-yellow-400 font-black text-center md:text-left border-b-2 border-dashed border-white/20 pb-2">
        Battle Rules
      </h3>

      <!-- Lista de ítems punchy sin números, agrupados por iconos -->
      <ul class="flex flex-col gap-3.5">
        <li class="flex items-start gap-2.5">
          <span class="text-red-500 text-base select-none">👤</span>
          <p class="text-justify">
            A mysterious shadow will appear inside the arena. Look closely at the shapes.
          </p>
        </li>
        
        <li class="flex items-start gap-2.5">
          <span class="text-yellow-400 text-base select-none">🔴</span>
          <p class="text-justify">
            You start with <span class="text-yellow-400 font-bold">5 Pokéball lives</span>. Every mistake turns one grey.
          </p>
        </li>

        <li class="flex items-start gap-2.5">
          <span class="text-blue-400 text-base select-none">🎯</span>
          <p class="text-justify">
            Pick the correct name from the 4 options to secure <span class="text-blue-400 font-bold">+1 Point</span> and reveal its true form.
          </p>
        </li>
      </ul>

    </div>
    </div>
</template>
<script lang="ts" setup>
import type { PokemonForQuiz } from '../../interfaces/poquemon-quiz.interface';


const examplePokemons: PokemonForQuiz[] = [
    {
        id: 16,
        name: 'pidgey',
    },
    {
        id: 25,
        name: 'pikachu',
    },
    {
        id: 33,
        name: 'nidorino'
    },
    {
        id: 82,
        name: 'magneton'
    }
]



</script>