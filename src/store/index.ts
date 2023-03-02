import { defineStore } from "pinia";
import type { Book } from "@/types/book.type";

export type SearchState = {
  citySearchResults: string[];
  bookSearchResults: Book[];
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      citySearchResults: [],
      bookSearchResults: [],
    } as SearchState),

  actions: {
    updateCityResults(cities: string[]) {
      this.citySearchResults = cities;
    },

    updateBookResults(books: Book[]) {
      this.bookSearchResults = books;
    },
  },
});
