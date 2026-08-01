<template>

    <div class="buttons-container"> 
        <button 
            class="buttons-container__button" 
            @click="getPrevPokemons" 
            :disabled="disablePrevButton"
            :class="{disabled:disablePrevButton}">Anterior</button>
        <button 
            class="buttons-container__button" 
            @click="getNextPokemons"  
            :disabled="disableNextButton"
            :class="{disabled:disableNextButton}">Siguiente</button>
    </div>

</template>
<script lang="ts" setup>

import {computed} from 'vue';
import { usePokedex } from '../composables/usePokedex';
const {getNextPokemons,getPrevPokemons,previous,next} = usePokedex();
const disableNextButton=computed(()=>{
    if(next.value){
        return false
    }
    return true;
})
const disablePrevButton=computed(()=>{
    if(previous.value){
        return false
    }
    return true;
})
</script>
<style lang="css" scoped>
    .buttons-container{
        
        margin-top: 30px;
        width: 85%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .buttons-container__button{
        background-color: #3f76cf;
        color: #fff;
        padding: 5px 10px;
        font-size: 15px;
        border-radius: 5px;
        border: 0px;

        
    }
    .buttons-container__button:hover{
        background-color: #5386da;
        
    }
    .buttons-container__button:active{
        background-color: #164797;
        
    }
    .buttons-container__button.disabled {
    background-color: #b7b8b9;
    border-color: #b7b8b9;
}
</style>