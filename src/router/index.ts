import {  createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PokemonQuizView from '../modules/pokemon-quiz/views/PokemonQuizView.vue'
import PokedexView from '../modules/pokedex/views/PokedexView.vue'
import HigestScoresView from '../modules/pokemon-quiz/views/HigestScoresView.vue'
import HowToPlayView from '../modules/pokemon-quiz/views/HowToPlayView.vue'




const routes:Array<RouteRecordRaw> = [
  { 
    path: '/', 
    name:'Home',
    component: HomeView 
  },
  { 
    path: '/pokemon-quiz', 
    name:'Pokemon Quiz',
    component: PokemonQuizView 
  },
  { 
    path: '/pokedex', 
    name:'Pokedex',
    component: PokedexView 
  },
  {
    path:'/instructions',
    name:'How to Play',
    component:HowToPlayView
  },
  {
    path:'/scores',
    name:'HigestScores',
    component: HigestScoresView
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: HomeView 
  }
  
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})