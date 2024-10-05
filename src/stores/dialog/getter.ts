import { computed } from 'vue';
import { dialogs } from './state';
import type { dialogInterface } from './interface';
import { currentCharacter } from '../character/state';


export const currentDialog = computed(() => {
  if (dialogs && dialogs.value && dialogs.value.length > 0 && currentCharacter && currentCharacter.value && currentCharacter.value.dialog) {
    return dialogs.value.find(d => d.id === currentCharacter.value.dialog) as dialogInterface;
  }
  return null;
})

export const isCallDialogActive = computed(() => {
  return (currentCharacter && currentCharacter.value && currentCharacter.value.name) ? true : false;
})