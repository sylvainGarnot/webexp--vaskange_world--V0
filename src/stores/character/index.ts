import { defineStore } from "pinia";
import { readonly } from 'vue';


import { character, characters_found, characters } from './state';
import { updateCharacter } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    character: readonly(character),
    characters_found: readonly(characters_found),
    characters: readonly(characters),

    updateCharacter,
  }
})