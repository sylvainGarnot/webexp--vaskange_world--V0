import { computed } from 'vue';
import { locations, locations_found } from './state';
import type { locationInterface } from './interface';


export const locationsName = computed(() => {
  return locations.value.map(l => l.name);
})

export const theHiddenPlace = computed(() => {
  return locations.value.find(l => l.is_hidden) as locationInterface;
})

export const isTheHiddenPlaceFound = computed(() => {
  const result = locations_found.value.find(l => l.name === theHiddenPlace.value.name);
  if (result) {
    return true
  }
  return false
})