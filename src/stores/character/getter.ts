import { computed } from 'vue';
import { characters, characters_found, currentCharacter } from './state';
import type { characterFoundInterface, characterInterface } from './interface';

import { dialogs } from '../dialog/state';
import { items, items_acquired } from '../item/state';
import type { dialogInterface } from '../dialog/interface';


export const charactersName = computed(() => {
  return characters.value.map(c => c.name);
})

export const charactersFoundId = computed(() => {
  return characters_found.value.map(c => c.id) as string[];
})

export const characters_hidden = computed(() => {
  const result = [] as characterInterface[]
  for (let index = 0; index < characters.value.length; index++) {
    if (characters.value[index].is_hidden) {
      result.push(characters?.value[index])
    }
  }
  return result;
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

export const characters_found_sorted_by_date = computed(() => {
  return characters_found.value.sort((a, b) => (a.found_date < b.found_date ? 1 : -1)) as characterFoundInterface[]
})

export const currentCharacterDialog = computed(() => {
  return dialogs.value.find(d => d.id === currentCharacter.value.dialog) as dialogInterface
}) 

export const hasCurrentCharacterItemToGive = computed(() => {
  if (currentCharacterDialog?.value && currentCharacterDialog.value.item_provided) {
    const item = items.value.find(i => i.id === currentCharacterDialog.value.item_provided)
    if (item) {
      return true
    }
  }
  return false
})

export const isCurrentCharacterItemToGiveGiven = computed(() => {
  if (currentCharacterDialog?.value && currentCharacterDialog.value.item_provided) {
    const itemAcquired = items_acquired.value.find(i => i.id === currentCharacterDialog.value.item_provided)
    if (itemAcquired) {
      return true
    }
  }
  return false
})