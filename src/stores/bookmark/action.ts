import { currentBookmark, zoomIn, isZoomStarted } from './state';
import type { bookmarkInterface } from './interface';

import { currentLocation, locations, locations_found } from '../location/state';
import { onLocationFound, setCurrentLocation } from '../location/action';
import type { locationInterface, locationFoundInterface } from '../location/interface';

import { characters, characters_found } from '../character/state';
import { onCharacterFound, setCurrentCharacter, emptyCurrentCharacter } from '../character/action';
import type { characterInterface, characterFoundInterface } from '../character/interface';


// PRIVATE



// EXPORT
export function setCurrentBookmark(input: bookmarkInterface) {
  // console.log('TEST setCurrentBookmark', input.name); // TEST
  currentBookmark.value = input as bookmarkInterface;
};

export function setZoomIn(input: boolean) {
  zoomIn.value = input as boolean;
  isZoomStarted.value = true;
};


export function updateBookmarkHasLocation(inputBookmarks: bookmarkInterface[]) {
  // TEST
  // const test = inputBookmarks.find(b => b.name === "prairie 🌳") as bookmarkInterface; // TEST
  // const test = inputBookmarks.find(b => b.name === "vac-mer 🏝️") as bookmarkInterface; // TEST
  // console.log('TEST Bookmark Location bookmarks v/s/z', test?.intersectionInfo?.visibleBookmarkRatio, test?.intersectionInfo?.screenAreaToBookmarkRatio, test?.zoomFactor);
  // console.log('TEST Bookmark Location', inputBookmarks); // TEST

  // STEP-A) SET INNER BOOKMARKS LOCATION
  let innerBookmarksLocation = [] as bookmarkInterface[];
  for (let index = 0; index < inputBookmarks.length; index++) {
    if (inputBookmarks[index]?.zoomFactor > 0.1) {
      innerBookmarksLocation.push(inputBookmarks[index] as bookmarkInterface);
    }
  }
  innerBookmarksLocation = innerBookmarksLocation.sort((a, b) => b.zoomFactor - a.zoomFactor);
  const closestInnerBookmarkLocation = innerBookmarksLocation[0] as bookmarkInterface;

  // STEP-A.1) SET ZOOMIN
  if (closestInnerBookmarkLocation?.zoomFactor) {
    if (currentBookmark?.value?.zoomFactor) {
      if (closestInnerBookmarkLocation.zoomFactor < currentBookmark.value.zoomFactor) {
        setZoomIn(true);
      } else {
        setZoomIn(false);
      }
    }
    setCurrentBookmark(closestInnerBookmarkLocation as bookmarkInterface);
  }
  // TEST
  // console.log('TEST closestInnerBookmarkLocation v/s/z/Zi', closestInnerBookmarkLocation?.name, closestInnerBookmarkLocation?.intersectionInfo?.visibleBookmarkRatio, closestInnerBookmarkLocation?.intersectionInfo?.screenAreaToBookmarkRatio, closestInnerBookmarkLocation?.zoomFactor, zoomIn?.value);

  
  // STEP-A.2) Zoom in/out Location
  if (closestInnerBookmarkLocation?.intersectionInfo?.visibleBookmarkRatio > 0.009) {
    // ZOOM-IN
    if (zoomIn?.value && isZoomStarted.value && closestInnerBookmarkLocation?.zoomFactor < 1) {
      // console.log('ZOOM IN') // TEST
      if (closestInnerBookmarkLocation?.name !== currentLocation?.value?.name) {

        const locationFound = locations_found.value.find(l => l.name === closestInnerBookmarkLocation.name) as locationFoundInterface
        if (locationFound) {
          setCurrentLocation(locationFound as locationFoundInterface);
        } else {
          const newLocation = locations.value.find(l => l.name === closestInnerBookmarkLocation.name) as locationInterface
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
          }
        }
      }
    }
    // ZOOM-OUT
    else if (!zoomIn?.value && isZoomStarted.value && closestInnerBookmarkLocation?.zoomFactor > 9) {
      // console.log('ZOOM OUT') // TEST
      const closestInnerLocation = locations.value.find(l => l.name === closestInnerBookmarkLocation?.name) as locationInterface
      if (closestInnerLocation?.upper_location !== currentLocation?.value?.id) {
        const locationFound = locations_found.value.find(l => l.id === closestInnerLocation?.upper_location) as locationFoundInterface;
        if (locationFound) {
          setCurrentLocation(locationFound as locationFoundInterface);
        } else {
          const newLocation = locations.value.find(l => l.id === closestInnerLocation?.upper_location) as locationInterface
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
          }
        }
      }
    }
  }
}


export function updateBookmarkHasCharacter(inputBookmarks: bookmarkInterface[]) {
  // TEST
  // const test = inputBookmarks.find(b => b.name === "jump-q1") as bookmarkInterface; // TEST
  // console.log('TEST Bookmark Character bookmarks v/s/z', test?.intersectionInfo?.visibleBookmarkRatio, test?.intersectionInfo?.screenAreaToBookmarkRatio, test?.zoomFactor);
  // console.log('TEST Bookmark Character', inputBookmarks); // TEST
  
  // STEP-B) SET CLOSEST NEARBY BOOKMARKS CHARACTER
  let nearByBookmarksCharacter = [] as bookmarkInterface[];
  for (let index = 0; index < inputBookmarks.length; index++) {
    if (
      inputBookmarks[index]?.intersectionInfo?.visibleBookmarkRatio >= 0.15 &&
      inputBookmarks[index]?.zoomFactor >= 0.1 &&
      inputBookmarks[index]?.zoomFactor <= 14.5 // le max de détection semble être vers les 17.5
    ) {
      nearByBookmarksCharacter.push(inputBookmarks[index] as bookmarkInterface);
    }
  }
  nearByBookmarksCharacter = nearByBookmarksCharacter.sort((a, b) => b.zoomFactor - a.zoomFactor);
  const closestNearByBookmarkCharacter = nearByBookmarksCharacter[0] as bookmarkInterface;

  // STEP-B.1) SET CHARACTER
  if (closestNearByBookmarkCharacter) {
    const characterFound = characters_found.value.find(c => c.name === closestNearByBookmarkCharacter.name) as characterFoundInterface;
    if (characterFound) {
      setCurrentCharacter(characterFound as characterFoundInterface, closestNearByBookmarkCharacter as bookmarkInterface, inputBookmarks as bookmarkInterface[]);
      // TEST
      // console.log('TEST closestNearByBookmarkCharacter v/s/z/Zi', closestNearByBookmarkCharacter?.name, closestNearByBookmarkCharacter?.intersectionInfo?.visibleBookmarkRatio, closestNearByBookmarkCharacter?.intersectionInfo?.screenAreaToBookmarkRatio, closestNearByBookmarkCharacter?.zoomFactor)
    }
  } else {
    emptyCurrentCharacter();
  }

  // STEP-B.2) Zoom in Character
  if (closestNearByBookmarkCharacter) {
    if (closestNearByBookmarkCharacter?.name !== currentLocation?.value?.name) {
      const characterFound = characters_found.value.find(c => c.name === closestNearByBookmarkCharacter.name) as characterFoundInterface
      if (!characterFound) {
        const newCharacter = characters.value.find(c => c.name === closestNearByBookmarkCharacter.name) as characterInterface
        if (newCharacter) {
          onCharacterFound(newCharacter as characterInterface, closestNearByBookmarkCharacter as bookmarkInterface);
        }
      }
    }
  }
}


