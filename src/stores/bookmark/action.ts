import { currentBookmark, zoomIn, innerBookmarks, upperBookmarks } from './state';
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
  // console.log('TEST 1- setCurrentBookmark', input.name); // TEST
  currentBookmark.value = input as bookmarkInterface;
};

function setZoomIn(input: boolean) {
  zoomIn.value = input as boolean;
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

  
  // STEP-2) SET ZOOM
  if (closestInnerBookmark?.value?.zoomFactor) {
    if (currentBookmark?.value?.zoomFactor) {
      if (closestInnerBookmark.value.zoomFactor < currentBookmark.value.zoomFactor) {
        setZoomIn(true);
      } else {
        setZoomIn(false);
      }
    }
    setCurrentBookmark(closestInnerBookmark.value as bookmarkInterface);
  }
  
  
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

  
  // STEP-3.ZommIn
  if (zoomIn.value && closestInnerBookmark.value.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
    if (closestInnerBookmark.value.name !== currentLocation?.value?.name) {

      console.log('TEST -3.ZommIn'); // TEST

      const locationFound = locations_found.value.find(l => l.name === closestInnerBookmark.value.name) as locationFoundInterface
      if (locationFound) {
        setCurrentLocation(locationFound as locationFoundInterface);
      } else {
        const characterFound = characters_found.value.find(c => c.name === closestInnerBookmark.value.name) as characterFoundInterface;
        if (!characterFound) {
          // if closestInnerBookmark is location
          // Request GET /bookmark/:name (closestInnerBookmark.name)
          const newLocation = locations.value.find(l => l.name === closestInnerBookmark.value.name) as locationInterface
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
          } else {
            // if closestInnerBookmark is character
            // Request GET /character/:name (closestInnerBookmark.name)
            const newCharacter = characters.value.find(c => c.name === closestInnerBookmark.value.name) as characterInterface;
            if (newCharacter) {
              onCharacterFound(newCharacter as characterInterface, closestInnerBookmark.value as bookmarkInterface)
            }
            else {
              console.log('TEST 9- Bookmark inconnu', closestInnerBookmark.value.name) // TEST
            }
          }
        }
      }
    }
  }

  // STEP-3.ZoomOut
  else if (!zoomIn.value && closestInnerBookmark.value.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
    // if closestInnerBookmark is location (utiliser table de correspondance)
    const closestInnerLocation = locations.value.find(l => l.name === closestInnerBookmark.value.name) as locationInterface
    if (closestInnerLocation && closestInnerLocation.upper_location !== currentLocation?.value?.id) {
      console.log('TEST -3.ZoomOut'); // TEST

      const locationFound = locations_found.value.find(l => l.id === closestInnerLocation.upper_location) as locationFoundInterface;
      if (locationFound) {
        // console.log('TEST -3.ZoomOut 1'); // TEST
        setCurrentLocation(locationFound as locationFoundInterface);
      } else {
        // console.log('TEST -3.ZoomOut 2'); // TEST
        // Request GET /location/:id (currentLocation.value.upper_location)
        const newLocation = locations.value.find(l => l.id === closestInnerLocation.upper_location) as locationInterface
        if (newLocation) {
          // console.log('TEST -3.ZoomOut 2.1'); // TEST
          onLocationFound(newLocation as locationInterface);
        } else {
          // console.log('TEST TEST -3.ZoomOut - Unfound upper_location of', closestInnerLocation.name) // TEST
        }
      }
    }
  }
}
