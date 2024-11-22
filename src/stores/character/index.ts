import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentCharacter, characters_found, characters } from './state';
import { charactersName, characters_hidden, characters_hidden_found, charactersFoundId, characters_found_sorted_by_date, currentCharacterDialog, hasCurrentCharacterItemToGive, isCurrentCharacterItemToGiveGiven } from './getter';
import { emptyCurrentCharacter, onCharacterFound, setCharacterFoundFromCookies} from './action';


export const useCharacterStore = defineStore("Character", () => {
  
  return {
    currentCharacter: readonly(currentCharacter),
    characters_found: readonly(characters_found),
    characters: readonly(characters),

    charactersName: readonly(charactersName),
    characters_hidden: readonly(characters_hidden),
    characters_hidden_found: readonly(characters_hidden_found),
    charactersFoundId: readonly(charactersFoundId),
    characters_found_sorted_by_date: readonly(characters_found_sorted_by_date),
    currentCharacterDialog: readonly(currentCharacterDialog),
    hasCurrentCharacterItemToGive: readonly(hasCurrentCharacterItemToGive),
    isCurrentCharacterItemToGiveGiven: readonly(isCurrentCharacterItemToGiveGiven),

    onCharacterFound,
    emptyCurrentCharacter,
    setCharacterFoundFromCookies,
  }
})