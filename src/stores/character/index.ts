import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentCharacter, characters_found, characters } from './state';
import { emptyCurrentCharacter, onCharacterFound } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    currentCharacter: readonly(currentCharacter),
    characters_found: readonly(characters_found),
    characters: readonly(characters),

    onCharacterFound,
    emptyCurrentCharacter,
  }
})