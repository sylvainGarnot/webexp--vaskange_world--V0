import { currentBookmark, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import type { bookmarkInterface } from './interface';

import { currentLocation, locations, locations_found } from '../location/state';
import { onLocationFound, setCurrentLocation } from '../location/action';
import type { locationInterface, locationFoundInterface } from '../location/interface';

import { characters, currentCharacter, characters_found } from '../character/state';
import { onCharacterFound, setCurrentCharacter, emptyCurrentCharacter } from '../character/action';
import type { characterInterface, characterFoundInterface } from '../character/interface';


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

  // 1- SET INNER ET UPPER BOOKMARK
  const newInnerBookmarks = [] as bookmarkInterface[];
  const newUpperBookmarks = [] as bookmarkInterface[];

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
      }
    }
  }
  setInnerBookmarks(newInnerBookmarks as bookmarkInterface[]);
  setUpperBookmarks(newUpperBookmarks as bookmarkInterface[]);

  
  
  // TEST :
  // console.log('TEST bookmarks', bookmarks.find(b => b.name === "prairie 🌳")?.zoomFactor); // TEST
  // console.log('TEST INNER', innerBookmarksSorted.value.map(b => b.name), innerBookmarksSorted.value.map(b => b.intersectionInfo.screenAreaToBookmarkRatio)); // TEST
  // console.log('TEST UPPER', upperBookmarksSorted.value.map(b => b.name), upperBookmarksSorted.value.map(b => b.intersectionInfo.visibleBookmarkRatio)); // TEST
  // console.log('TEST INNER', innerBookmarksSorted.value.map(b => b.name), innerBookmarksSorted.value.map(b => b.zoomFactor)); // TEST
  // console.log('TEST UPPER', upperBookmarksSorted.value.map(b => b.name), upperBookmarksSorted.value.map(b => b.zoomFactor)); // TEST
  // console.log('TEST INNER', innerBookmarksSorted.value.map(b => b.name)); // TEST
  // console.log('TEST INNER ZOOM', bookmarks.filter(b => b.intersectionInfo && b.zoomFactor > 1).map(b => b.name)); // TEST
  // console.log('TEST UPPER', upperBookmarksSorted.value.map(b => b.name)); // TEST
  // console.log('TEST UPPER ZOOM', bookmarks.filter(b => b.intersectionInfo && b.zoomFactor <= 1).map(b => b.name)); // TEST
  // console.log('TEST INNER', innerBookmarksSorted.value.map(b => b.name), closestInnerBookmark?.value?.name); // TEST
  // console.log('TEST UPPER', upperBookmarksSorted.value.map(b => b.name), closestUpperBookmark?.value?.name); // TEST

  

  // 2- SET LOCATION or CHARACTER
  let newBookmark = {} as bookmarkInterface;
  let closestInnerBookmarkName = '' as string;
  if (innerBookmarksSorted.value.length > 0 && closestInnerBookmark.value.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
    console.log('TEST IINER 1', closestInnerBookmark.value.name); // TEST
    newBookmark = closestInnerBookmark.value as bookmarkInterface;
  } else if (upperBookmarksSorted.value.length > 0) {
    console.log('TEST UPPER 2', closestUpperBookmark.value.name); // TEST
    newBookmark = closestUpperBookmark.value as bookmarkInterface;
  } else if (innerBookmarksSorted.value.length > 0) {
    console.log('TEST closestInner.upper_location 3', closestInnerBookmark.value.name); // TEST
    closestInnerBookmarkName = closestInnerBookmark.value.name as string;
  } else {
    // 2.0- NOTHING
    console.log('TEST NONE 4'); // TEST
    emptyCurrentCharacter();
  }

  // 2.A- BOOKMARK is LOCATION ou CHARACTER
  if (newBookmark && newBookmark.name) {
    if (!currentBookmark || !currentBookmark.value || !currentBookmark.value.name || currentBookmark.value.name !== newBookmark.name) {
      setCurrentBookmark(newBookmark as bookmarkInterface);

      const locationFound = locations_found.value.find(l => l.name === newBookmark.name) as locationFoundInterface
      if (locationFound) {
        if (locationFound.name !== currentLocation?.value?.name) {
          setCurrentLocation(locationFound as locationFoundInterface);
          emptyCurrentCharacter();
        }
      }
      else {
        const characterFound = characters_found.value.find(c => c.name === newBookmark.name) as characterFoundInterface;
        if (characterFound) {
          if (newBookmark.name !== currentCharacter?.value?.name) {
            setCurrentCharacter(characterFound as characterFoundInterface);
          }
        } else {
          // Request GET /bookmark/:name (newBookmark.name)
          const newLocation = locations.value.find(l => l.name === newBookmark.name) as locationInterface
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
            emptyCurrentCharacter();
          } else {
            const characterFound = characters.value.find(c => c.name === newBookmark.name) as characterInterface;
            if (characterFound) {
              // Request POST /character_found TODO
              onCharacterFound(characterFound as characterInterface, newBookmark as bookmarkInterface)
            }
            else {
              // Bookmark inconnu en base
            }
          }
        }
      }
    }
  }

  // 2.B- BOOKMARK is LOCATION
  else if (closestInnerBookmarkName) {
    if (!currentBookmark || !currentBookmark.value || !currentBookmark.value.name || currentBookmark.value.name !== closestInnerBookmarkName) {
      setCurrentBookmark(closestInnerBookmark.value as bookmarkInterface);
      emptyCurrentCharacter();

      const closestInnerLocationFound = locations_found.value.find(l => l.name === closestInnerBookmarkName) as locationFoundInterface;
      if (closestInnerLocationFound) {
        if (closestInnerLocationFound.upper_location !== currentLocation?.value?.id) {
          const locationFound = locations_found.value.find(l => l.id === closestInnerLocationFound.upper_location) as locationFoundInterface;
          if (locationFound) {
            setCurrentLocation(locationFound as locationFoundInterface);
          }
          else {
            // Request GET /location/:id (closestInnerLocation.upper_location)
            const newLocation = locations.value.find(l => l.id === closestInnerLocationFound.upper_location) as locationInterface;
            if (newLocation) {
              onLocationFound(newLocation as locationInterface);
            } else {
              // Location inconnu en base
            }
          }
        }
        else {
          // END
        }
      }
      else {
        // Request GET /location/:inner-name (closestInnerBookmarkName)
        const closestInnerLocation = locations.value.find(l => l.name === closestInnerBookmarkName) as locationInterface
        if (closestInnerLocation) {
          const newLocation = locations.value.find(l => l.id === closestInnerLocation.upper_location) as locationInterface;
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
          } else {
            // Location inconnu en base
          }
        } else {
          // Location inconnu en base
        }
      }
    }
  }
}
