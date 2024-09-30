import { defineStore } from "pinia";
import { readonly } from 'vue';


import { updateBookmark } from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    updateBookmark
  }
})