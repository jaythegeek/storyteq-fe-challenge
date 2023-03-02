<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="font-lato bg-gradient-to-br from-blue-200 via-blue-50 to-indigo-400 flex flex-col min-h-screen"
  >
    <nav class="flex justify-center p-4 mb-12">
      <img src="@/assets/logo.png" alt="StoryTeq" class="w-24" />
    </nav>

    <main class="">
      <RouterView />
    </main>
  </div>
</template>