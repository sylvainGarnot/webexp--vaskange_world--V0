import { computed } from 'vue';
import { effect } from './state';

export const effectSrc = computed(() => {
  return effect.value.src as string;
})