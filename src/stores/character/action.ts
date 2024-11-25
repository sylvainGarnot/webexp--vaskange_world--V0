import { currentCharacter, characters_found, characters } from './state';
import { charactersFoundId, hasCurrentCharacterItemToGive, isCurrentCharacterItemToGiveGiven } from './getter'
import type { currentCharacterInterface, characterFoundInterface, characterInterface } from './interface';

import { currentBookmark, zoomIn} from '../bookmark/state';
import { setCurrentBookmark, setZoomIn } from '../bookmark/action';
import type { bookmarkInterface } from '../bookmark/interface';

import { dialogs, isDialogRegleRead } from '../dialog/state';
import { currentDialog } from '../dialog/getter';
import { setIsDialogActive, setIsDialogMentionLegalActive } from '../dialog/action';

import { items_acquired } from '../item/state';

import { cookies } from '../setting/state'
import { postBrowserCookie } from '../setting/action'
import type { cookieInterface } from '../setting/interface'

import { locations_found } from '../location/state'


// PRIVATE
function addCharacterFound(input: characterFoundInterface) {
  console.log('TEST - addCharacterFound', input.name); // TEST
  // characters_found.value.push(input as characterFoundInterface);
  characters_found.value.unshift(input as characterFoundInterface);
  // characters_found.value = [...characters_found.value, input] 
};


// EXPORT SETTER
export function setCurrentCharacter(inputCharacterFound: characterFoundInterface, inputBookmark: bookmarkInterface, inputBookmarks: bookmarkInterface[] = []) {
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
    zoomFactor: inputBookmark.zoomFactor,
  }
  const characterFound = {
    ...inputCharacterFound,
    bookmark,
    screenAreaToBookmarkRatio: inputBookmark.intersectionInfo.screenAreaToBookmarkRatio,
  } as currentCharacterInterface;

  // SET ZOOMIN before setCurrentCharacter
  inputBookmarks = inputBookmarks.sort((a, b) => b.zoomFactor - a.zoomFactor);
  const closestInputBookmark = inputBookmarks[0] as bookmarkInterface;
  if (closestInputBookmark?.zoomFactor) {
    if (currentCharacter?.value?.bookmark?.zoomFactor) {
      if (closestInputBookmark.zoomFactor < currentCharacter.value.bookmark?.zoomFactor) {
        setZoomIn(true);
      } else {
        setZoomIn(false);
      }
    }
    setCurrentBookmark(closestInputBookmark as bookmarkInterface);
  }

  currentCharacter.value = characterFound as currentCharacterInterface;

  if (inputBookmark.zoomFactor < 10 && inputBookmark.intersectionInfo?.visibleBookmarkRatio >= 0.75 && currentDialog.value?.type === 'gift' && currentDialog.value?.openOnZoom && zoomIn.value && hasCurrentCharacterItemToGive.value && !isCurrentCharacterItemToGiveGiven.value) {
    setIsDialogActive(true);
  } else if (inputBookmark.zoomFactor < 10 && inputBookmark.intersectionInfo?.visibleBookmarkRatio >= 0.25 && currentDialog.value?.type.includes('force') && !isDialogRegleRead.value && currentDialog.value?.openOnZoom && zoomIn.value && locations_found.value.length <= 3 && items_acquired.value.length === 0) {
    setIsDialogActive(true);
    // if (currentDialog.value?.type.includes('mention-legal')) {
    //   setIsDialogMentionLegalActive(true)
    // }
  } else {
    setIsDialogActive(false);
  }
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
          onCharacterFound(character as characterInterface, {} as bookmarkInterface, false) // TEST
        }
      }
    }
  }
}

export function onCharacterFound(inputCharacter: characterInterface, inputBookmark: bookmarkInterface, modePost:boolean=true) {

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

  if (inputBookmark && inputBookmark.name) {
    // console.log('onCharacterFound setCurrentCharacter', inputBookmark) // TEST
    setCurrentCharacter(characterFound as characterFoundInterface, inputBookmark as bookmarkInterface);
  }

  if (modePost) {
    // Request POST /character_found/ (id character & id player)
    // POST BROWSER COOKIES
    postBrowserCookie('characters_found', charactersFoundId.value as string[])
  }
};