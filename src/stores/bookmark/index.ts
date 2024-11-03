import { defineStore } from "pinia";
import { readonly } from 'vue'; // TEST


import { currentBookmark, zoomIn } from './state'; // TEST
import { updateBookmarkHasLocation , updateBookmarkHasCharacter } from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    currentBookmark: readonly(currentBookmark), // TEST
    zoomIn: readonly(zoomIn), // TEST

    updateBookmarkHasLocation,
    updateBookmarkHasCharacter,
  }
})