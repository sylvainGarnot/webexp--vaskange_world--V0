import { defineStore } from "pinia";
import { readonly } from 'vue';


import { nearByCharacters, characters } from './state';
import { addNearByCharacter, removeAllNearByCharaters } from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    nearByCharacters: readonly(nearByCharacters),
    characters: readonly(characters),

    addNearByCharacter,
    removeAllNearByCharaters,
  }
})