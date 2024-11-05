import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentCharacter, characters_found, characters } from './state';
import { charactersName, characters_hidden_found } from './getter';
import { emptyCurrentCharacter, onCharacterFound } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    currentCharacter: readonly(currentCharacter),
    characters_found: readonly(characters_found),
    characters: readonly(characters),

    charactersName: readonly(charactersName),
    characters_hidden_found: readonly(characters_hidden_found),

    onCharacterFound,
    emptyCurrentCharacter,
  }
})