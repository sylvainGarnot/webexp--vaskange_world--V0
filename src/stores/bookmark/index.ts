import { defineStore } from "pinia";
import { readonly } from 'vue';


import { bookmark, lastBookmark, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import { updateBookmark } from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    bookmark: readonly(bookmark),
    lastBookmark: readonly(lastBookmark),
    innerBookmarks: readonly(innerBookmarks),
    upperBookmarks: readonly(upperBookmarks),

    innerBookmarksSorted: readonly(innerBookmarksSorted),
    upperBookmarksSorted: readonly(upperBookmarksSorted),
    closestInnerBookmark: readonly(closestInnerBookmark),
    closestUpperBookmark: readonly(closestUpperBookmark),

    updateBookmark
  }
})