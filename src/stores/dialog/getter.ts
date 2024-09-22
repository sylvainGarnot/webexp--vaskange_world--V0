import { computed } from 'vue';
import { dialogs } from './state';
import type { dialogInterface } from './interface';
import { closestNearByCharacter } from '../character/getter';


export const dialog = computed(() => {
  if (dialogs && dialogs.value && dialogs.value.length > 0 && closestNearByCharacter && closestNearByCharacter.value && closestNearByCharacter.value.dialog) {
    return dialogs.value.find(d => d.id === closestNearByCharacter.value.dialog) as dialogInterface;
  }
  return null;
})

export const isDialogActive = computed(() => {
  return closestNearByCharacter && closestNearByCharacter.value && closestNearByCharacter.value.screenAreaToBookmarkRatio && closestNearByCharacter.value.screenAreaToBookmarkRatio > 0.2;
})