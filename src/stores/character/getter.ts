import { computed } from 'vue';
import { characters, characters_found } from './state';
import type { characterFoundInterface } from './interface';


export const charactersName = computed(() => {
  return characters.value.map(c => c.name);
})

export const characters_hidden_found = computed(() => {
  const result = [] as characterFoundInterface[]
  for (let index = 0; index < characters_found.value.length; index++) {
    if (characters_found.value[index].is_hidden) {
      result.push(characters_found?.value[index])
    }
  }
  return result;
})