import { defineStore } from "pinia";
import { readonly } from 'vue'; // TEST


import { currentBookmark } from './state'; // TEST
import { updateBookmarkHasLocation , updateBookmarkHasCharacter } from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    currentBookmark: readonly(currentBookmark), // TEST

    updateBookmarkHasLocation,
    updateBookmarkHasCharacter,
  }
})