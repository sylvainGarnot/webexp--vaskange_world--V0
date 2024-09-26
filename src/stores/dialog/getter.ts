import { computed } from 'vue';
import { dialogs } from './state';
import type { dialogInterface } from './interface';
import { character } from '../character/state';


export const dialog = computed(() => {
  if (dialogs && dialogs.value && dialogs.value.length > 0 && character && character.value && character.value.dialog) {
    return dialogs.value.find(d => d.id === character.value.dialog) as dialogInterface;
  }
  return null;
})

export const isDialogActive = computed(() => {
  return character && character.value && character.value.screenAreaToBookmarkRatio && character.value.screenAreaToBookmarkRatio > 0.2;
})