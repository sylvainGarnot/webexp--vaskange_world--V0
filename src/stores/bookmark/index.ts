import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentBookmark, zoomIn, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import { updateBookmark } from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    currentBookmark: readonly(currentBookmark),
    zoomIn: readonly(zoomIn),
    innerBookmarks: readonly(innerBookmarks),
    upperBookmarks: readonly(upperBookmarks),

    innerBookmarksSorted: readonly(innerBookmarksSorted),
    upperBookmarksSorted: readonly(upperBookmarksSorted),
    closestInnerBookmark: readonly(closestInnerBookmark),
    closestUpperBookmark: readonly(closestUpperBookmark),

    updateBookmark
  }
})