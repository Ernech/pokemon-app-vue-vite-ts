<template>
    <div class="pokemon-cart" >
        <img :src="img" :alt="nombre" class="pokemon-cart__img">
        <h2 class="pokemon-cart__number">#{{id}}</h2>
        <h2 class="pokemon-cart__name">{{nombre}}</h2>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    img:{
        type:String,
        required:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    id:{
        type:Number,
        required:true
    }
})
</script>
<style lang="css" scoped>
.pokemon-cart{
    text-align: center;
    max-width: 150px;
    padding: 10px 2px; 
    background-color: #6ae5f0;
    border: 2px #27c4e0 solid;
}
.pokemon-cart__img{
    width: 100px;
    height: 100px;
}
.pokemon-cart__number, .pokemon-cart__name{
    font-size: 15px;
    font-style: normal;
    margin-top: 5px;
    margin-bottom: 0;
}
</style>