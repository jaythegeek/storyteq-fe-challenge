<template>
  <div class="w-full my-12">
    <form class="w-full mb-4">
      <input
        v-model="searchTerm"
        type="text"
        name="books search input"
        id="books-search-input"
        class="w-full px-4 py-3 bg-white bg-opacity-30 rounded-xl text-xl"
        autofocus
        placeholder="Search for books by title or author..."
      />
    </form>

    <ul
      class="bg-white rounded-xl p-4 bg-opacity-50 grid grid-cols-2 md:grid-cols-4 gap-8"
      v-if="bookSearchResults.length > 0"
    >
      <li v-for="b in bookSearchResults" :key="b.title" class="w-full">
        <div class="flex w-full">
          <img
            :src="'https://loremflickr.com/g/320/240/' + b.title"
            :alt="b.title"
            class="rounded-lg w-full h-auto"
          />
        </div>
        <div class="text-xl font-bold uppercase font-rampart mt-2">
          {{ b.title }} by {{ b.author }}
        </div>
      </li>
    </ul>

    <!--  -->

    <div
      v-if="bookSearchResults.length === 0"
      class="font-rampart bg-blue-200 rounded-xl p-4 bg-opacity-50 flex flex-col justify-center items-center py-12 px-4"
    >
      <div class="uppercase tracking-wider text-xl text-blue-800">
        No books found
      </div>
      <div class="mt-4 text-blue-800" v-if="searchTerm.length < 3">
        Try searching with 3 or more characters...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useMainStore } from "@/store";
import { books } from "@/data";

export default defineComponent({
  setup() {
    const store = useMainStore();
    const bookSearchResults = computed(() => store.bookSearchResults);

    const searchTerm = ref("");

    watch(searchTerm, (v) => {
      if (v.length > 2) {
        store.updateBookResults(
          books.filter(
            (book) =>
              book.title.toLowerCase().includes(v.toLowerCase()) ||
              book.author.toLowerCase().includes(v.toLowerCase())
          )
        );
      }

      if (v.length === 0) {
        store.updateBookResults([]);
      }
    });

    return {
      bookSearchResults,
      searchTerm,
    };
  },
});
</script>

<style scoped></style>
