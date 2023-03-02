<template>
  <div class="container mx-auto px-4 w-full md:w-2/3">
    <h1 class="font-rampart font-black tracking-tight text-2xl md:text-5xl">
      StoryTeq Search Challenge
    </h1>

    <div class="flex mb-12">
      <SearchCities></SearchCities>
    </div>

    <div class="flex mb-12">
      <SearchBooks></SearchBooks>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBooks from "@/components/SearchBooks.vue";
import SearchCities from "@/components/SearchCities.vue";
</script>