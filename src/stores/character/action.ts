import { currentCharacter, characters_found } from './state';
import type { characterFoundInterface, characterInterface } from './interface';
import type { bookmarkInterface } from '../bookmark/interface';


// PRIVATE
function addCharacterFound(input: characterFoundInterface) {
  console.log('TEST - addCharacterFound', input.name); // TEST
  characters_found.value.push(input as characterFoundInterface);
};

// EXPORT
export function setCurrentCharacter(input: characterFoundInterface) {
  console.log('TEST - setCurrentCharacter', input.name); // TEST
  currentCharacter.value = input as characterFoundInterface;
};

export function emptyCurrentCharacter() {
  console.log('TEST - emptyCurrentCharacter'); // TEST
  currentCharacter.value = {} as characterFoundInterface;
}

export function onCharacterFound(inputCharacter: characterInterface, inputBookmark: bookmarkInterface) {

  // Request POST /character_found/ (id character & id player)

  // screenSpacePosition missing
  // const width = inputBookmark.screenSpacePosition.topRight.x - inputBookmark.screenSpacePosition.bottomLeft.x;
  // const height = inputBookmark.screenSpacePosition.bottomLeft.y - inputBookmark.screenSpacePosition.topRight.y;
  // const top = inputBookmark.screenSpacePosition.topRight.y;
  // const left = inputBookmark.screenSpacePosition.bottomLeft.x;
  // const callBubble = {
  //   width: width * 0.5,
  //   height: height*0.25,
  //   left: left - width*0.25,
  //   top: top + height*0.125,
  // }
  const characterFound = {
    ...inputCharacter,
    found_date: new Date(),
    screenAreaToBookmarkRatio: inputBookmark.intersectionInfo.screenAreaToBookmarkRatio,
  } as characterFoundInterface;

  if (!characters_found.value.find(c => c.id === characterFound.id)) {
    addCharacterFound(characterFound as characterFoundInterface);
  }

  setCurrentCharacter(characterFound as characterFoundInterface);
};