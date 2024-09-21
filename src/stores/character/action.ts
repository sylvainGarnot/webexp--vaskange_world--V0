import { character, characters } from './state';
import type { characterInterface } from './interface';


// PRIVATE


// EXPORT
export function updateCharacter(input: characterInterface) {
  character.value = JSON.parse(JSON.stringify(input)) as characterInterface;
  character.value.found = true;
  character.value.found_date = new Date;

  const index = characters.value.findIndex(c => c.id === input.id);
  if (index >= 0 && !characters.value[index].found) {
      characters.value[index].found = true;
      characters.value[index].found_date = new Date;
  }
};