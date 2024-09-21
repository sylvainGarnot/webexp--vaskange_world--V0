import { defineStore } from "pinia";
import { readonly } from 'vue';


import { character, characters } from './state';
import { updateCharacter } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    character: readonly(character),
    characters: readonly(characters),

    updateCharacter,
  }
})