import { computed } from 'vue';
import { characters } from './state';


export const charactersName = computed(() => {
  return characters.value.map(c => c.name);
})