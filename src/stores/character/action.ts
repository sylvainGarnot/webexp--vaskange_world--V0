import { characters_found, nearByCharacters } from './state';
import type { characterInterface } from './interface';


// PRIVATE
export function setNearByCharacters(input: characterInterface[]) {
  nearByCharacters.value = input as characterInterface[];
};
export function addCharacterFound(input: characterInterface) {
  characters_found.value.push(input as characterInterface);
};

// EXPORT
export function updateCharacter(input: characterInterface[]) {
  setNearByCharacters(input as characterInterface[]);

  for (const inputCharacter of input) {
    if (!characters_found.value.find((c) => c.name === inputCharacter.name)) {
      addCharacterFound(inputCharacter);
    }
  }
};