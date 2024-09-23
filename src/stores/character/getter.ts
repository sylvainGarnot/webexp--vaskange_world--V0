import { computed } from 'vue';
import { nearByCharacters } from './state';
import type { characterInterface } from './interface';



export const closestCharacter = computed(() => {
  let result = null;
  for (const character of nearByCharacters.value) {
    if (result) {
      if (result.screenAreaToBookmarkRatio < character.screenAreaToBookmarkRatio) {
        result = character as characterInterface;
      }
    } else {
      result = character as characterInterface;
    }
  }
  return result as characterInterface;;
})