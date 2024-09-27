import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentBookmark, zoomIn } from './state';
import { updateBookmark } from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    currentBookmark: readonly(currentBookmark),
    zoomIn: readonly(zoomIn),

    updateBookmark
  }
})