<template>
    <div class="chat chat-start w-full max-w-xl mx-auto my-4 font-pixel select-none">
  <div class="chat-image avatar">
    <div class="w-24 h-24 rounded-full border-4 border-black bg-slate-100 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
      <img
        alt="Professor Oak Avatar"
        src="../../../../assets/professor-oak.jpg"
      />
    </div>
  </div>
  <div class="chat-bubble bg-white text-black border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)]
              ml-3 p-4 text-xs md:text-sm uppercase tracking-wider leading-relaxed">
              <span class="text-blue-600 block mb-1 font-black">Prof. Oak</span>
    <p class="font-pixel"> "Hello there! Welcome to the world of <span class="text-red-600 font-bold">Pokémon</span>! 
        An exciting silhouette challenge awaits you. Before we begin, make sure to enter your 
        <span class="text-yellow-500 font-bold">Trainer name</span> on the main screen to record your legacy in our Hall of Fame!"
    </p>
    <span class="block text-right text-red-600 font-bold animate-bounce mt-2 text-base">▼</span>
  </div>
</div>
</template>
<script lang="ts" setup>
</script>