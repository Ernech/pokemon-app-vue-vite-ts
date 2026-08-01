<template>
    <h1 v-if="!pokemon">Hold on please...</h1>

    <div v-else>
        <h1>Who's this pokemon?</h1>

        <PokemonPicture />

        <PokemonOptions />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                New Game
            </button>
        </template>

    </div>
</template>
<!-- 
<script src="./PokemonPage.ts"/> -->
<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemons } from '../composables/usePokemonsForQuiz';


const { pokemon, showAnswer, message,
    mixPokemonArray, newGame } = usePokemons();

mixPokemonArray();
</script>
