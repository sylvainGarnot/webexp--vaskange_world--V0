import { currentCharacter, characters_found, characters } from './state';
import { charactersFoundWithItemId, hasCurrentCharacterItemToGive, isCurrentCharacterItemToGiveGiven, characters_hidden, characters_hidden_found } from './getter'
import type { currentCharacterInterface, characterFoundInterface, characterInterface } from './interface';

import { currentBookmark, zoomIn} from '../bookmark/state';
import { setCurrentBookmark, setZoomIn } from '../bookmark/action';
import type { bookmarkInterface } from '../bookmark/interface';

import { dialogs } from '../dialog/state';
import { currentDialog } from '../dialog/getter';
import { setIsDialogActive } from '../dialog/action';

import { items_acquired } from '../item/state';

import { cookies } from '../setting/state'
import { postBrowserCookie } from '../setting/action'
import type { cookieInterface } from '../setting/interface'

import { locations_found } from '../location/state'
// import { setItemAcquiredFromCookies } from '../item/action';

import { apiPostAvancementUser } from '@/api/post';


// PRIVATE
function addCharacterFound(input: characterFoundInterface) {
  // console.log('TEST - addCharacterFound', input.name); // TEST
  // characters_found.value.push(input as characterFoundInterface);
  characters_found.value.unshift(input as characterFoundInterface);
  // characters_found.value = [...characters_found.value, input]

  // Request POST /character_found/ (id character & id player)
  // ne marchera pas avec le systeme de récupération de cookies
  if (input.is_hidden) {
    if (characters_hidden_found.value.length === 1) {
      apiPostAvancementUser('premier-easter')
    } else if (characters_hidden_found.value.length === characters_hidden.value.length) {
      apiPostAvancementUser('dernier-easter')
    }
  }
};


// EXPORT SETTER
export function setCurrentCharacter(inputCharacterFound: characterFoundInterface, inputBookmark: bookmarkInterface, inputBookmarks: bookmarkInterface[] = []) {
  // console.log('TEST - setCurrentCharacter', inputCharacterFound.name); // TEST
  
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

  if (inputBookmark.zoomFactor < 13.5 && inputBookmark.intersectionInfo?.visibleBookmarkRatio >= 0.25 && currentDialog.value?.type === 'gift' && currentDialog.value?.openOnZoom && hasCurrentCharacterItemToGive.value && !isCurrentCharacterItemToGiveGiven.value) {
    setIsDialogActive(true);
  } else if (inputBookmark.zoomFactor < 10 && inputBookmark.intersectionInfo?.visibleBookmarkRatio >= 0.25 && currentDialog.value?.type.includes('force') && !isDialogRegleRead.value && currentDialog.value?.openOnZoom && locations_found.value.length < 3 && items_acquired.value.length === 0) {
    setIsDialogActive(true);
    setIsDialogActive(false);
  }
};

export function emptyCurrentCharacter() {
  // console.log('TEST - emptyCurrentCharacter'); // TEST
  currentCharacter.value = {} as currentCharacterInterface;
  setIsDialogActive(false);
}

export function setCharacterFoundFromCookies() {
  // console.log('BUG setCharacterFoundFromCookies 00') // TEST
  const cookieCharacterFound = cookies.value.find(c => c.key === 'characters_found') as cookieInterface
  // console.log('BUG setCharacterFoundFromCookies 01') // TEST
  if (cookieCharacterFound) {
    // console.log('BUG setCharacterFoundFromCookies 02') // TEST
    
    const cookieCharacterFoundIds = cookieCharacterFound.values as string[]
    // console.log('BUG setCharacterFoundFromCookies 03') // TEST
    if (cookieCharacterFoundIds && cookieCharacterFoundIds.length > 0) {
      // console.log('BUG setCharacterFoundFromCookies 04') // TEST
      for (let index = 0; index < cookieCharacterFoundIds.length; index++) {
        // console.log('BUG setCharacterFoundFromCookies 05') // TEST
        const character = characters.value.find(l => l.id === cookieCharacterFoundIds[index]) as characterInterface
        // console.log('BUG setCharacterFoundFromCookies 06') // TEST
        if (character) {
          // console.log('BUG setCharacterFoundFromCookies 07') // TEST
          onCharacterFound(character as characterInterface, {} as bookmarkInterface, false)
          // console.log('BUG setCharacterFoundFromCookies 07b') // TEST
        }
      }
      // console.log('BUG setCharacterFoundFromCookies 08') // TEST
      // setItemAcquiredFromCookies()
      // console.log('BUG setCharacterFoundFromCookies 09') // TEST
    }
  }
  // console.log('BUG setCharacterFoundFromCookies 999') // TEST
}

export function onCharacterFound(inputCharacter: characterInterface, inputBookmark: bookmarkInterface, modePost:boolean=true) {

  // console.log('BUG onCharacterFound 00') // TEST
  const characterFound = {
    ...inputCharacter,
    found_date: new Date(),
    itemToAcquired: false,
    itemAcquired: false,
  } as characterFoundInterface;

  // console.log('BUG onCharacterFound 01') // TEST
  if (!characters_found.value.find(c => c.id === characterFound.id)) {

    // console.log('BUG onCharacterFound 02') // TEST
    const characterFoundDialog = dialogs.value.find(d => d.id === characterFound.dialog)
    // console.log('BUG onCharacterFound 03') // TEST
    if (characterFoundDialog && characterFoundDialog.item_provided) {
      // console.log('BUG onCharacterFound 04') // TEST
      characterFound.itemToAcquired = true

      // console.log('BUG onCharacterFound 05') // TEST
      const itemAcquired = items_acquired.value.find(i => i.id === characterFoundDialog.item_provided)
      // console.log('BUG onCharacterFound 06') // TEST
      if (itemAcquired) {
        // console.log('BUG onCharacterFound 07') // TEST
        characterFound.itemAcquired = true
        // console.log('BUG onCharacterFound 08') // TEST
      }
    }

    // console.log('BUG onCharacterFound 09') // TEST
    addCharacterFound(characterFound as characterFoundInterface);
    // console.log('BUG onCharacterFound 10') // TEST
  }

  if (inputBookmark && inputBookmark.name) {
    // console.log('BUG onCharacterFound 11') // TEST
    // console.log('onCharacterFound setCurrentCharacter', inputBookmark) // TEST
    setCurrentCharacter(characterFound as characterFoundInterface, inputBookmark as bookmarkInterface);
    // console.log('BUG onCharacterFound 12') // TEST
  }

  // BUG non résolu LOAD COOKIE avec des personnages cachés
  // use charactersFoundNonHiddenId
  // BUG lorsqu'on recharge plusieurs fois
  // tentative d'utilisation uniquement de personnage avec item
  // use charactersFoundWithItemId
  // console.log('BUG onCharacterFound 13') // TEST
  if (modePost) {
    // console.log('BUG onCharacterFound 14') // TEST
    // POST BROWSER COOKIES
    // postBrowserCookie('characters_found', charactersFoundWithItemId.value as string[])
    // console.log('BUG onCharacterFound 15') // TEST
  }
  // console.log('BUG onCharacterFound 999') // TEST
};