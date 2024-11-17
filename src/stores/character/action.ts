import { currentCharacter, characters_found, characters } from './state';
import { charactersFoundId } from './getter'
import type { currentCharacterInterface, characterFoundInterface, characterInterface } from './interface';

import type { bookmarkInterface } from '../bookmark/interface';

import { dialogs } from '../dialog/state';
import { setIsDialogActive } from '../dialog/action';

import { items_acquired } from '../item/state';

import { cookies } from '../setting/state'
import { postBrowserCookie } from '../setting/action'
import type { cookieInterface } from '../setting/interface'


// PRIVATE
function addCharacterFound(input: characterFoundInterface) {
  console.log('TEST - addCharacterFound', input.name); // TEST
  characters_found.value.push(input as characterFoundInterface);
};


// EXPORT SETTER
export function setCurrentCharacter(inputCharacterFound: characterFoundInterface, inputBookmark: bookmarkInterface) {
  console.log('TEST - setCurrentCharacter', inputCharacterFound.name); // TEST
  
  const bookmarkWidth = inputBookmark.screenSpacePosition.topRight.x - inputBookmark.screenSpacePosition.bottomLeft.x;
  const bookmarkHeight = inputBookmark.screenSpacePosition.bottomLeft.y - inputBookmark.screenSpacePosition.topRight.y;
  const bookmarkTop = inputBookmark.screenSpacePosition.topRight.y;
  const bookmarkLeft = inputBookmark.screenSpacePosition.bottomLeft.x;
  const bookmark = {
    width: bookmarkWidth,
    height: bookmarkHeight,
    left: bookmarkLeft,
    top: bookmarkTop,
  }
  const characterFound = {
    ...inputCharacterFound,
    bookmark,
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

export function setCharacterFoundFromCookies() {
  const cookieCharacterFound = cookies.value.find(c => c.key === 'characters_found') as cookieInterface
  if (cookieCharacterFound) {
    
    const cookieCharacterFoundIds = cookieCharacterFound.values as string[]
    if (cookieCharacterFoundIds && cookieCharacterFoundIds.length > 0) {
      for (let index = 0; index < cookieCharacterFoundIds.length; index++) {
        const character = characters.value.find(l => l.id === cookieCharacterFoundIds[index]) as characterInterface
        if (character) {
          onCharacterFound(character as characterInterface, {} as bookmarkInterface)
        }
      }
    }
  }
}

export function onCharacterFound(inputCharacter: characterInterface, inputBookmark: bookmarkInterface) {

  const characterFound = {
    ...inputCharacter,
    found_date: new Date(),
    itemToAcquired: false,
    itemAcquired: false,
  } as characterFoundInterface;

  if (!characters_found.value.find(c => c.id === characterFound.id)) {

    const characterFoundDialog = dialogs.value.find(d => d.id === characterFound.dialog)
    if (characterFoundDialog && characterFoundDialog.item_provided) {
      characterFound.itemToAcquired = true

      const itemAcquired = items_acquired.value.find(i => i.id === characterFoundDialog.item_provided)
      if (itemAcquired) {
        characterFound.itemAcquired = true
      }
    }

    addCharacterFound(characterFound as characterFoundInterface);
  }

  if (inputBookmark && inputBookmark.id) {
    console.log('NONONONONON', inputBookmark) // TEST
    setCurrentCharacter(characterFound as characterFoundInterface, inputBookmark as bookmarkInterface);
  }

  // Request POST /character_found/ (id character & id player)
  // POST BROWSER COOKIES
  postBrowserCookie('characters_found', charactersFoundId.value as string[])
};