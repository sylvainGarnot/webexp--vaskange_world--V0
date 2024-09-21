import { character, characters_found } from './state';
import type { characterInterface } from './interface';


// PRIVATE


// EXPORT
export function getCharactersFound() {
  // GET CHARACTER FOUND
  // const response = { }
  // characters_found.value = response;
};

export function updateCharacter(input: characterInterface) {
  character.value = input as characterInterface;
  if (!characters_found.value.find(c => c.id === input.id)) {
    // POST new character_found with input
    // Then :
    characters_found.value.push(input as characterInterface);
  }
};

export function updateCharacterState(input: characterInterface) {
  // UPDATE character_found.STATE
  // Then
  // const response = new state
  // character.value.state = reponse;
  const index = characters_found.value.findIndex(c => c.id === input.id);
  // characters_found.value[index].state = response
};