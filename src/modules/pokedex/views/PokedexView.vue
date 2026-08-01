<template>
    <h1 class="title">Listado de pokemon</h1>
    <div class="container">
        <PokemonsList/>
        <PokemonInfo/>
    </div>
    
</template>
<script setup lang="ts">
import PokemonInfo from '../components/PokemonInfo.vue';
import PokemonsList from '../components/PokemonsList.vue';
import { usePokedex } from '../composables/usePokedex.ts';
const {getCurrentPokemons} = usePokedex();
getCurrentPokemons();
</script>
<style scoped>
 .container{
    width: 90%;
    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    column-gap: 50px;
    margin: auto;

 } 
/*
.container{
    width: 90%;
    display:flex;
    flex-direction: row;
    gap: 50px;
}  */
.title{
    text-align: center;
}
</style>
