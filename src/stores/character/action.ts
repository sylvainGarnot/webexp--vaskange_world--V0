import { currentCharacter, characters_found } from './state';
import type { currentCharacterInterface, characterFoundInterface, characterInterface } from './interface';
import type { bookmarkInterface } from '../bookmark/interface';

import { setIsDialogActive } from '../dialog/action';


// PRIVATE
function addCharacterFound(input: characterFoundInterface) {
  console.log('TEST - addCharacterFound', input.name); // TEST
  characters_found.value.push(input as characterFoundInterface);
};

// EXPORT
export function setCurrentCharacter(inputCharacterFound: characterFoundInterface, inputBookmark: bookmarkInterface) {
  console.log('TEST - setCurrentCharacter', inputCharacterFound.name); // TEST
  
  const bookmarkWidth = inputBookmark.screenSpacePosition.topRight.x - inputBookmark.screenSpacePosition.bottomLeft.x;
  const bookmarkHeight = inputBookmark.screenSpacePosition.bottomLeft.y - inputBookmark.screenSpacePosition.topRight.y;
  const bookmarkTop = inputBookmark.screenSpacePosition.topRight.y;
  const bookmarkLeft = inputBookmark.screenSpacePosition.bottomLeft.x;
  const callBubble = {
    width: bookmarkWidth * 0.25,
    height: bookmarkHeight*0.125,
    left: bookmarkLeft,
    top: bookmarkTop + bookmarkHeight*0.25,
  }
  const characterFound = {
    ...inputCharacterFound,
    callBubble,
    screenAreaToBookmarkRatio: inputBookmark.intersectionInfo.screenAreaToBookmarkRatio,
  } as currentCharacterInterface;

  currentCharacter.value = characterFound as currentCharacterInterface;
  setIsDialogActive(false);
};

export function emptyCurrentCharacter() {
  // console.log('TEST - emptyCurrentCharacter'); // TEST
  currentCharacter.value = {} as currentCharacterInterface;
  setIsDialogActive(false);
}

export function onCharacterFound(inputCharacter: characterInterface, inputBookmark: bookmarkInterface) {

  // Request POST /character_found/ (id character & id player)

  const characterFound = {
    ...inputCharacter,
    found_date: new Date(),
  } as characterFoundInterface;

  if (!characters_found.value.find(c => c.id === characterFound.id)) {
    addCharacterFound(characterFound as characterFoundInterface);
  }

  setCurrentCharacter(characterFound as characterFoundInterface, inputBookmark as bookmarkInterface);
};