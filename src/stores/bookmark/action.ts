import { currentBookmark, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import type { bookmarkInterface } from './interface';

import { currentLocation, locations, locations_found } from '../location/state';
import { onLocationFound, setCurrentLocation } from '../location/action';
import type { locationInterface, locationFoundInterface } from '../location/interface';

import { characters, character, characters_found } from '../character/state';
import { updateCharacter } from '../character/action';
import type { characterFoundInterface } from '../character/interface';


// PRIVATE
function setCurrentBookmark(input: bookmarkInterface) {
  console.log('TEST - setCurrentBookmark', input.name); // TEST
  currentBookmark.value = input as bookmarkInterface;
};

function setInnerBookmarks(input: bookmarkInterface[]) {
  innerBookmarks.value = input as bookmarkInterface[];
};

function setUpperBookmarks(input: bookmarkInterface[]) {
  upperBookmarks.value = input as bookmarkInterface[];
};


// EXPORT
export function updateBookmark(bookmarks: bookmarkInterface[]) {

  // console.log('TEST bookmarks', bookmarks.find(b => b.name === "prairie 🌳")?.intersectionInfo); // TEST

  // 1- SET INNER ET UPPER BOOKMARK
  const newInnerBookmarks = [] as bookmarkInterface[];
  const newUpperBookmarks = [] as bookmarkInterface[];
  // const charactersFound = [] as characterFoundInterface[];

  for (const bookmark of bookmarks) {
    if (bookmark && bookmark.intersectionInfo) {
      if (
        bookmark.intersectionInfo.screenAreaToBookmarkRatio === 1 &&
        bookmark.intersectionInfo.visibleBookmarkRatio < 1
      ) {
        newUpperBookmarks.push(bookmark as bookmarkInterface);
      }
      if (bookmark.intersectionInfo.screenAreaToBookmarkRatio < 1) {
        newInnerBookmarks.push(bookmark as bookmarkInterface);

        // const character = characters.value.find(c => c.name === bookmark.name);
        // if (character && bookmark.intersectionInfo.screenAreaToBookmarkRatio > 0.015) {
          // screenSpacePosition missing
          // const width = inputBookmark.screenSpacePosition.topRight.x - inputBookmark.screenSpacePosition.bottomLeft.x;
          // const height = inputBookmark.screenSpacePosition.bottomLeft.y - inputBookmark.screenSpacePosition.topRight.y;
          // const top = inputBookmark.screenSpacePosition.topRight.y;
          // const left = inputBookmark.screenSpacePosition.bottomLeft.x;

          // const characterFound = JSON.parse(JSON.stringify(character)) as characterFoundInterface;
          // characterFound.callBubble.width = width*0.5,
          // characterFound.callBubble.height = height*0.25,
          // characterFound.callBubble.left = left - width*0.25,
          // characterFound.callBubble.top = top + height*0.125,
          // characterFound.screenAreaToBookmarkRatio = bookmark.intersectionInfo.screenAreaToBookmarkRatio;

          // charactersFound.push(characterFound  as characterFoundInterface);
        // }
      }
    }
  }
  setInnerBookmarks(newInnerBookmarks as bookmarkInterface[]);
  setUpperBookmarks(newUpperBookmarks as bookmarkInterface[]);
  // updateCharacter(charactersFound as characterFoundInterface[]);

  // console.log('TEST INNER', innerBookmarksSorted.value.map(b => b.name), innerBookmarksSorted.value.map(b => b.intersectionInfo.screenAreaToBookmarkRatio)); // TEST
  // console.log('TEST UPPER', upperBookmarksSorted.value.map(b => b.name), upperBookmarksSorted.value.map(b => b.intersectionInfo.visibleBookmarkRatio)); // TEST
  // console.log('TEST INNER', innerBookmarksSorted.value.map(b => b.name), closestInnerBookmark?.value?.name); // TEST
  // console.log('TEST UPPER', upperBookmarksSorted.value.map(b => b.name), closestUpperBookmark?.value?.name); // TEST

  // 2- SET LOCATION or CHARACTER
  let newBookmark = {} as bookmarkInterface;
  let closestInnerBookmarkName = '' as string;
  if (innerBookmarksSorted.value.length > 0 && closestInnerBookmark.value.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
    newBookmark = closestInnerBookmark.value as bookmarkInterface;
    // console.log('TEST IINER 1', newBookmark?.name); // TEST
  } else if (upperBookmarksSorted.value.length > 0) {
    newBookmark = closestUpperBookmark.value as bookmarkInterface;
    // console.log('TEST UPPER 2', newBookmark?.name); // TEST
  } else if (innerBookmarksSorted.value.length > 0) {
    closestInnerBookmarkName = closestInnerBookmark.value.name as string; // DÉZOOM - location = closest inner . upper_location
    // console.log('TEST innerBookmarksSorted 3', closestInnerBookmarkName); // TEST
    // EMPTY CHARACTER
  } else {
    // console.log('TEST NONE 4'); // TEST
    // EMPTY CHARACTER
  }
  if (newBookmark && newBookmark.name) {
    if (!currentBookmark || !currentBookmark.value || !currentBookmark.value.name || currentBookmark.value.name !== newBookmark.name) {
      setCurrentBookmark(newBookmark as bookmarkInterface);

      const locationFound = locations_found.value.find(l => l.name === newBookmark.name) as locationFoundInterface
      if (locationFound) {
        if (locationFound.name !== currentLocation?.value?.name) {
          setCurrentLocation(locationFound as locationFoundInterface);
          // EMPTY CHARACTER
        }
      } else {
        const characterFound = characters_found.value.find(c => c.name === newBookmark.name) as characterFoundInterface;
        if (characterFound) {
          if (newBookmark.name !== character?.value?.name) {
            // set new character
          }
        } else {
        // Request GET /bookmark/:name
        const newLocation = locations.value.find(l => l.name === newBookmark.name) as locationInterface
        if (newLocation) {
          // POST /location_found
          onLocationFound(newLocation as locationInterface);
          // EMPTY character_store
        } else {
          const characterFound = characters.value.find(c => c.name === newBookmark.name)
          if (characterFound) {
            // POST /character_found
          }
          else {
            // Bookmark inconnu en base
          }
        }
      }
      }
    }
  } else if (closestInnerBookmarkName) {

  }
}
