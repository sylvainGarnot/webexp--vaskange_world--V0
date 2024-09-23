import { computed } from 'vue';
import { dialogs } from './state';
import type { dialogInterface } from './interface';
import { closestCharacter } from '../character/getter';


export const dialog = computed(() => {
  if (dialogs && dialogs.value && dialogs.value.length > 0 && closestCharacter && closestCharacter.value && closestCharacter.value.dialog) {
    return dialogs.value.find(d => d.id === closestCharacter.value.dialog) as dialogInterface;
  }
  return null;
})

export const isDialogActive = computed(() => {
  return closestCharacter && closestCharacter.value && closestCharacter.value.screenAreaToBookmarkRatio && closestCharacter.value.screenAreaToBookmarkRatio > 0.2;
})