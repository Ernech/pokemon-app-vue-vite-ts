<template>
    <h2 v-if="!pokemonsArr || pokemonsArr.length===0">Espere por favor...</h2>

<div v-else class="list-container">
        <form @submit.prevent="searchPokemonByName(pokemonName)">
            <input type="text" placeholder="Buscar pokemon" class="list-container__input" v-model="pokemonName"/>
        </form>
    <div class="list-container__carts">
        <PokemonCart v-for="pokemon in pokemonsArr" 
        :key="pokemon.id" 
        :id="pokemon.id" 
        :img="pokemon.img" 
        :nombre="pokemon.nombre" 
        @click="selectPokemon(pokemon)"/>
    </div>
    <PaginationButtons/>
</div>
</template>
<script lang="ts" setup>
import { usePokedex } from '../composables/usePokedex.ts';
import PaginationButtons from './PaginationButtons.vue';
import PokemonCart from './PokemonCart.vue';

import {ref} from 'vue';
const { pokemonsArr, selectPokemon, searchPokemonByName } = usePokedex();
const pokemonName = ref('');
</script>
<style lang="css" scoped>
    .list-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 25px;
        gap: 25px;
    }
    .list-container__input{
        padding: 10px;
        border: 1px solid #a3a3a3;
        border-radius: 5px;
        width: 75%;
    }
    .list-container__carts{
        display: grid;
        grid-template-columns: repeat(2,50%);
        grid-template-rows: repeat(2,50%);
        row-gap: 10px;
    }
</style>