import { defineStore } from "pinia";
import { readonly } from 'vue';


import { bookmark, lastBookmark, innerBookmarks, upperBookmarks } from './state';
import { updateNearbyBookmarks } from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    bookmark: readonly(bookmark),
    lastBookmark: readonly(lastBookmark),
    innerBookmarks: readonly(innerBookmarks),
    upperBookmarks: readonly(upperBookmarks),

    updateNearbyBookmarks
  }
})