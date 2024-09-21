import { defineStore } from "pinia";
import { readonly } from 'vue';


import { character, characters } from './state';
import { getCharactersFound, updateCharacter, updateCharacterState } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    character: readonly(character),
    characters: readonly(characters),

    getCharactersFound,
    updateCharacter,
    updateCharacterState,
  }
})