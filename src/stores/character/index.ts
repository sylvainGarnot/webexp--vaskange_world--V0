import { defineStore } from "pinia";
import { readonly } from 'vue';


import { nearByCharacters, characters_found, characters } from './state';
import { closestCharacter } from './getter';
import { updateCharacter } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    nearByCharacters: readonly(nearByCharacters),
    characters_found: readonly(characters_found),
    characters: readonly(characters),

    closestCharacter: readonly(closestCharacter),

    updateCharacter,
  }
})