import { defineStore } from "pinia";
import { readonly } from 'vue';


import { character, characters_found } from './state';
import { getCharactersFound, updateCharacter, updateCharacterState } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    character: readonly(character),
    characters_found: readonly(characters_found),

    getCharactersFound,
    updateCharacter,
    updateCharacterState,
  }
})