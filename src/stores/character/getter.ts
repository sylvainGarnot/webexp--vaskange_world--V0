import { computed } from 'vue';
import { nearByCharacters } from './state';
import type { characterFoundInterface } from './interface';



export const closestCharacter = computed(() => {
  let result = null;
  for (const character of nearByCharacters.value as characterFoundInterface[]) {
    if (result) {
      if (result.screenAreaToBookmarkRatio < character.screenAreaToBookmarkRatio) {
        result = character as characterFoundInterface;
      }
    } else {
      result = character as characterFoundInterface;
    }
  }
  return result as characterFoundInterface;;
})