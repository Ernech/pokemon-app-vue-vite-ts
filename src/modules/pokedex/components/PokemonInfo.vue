<template>
    
    <div class="info-container">
        <template v-if="selectedPokemon && selectedPokemon.id>0">
            <img :src="selectedPokemon.img" :alt="selectedPokemon.nombre"
            class="info-container__img">
        <h2 class="info-container__number">#{{selectedPokemon.id}}</h2>
        <h2 class="info-container__name">{{selectedPokemon.nombre}}</h2>
        <h3 class="info-container__data">Types</h3>
        <span class="info-container__value">{{types}}</span>

        <h3 class="info-container__data">Peso</h3>
        <span class="info-container__value">{{selectedPokemon.peso}}Kg.</span>
        <h3 class="info-container__data">Sprites</h3>
        <div class="sprites-container">
            <img v-for="(sprite, key) in selectedPokemon.sprites" :src="sprite" :key="sprite"
                :alt="'Sprite ' + key" class="sprites-container__img">
        </div>
        <h3 class="info-container__data">Movimientos</h3>
        <span class="info-container__data">{{movements}}</span>
        </template>
        <template v-else-if="!selectedPokemon">
            <h2>Seleccione un pokemon</h2>
        </template>
        <template v-else-if="selectedPokemon && selectedPokemon.id===-1">
            <h2>No se encontró el pokemon</h2>
        </template>
    </div>
</template>
<script lang="ts" setup>

import {computed} from 'vue';
import { usePokedex } from '../composables/usePokedex';
const {selectedPokemon} =  usePokedex();
const types = computed(()=>{
    return selectedPokemon.value?.tipos.join(', ');
}) 

const movements = computed(()=>{
    return selectedPokemon.value?.movimientos.join(', ');
}) 
</script>
<style lang="css">
.info-container {
    margin: auto;
    padding: 10px 5px;
    max-width: 300px;
    min-width: 250px;
    background-color: #cecece;
    border: 2px #c3c3c3 solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-container__img {
    width: 100px;
    height: 100px;
    margin: auto;
}

.info-container__name,
.info-container__number {
    font-size: 18px;
    font-style: normal;
    margin-top: 5px;
    margin-bottom: 0;
    text-align: center;
}

.info-container__data {
    font-size: 15px;
    font-style: bold;
    margin-top: 5px;
    margin-bottom: 0;
}

.info-container__value {
    font-size: 15px;
    font-style: normal;
    margin-top: 5px;
    margin-bottom: 0;
}

.sprites-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

}

.sprites-container__img {
    width: 50px;
    height: 50px;
    border-radius: 100px;

}</style>