import { computed } from 'vue';
import { locations } from './state';


export const locationsName = computed(() => {
  return locations.value.map(l => l.name);
})