import { defineStore } from "pinia";


// import { currentBookmark, zoomIn } from './state';
import { updateBookmarkHasLocation , updateBookmarkHasCharacter} from './action';


export const useBookmarkStore = defineStore("Bookmark", () => {
  
  return {
    // currentBookmark: readonly(currentBookmark),
    // zoomIn: readonly(zoomIn),

    updateBookmarkHasLocation,
    updateBookmarkHasCharacter,
  }
})