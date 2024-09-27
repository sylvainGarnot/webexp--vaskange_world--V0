import { currentBookmark, zoomIn } from './state';
import type { bookmarkInterface } from './interface';

import { currentLocation, locations, locations_found } from '../location/state';
import { onLocationFound, setCurrentLocation } from '../location/action';
import type { locationInterface, locationFoundInterface } from '../location/interface';

import { characters, currentCharacter, characters_found } from '../character/state';
import { onCharacterFound, setCurrentCharacter, emptyCurrentCharacter } from '../character/action';
import type { characterInterface, characterFoundInterface } from '../character/interface';
import { charactersName } from '../character/getter';
import { locationsName } from '../location/getter';


// PRIVATE
function setCurrentBookmark(input: bookmarkInterface) {
  // console.log('TEST 1- setCurrentBookmark', input.name); // TEST
  currentBookmark.value = input as bookmarkInterface;
};

function setZoomIn(input: boolean) {
  zoomIn.value = input as boolean;
};


// EXPORT
export function updateBookmark(inputBookmarks: bookmarkInterface[]) {
  
  // STEP-0) SET INNER BOOKMARK
  let innerBookmarks = [] as bookmarkInterface[];
  for (let index = 0; index < inputBookmarks.length; index++) {
    if (
      inputBookmarks[index]?.intersectionInfo?.visibleBookmarkRatio === 1 &&
      inputBookmarks[index]?.intersectionInfo?.screenAreaToBookmarkRatio < 1
    ) {
      innerBookmarks.push(inputBookmarks[index] as bookmarkInterface);
    }
  }
  innerBookmarks = innerBookmarks.sort((a, b) => b.intersectionInfo.screenAreaToBookmarkRatio - a.intersectionInfo.screenAreaToBookmarkRatio);
  const closestInnerBookmark = innerBookmarks[0] as bookmarkInterface;

  // console.log('TEST', closestInnerBookmark?.name, closestInnerBookmark?.intersectionInfo)
  // console.log('TEST bookmarks', inputBookmarks.find(b => b.name === "prairie 🌳")?.intersectionInfo); // TEST


  
  // STEP-1) Filter Bookmarks by charactersName & LocationsName
  const bookmarksLocation = [] as bookmarkInterface[];
  const bookmarksCharacter = [] as bookmarkInterface[];
  for (let index = 0; index < innerBookmarks.length; index++) {
    if (locationsName.value.includes(innerBookmarks[index].name)) {
      bookmarksLocation.push(innerBookmarks[index]);
    } else if (charactersName.value.includes(innerBookmarks[index].name)) {
      bookmarksCharacter.push(innerBookmarks[index]);
    }
  }
  const closestBookmarkLocation = bookmarksLocation[0] as bookmarkInterface;
  const closestBookmarkCharacter = bookmarksCharacter[0] as bookmarkInterface;

  

  // STEP-2) SET CHARACTER
  if (closestBookmarkCharacter?.intersectionInfo?.screenAreaToBookmarkRatio < 1 && closestBookmarkCharacter?.intersectionInfo?.screenAreaToBookmarkRatio > 0.2) {
    // console.log('TEST IF', closestBookmarkCharacter?.intersectionInfo?.screenAreaToBookmarkRatio)
    const characterFound = characters_found.value.find(c => c.name === closestBookmarkCharacter.name) as characterFoundInterface;
    if (characterFound) {
      setCurrentCharacter(characterFound as characterFoundInterface, closestBookmarkCharacter as bookmarkInterface);
    }
  } else {
    // console.log('TEST ELSE', closestBookmarkCharacter)
    emptyCurrentCharacter();
  }

  
  
  // STEP-3) SET ZOOMIN
  if (closestInnerBookmark?.zoomFactor) {
    if (currentBookmark?.value?.zoomFactor) {
      if (closestInnerBookmark.zoomFactor < currentBookmark.value.zoomFactor) {
        setZoomIn(true);
      } else {
        setZoomIn(false);
      }
    }
    setCurrentBookmark(closestInnerBookmark as bookmarkInterface);
  }

  

  // STEP-4.A) Zoom in/out Location
  if (closestBookmarkLocation?.intersectionInfo?.screenAreaToBookmarkRatio > 0.2) {
    if (zoomIn?.value) {
      if (closestBookmarkLocation?.name !== currentLocation?.value?.name) {

        const locationFound = locations_found.value.find(l => l.name === closestBookmarkLocation.name) as locationFoundInterface
        if (locationFound) {
          setCurrentLocation(locationFound as locationFoundInterface);
        } else {
          const newLocation = locations.value.find(l => l.name === closestBookmarkLocation.name) as locationInterface
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
          }
        }
      }
    }
    else if (!zoomIn?.value) {
      const closestInnerLocation = locations.value.find(l => l.name === closestBookmarkLocation.name) as locationInterface
      if (closestInnerLocation?.upper_location !== currentLocation?.value?.id) {
        const locationFound = locations_found.value.find(l => l.id === closestInnerLocation.upper_location) as locationFoundInterface;
        if (locationFound) {
          setCurrentLocation(locationFound as locationFoundInterface);
        } else {
          const newLocation = locations.value.find(l => l.id === closestInnerLocation.upper_location) as locationInterface
          if (newLocation) {
            onLocationFound(newLocation as locationInterface);
          }
        }
      }
    }
  }

  
  
  // STEP-4.B) Zoom in Character
  if (closestBookmarkCharacter?.intersectionInfo?.screenAreaToBookmarkRatio > 0.2) {
    if (closestBookmarkCharacter?.name !== currentLocation?.value?.name) {

      const characterFound = characters_found.value.find(c => c.name === closestBookmarkCharacter.name) as characterFoundInterface
      if (!characterFound) {
        const newCharacter = characters.value.find(c => c.name === closestBookmarkCharacter.name) as characterInterface
        if (newCharacter) {
          onCharacterFound(newCharacter as characterInterface, closestBookmarkCharacter as bookmarkInterface);
        }
      }
    }
  }


}
