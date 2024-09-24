import { characters_found, nearByCharacters } from './state';
import type { characterFoundInterface } from './interface';


// PRIVATE
export function setNearByCharacters(input: characterFoundInterface[]) {
  nearByCharacters.value = input as characterFoundInterface[];
};
export function addCharacterFound(input: characterFoundInterface) {
  characters_found.value.push(input as characterFoundInterface);
};

// EXPORT
export function updateCharacter(input: characterFoundInterface[]) {
  setNearByCharacters(input as characterFoundInterface[]);
  
  for (const inputCharacter of input as characterFoundInterface[]) {
    if (!characters_found.value.find((c) => c.name === inputCharacter.name)) {
      addCharacterFound(inputCharacter as characterFoundInterface);
    }
  }
};