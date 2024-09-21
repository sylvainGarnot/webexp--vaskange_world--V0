import { computed } from 'vue';
import { currentMusic } from './state';

export const currentMusicName = computed(() => {
  return currentMusic.value.src as string;
})