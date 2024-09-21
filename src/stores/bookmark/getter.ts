import { computed } from 'vue';
import { innerBookmarks, upperBookmarks } from './state';
import type { bookmarkInterface } from './interface';


export const innerBookmarksSorted = computed(() => {
  const result = Array.from(innerBookmarks.value) as bookmarkInterface[];
  return result.sort((a, b) => a.intersectionInfo.screenAreaToBookmarkRatio - b.intersectionInfo.screenAreaToBookmarkRatio) as bookmarkInterface[];
})

export const upperBookmarksSorted = computed(() => {
  const result = Array.from(upperBookmarks.value) as bookmarkInterface[];
  return result.sort((a, b) => b.intersectionInfo.visibleBookmarkRatio - a.intersectionInfo.visibleBookmarkRatio) as bookmarkInterface[];
})

export const closestInnerBookmark = computed(() => {
  return innerBookmarksSorted.value[innerBookmarksSorted.value.length - 1] as bookmarkInterface;
})

export const closestUpperBookmark = computed(() => {
  return upperBookmarksSorted.value[0];
})
