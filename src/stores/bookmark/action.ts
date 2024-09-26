import { currentBookmark, currentBookmarkStep3B, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import type { bookmarkInterface } from './interface';

import { currentLocation, locations, locations_found } from '../location/state';
import { onLocationFound, setCurrentLocation } from '../location/action';
import type { locationInterface, locationFoundInterface } from '../location/interface';

import { characters, currentCharacter, characters_found } from '../character/state';
import { onCharacterFound, setCurrentCharacter, emptyCurrentCharacter } from '../character/action';
import type { characterInterface, characterFoundInterface } from '../character/interface';


// PRIVATE
function setCurrentBookmark(input: bookmarkInterface, inputStep3B: boolean) {
  console.log('TEST 1- setCurrentBookmark', input.name); // TEST
  currentBookmark.value = input as bookmarkInterface;
  currentBookmarkStep3B.value = inputStep3B as boolean;
};

function setInnerBookmarks(input: bookmarkInterface[]) {
  innerBookmarks.value = input as bookmarkInterface[];
};

function setUpperBookmarks(input: bookmarkInterface[]) {
  upperBookmarks.value = input as bookmarkInterface[];
};


// EXPORT
export function updateBookmark(bookmarks: bookmarkInterface[]) {

  // STEP-1) SET INNER, UPPER BOOKMARK & CURRENT_CHARACTER already FOUND
  const newInnerBookmarks = [] as bookmarkInterface[];
  const newUpperBookmarks = [] as bookmarkInterface[];

  for (const b of bookmarks) {
    if (b && b.intersectionInfo) {
      if (
        b.intersectionInfo.screenAreaToBookmarkRatio === 1 &&
        b.intersectionInfo.visibleBookmarkRatio < 1
      ) {
        newUpperBookmarks.push(b as bookmarkInterface);
      }
      if (b.intersectionInfo.screenAreaToBookmarkRatio < 1) {
        newInnerBookmarks.push(b as bookmarkInterface);
      }
      if (b.intersectionInfo.screenAreaToBookmarkRatio < 1 && b.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
        const characterFound = characters_found.value.find(c => c.name === b.name) as characterFoundInterface;
        if (characterFound) {
          setCurrentCharacter(characterFound as characterFoundInterface, b as bookmarkInterface);
        }
      } else {
        emptyCurrentCharacter();
      }
    }
  }
  setInnerBookmarks(newInnerBookmarks as bookmarkInterface[]);
  setUpperBookmarks(newUpperBookmarks as bookmarkInterface[]);

  
  
  // TEST :
  // console.log('TEST bookmarks', bookmarks.find(b => b.name === "astro 1")?.intersectionInfo.screenAreaToBookmarkRatio); // TEST
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

  

  // STEP-2) SET LOCATION or CHARACTER
  let newBookmark = {} as bookmarkInterface;
  let closestInnerBookmarkName = '' as string;
  if (innerBookmarksSorted.value.length > 0 && closestInnerBookmark.value.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
    // console.log('TEST-A.1 IINER', closestInnerBookmark.value.name); // TEST
    newBookmark = closestInnerBookmark.value as bookmarkInterface;
  } else if (upperBookmarksSorted.value.length > 0) {
    // console.log('TEST-A.2 UPPER', closestUpperBookmark.value.name); // TEST
    newBookmark = closestUpperBookmark.value as bookmarkInterface;
  } else if (innerBookmarksSorted.value.length > 0) {
    // console.log('TEST-B closestInner.upper_location', closestInnerBookmark.value.name); // TEST
    closestInnerBookmarkName = closestInnerBookmark.value.name as string;
  } else {
    // 2.0- NOTHING
    // console.log('TEST-C NONE'); // TEST
  }

  // STEP-3.A
  if (newBookmark && newBookmark.name) {
    if (!currentBookmark || !currentBookmark.value || !currentBookmark.value.name || currentBookmark.value.name !== newBookmark.name || currentBookmarkStep3B.value) {
      setCurrentBookmark(newBookmark as bookmarkInterface, false);

      const locationFound = locations_found.value.find(l => l.name === newBookmark.name) as locationFoundInterface
      if (locationFound) {
        if (locationFound.name !== currentLocation?.value?.name) {
          setCurrentLocation(locationFound as locationFoundInterface);
        }
      } else {
        const characterFound = characters_found.value.find(c => c.name === newBookmark.name) as characterFoundInterface;
        if (!characterFound) {
          // Request GET /bookmark/:name (newBookmark.name)
          const newLocation = locations.value.find(l => l.name === newBookmark.name) as locationInterface
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
          } else {
            const characterFound = characters.value.find(c => c.name === newBookmark.name) as characterInterface;
            if (characterFound) {
              // Request POST /character_found TODO
              onCharacterFound(characterFound as characterInterface, newBookmark as bookmarkInterface)
            }
            else {
              console.log('TEST 9- Bookmark inconnu', newBookmark.name) // TEST
            }
          }
        }
      }
    }
  }

  // STEP-3.B
  else if (closestInnerBookmarkName) {
    if (!currentBookmark || !currentBookmark.value || !currentBookmark.value.name || currentBookmark.value.name !== closestInnerBookmarkName) {
      setCurrentBookmark(closestInnerBookmark.value as bookmarkInterface, true);

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
              console.log('TEST 9- Location introuvable') // TEST
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
            console.log('TEST 9- Location introuvable') // TEST
          }
        } else {
          console.log('TEST 9- Location introuvable') // TEST
        }
      }
    }
  }
}
