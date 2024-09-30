import { currentBookmark, zoomIn, isZoomStarted } from './state';
import type { bookmarkInterface } from './interface';

import { currentLocation, locations, locations_found } from '../location/state';
import { onLocationFound, setCurrentLocation } from '../location/action';
import type { locationInterface, locationFoundInterface } from '../location/interface';
import { locationsName } from '../location/getter';

import { characters, characters_found } from '../character/state';
import { onCharacterFound, setCurrentCharacter, emptyCurrentCharacter } from '../character/action';
import type { characterInterface, characterFoundInterface } from '../character/interface';
import { charactersName } from '../character/getter';


// PRIVATE
function setCurrentBookmark(input: bookmarkInterface) {
  console.log('TEST setCurrentBookmark', input.name); // TEST
  currentBookmark.value = input as bookmarkInterface;
};

function setZoomIn(input: boolean) {
  zoomIn.value = input as boolean;
  isZoomStarted.value = true;
};


// EXPORT
export function updateBookmark(inputBookmarks: bookmarkInterface[]) {


  // const test = inputBookmarks.find(b => b.name === "prairie 🌳") as bookmarkInterface; // TEST
  // const test = inputBookmarks.find(b => b.name === "vac-mer 🏝️") as bookmarkInterface; // TEST
  // const test = inputBookmarks.find(b => b.name === "jump-q1") as bookmarkInterface; // TEST
  // console.log('TEST bookmarks v/s/z', test?.intersectionInfo?.visibleBookmarkRatio, test?.intersectionInfo?.screenAreaToBookmarkRatio, test?.zoomFactor);

  
  
  // STEP-0) Filter Bookmarks by charactersName & LocationsName
  const bookmarksLocation = [] as bookmarkInterface[];
  const bookmarksCharacter = [] as bookmarkInterface[];
  for (let index = 0; index < inputBookmarks.length; index++) {
    if (locationsName.value.includes(inputBookmarks[index].name)) {
      bookmarksLocation.push(inputBookmarks[index]);
    } else if (charactersName.value.includes(inputBookmarks[index].name)) {
      bookmarksCharacter.push(inputBookmarks[index]);
    }
  }


  
  // STEP-A) SET INNER BOOKMARKS LOCATION
  let innerBookmarksLocation = [] as bookmarkInterface[];
  for (let index = 0; index < bookmarksLocation.length; index++) {
    if (
      bookmarksLocation[index]?.intersectionInfo?.visibleBookmarkRatio > 0.02 &&
      bookmarksLocation[index]?.zoomFactor > 0.8 &&
      bookmarksLocation[index]?.zoomFactor < 3.5
    ) {
      innerBookmarksLocation.push(bookmarksLocation[index] as bookmarkInterface);
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

  

  // STEP-A.2) Zoom in/out Location
  if (closestInnerBookmarkLocation?.intersectionInfo?.screenAreaToBookmarkRatio > 0.2) {
    if (zoomIn?.value && isZoomStarted.value) {
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
    else if (!zoomIn?.value && isZoomStarted.value) {
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

  
  
  // STEP-B) SET CLOSEST NEARBY BOOKMARKS CHARACTER
  let nearByBookmarksCharacter = [] as bookmarkInterface[];
  for (let index = 0; index < bookmarksCharacter.length; index++) {
    if (
      bookmarksCharacter[index]?.intersectionInfo?.visibleBookmarkRatio > 0.25 &&
      bookmarksCharacter[index]?.zoomFactor > 1 &&
      bookmarksCharacter[index]?.zoomFactor < 3.5
    ) {
      nearByBookmarksCharacter.push(bookmarksCharacter[index] as bookmarkInterface);
    }
  }
  nearByBookmarksCharacter = nearByBookmarksCharacter.sort((a, b) => b.zoomFactor - a.zoomFactor);
  const closestNearByBookmarkCharacter = nearByBookmarksCharacter[0] as bookmarkInterface;

  

  // STEP-B.1) SET CHARACTER
  if (closestNearByBookmarkCharacter) {
    const characterFound = characters_found.value.find(c => c.name === closestNearByBookmarkCharacter.name) as characterFoundInterface;
    if (characterFound) {
      setCurrentCharacter(characterFound as characterFoundInterface, closestNearByBookmarkCharacter as bookmarkInterface);
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
