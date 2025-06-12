import axios from 'axios';

import { currentBookmark } from './state';
import type { bookmarkInterface } from './interface';

import { currentLocation, locations_found } from '../location/state';
import { onLocationFound, setCurrentLocation } from '../location/action';
import type { locationInterface, locationFoundInterface } from '../location/interface';

// import { characters, characters_found } from '../character/state';
// import { onCharacterFound, setCurrentCharacter, emptyCurrentCharacter } from '../character/action';
// import type { characterInterface, characterFoundInterface } from '../character/interface';


// PRIVATE
let isRequestResponsePending = false as boolean;


// EXPORT
export function setCurrentBookmark(input: bookmarkInterface) {
  // console.log('TEST setCurrentBookmark', input.name); // TEST
  currentBookmark.value = input as bookmarkInterface;
};



export function updateBookmarkHasLocation(inputBookmarks: bookmarkInterface[]) {

  let zoomIn = false;
  let isZoomStarted = false;

  // STEP-A-0) FILTER BOOKMARKS WITH LOCATION by Prefix
  // CHANGE FILTER BY PREFIX
  const locationsTest = ['bureau 🏠', 'prairie 🌳', 'vac-mer 🏝️', 'snorkeling 🐠']
  inputBookmarks = inputBookmarks.filter(b => locationsTest.includes(b.name));

  console.log('TEST updateBookmarkHasLocation', inputBookmarks); // TEST

  
  // STEP-A) SET INNER BOOKMARKS LOCATION
  let innerBookmarksLocation = [] as bookmarkInterface[];
  for (let index = 0; index < inputBookmarks.length; index++) {
    if (inputBookmarks[index]?.zoomFactor > 0.1) {
      innerBookmarksLocation.push(inputBookmarks[index] as bookmarkInterface);
    }
  }
  innerBookmarksLocation = innerBookmarksLocation.sort((a, b) => b.zoomFactor - a.zoomFactor);
  const closestInnerBookmarkLocation = innerBookmarksLocation[0] as bookmarkInterface;

  
  // STEP-A.1) SET ZOOM-IN/OUT & CURRENT-BOOKMARK
  if (closestInnerBookmarkLocation?.zoomFactor) {
    if (currentBookmark?.value?.zoomFactor) {
      if (closestInnerBookmarkLocation.zoomFactor < currentBookmark.value.zoomFactor) {
        zoomIn = true;
        isZoomStarted = true;
      } else {
        zoomIn = false;
        isZoomStarted = true;
      }
    }
    setCurrentBookmark(closestInnerBookmarkLocation as bookmarkInterface);
  }

  
  // STEP-A.2) Zoom in/out Location
  if (closestInnerBookmarkLocation?.intersectionInfo?.visibleBookmarkRatio > 0.009) {
    console.log('STEP-A.2) Zoom in/out Location') // TEST

    // ZOOM-IN
    if (zoomIn && isZoomStarted && closestInnerBookmarkLocation?.zoomFactor < 1) {
      console.log('ZOOM IN') // TEST
      if (closestInnerBookmarkLocation?.name !== currentLocation?.value?.name) {
        const locationFound = locations_found.value.find(l => l.name === closestInnerBookmarkLocation.name) as locationFoundInterface
        if (locationFound) {
          setCurrentLocation(locationFound as locationFoundInterface);
        } else if (!isRequestResponsePending) {

          // GET LOCATION BY NAME
          console.log('GET LOCATION BY NAME') // TEST
          
          isRequestResponsePending = true;
          axios.get(`https://peaceful-symphony-bc24703d57.strapiapp.com/api/locations?filters[name][$eq]=${closestInnerBookmarkLocation.name}&populate=upper_location`)
            .then(response => {
              const res = response.data.data[0];
              const newLocation = {
                id: res.id,
                name: res.name,
                message: res.message || '',
                is_map_element: res.is_map_element || false,
                upper_location: res.upper_location?.name || null,
              } as locationInterface;
              if (newLocation) {
                onLocationFound(newLocation as locationInterface);
              }
              console.log('apiGetLocationByName, SUCCESS', newLocation); // TEST
            })
            .catch(error => {
              console.log('apiPostAvancementUser, ERROR', error); // TEST
            })
            .finally(() => {
              isRequestResponsePending = false;
            });

          // const newLocation = locations.value.find(l => l.name === closestInnerBookmarkLocation.name) as locationInterface
          // if (newLocation) {
          //   onLocationFound(newLocation as locationInterface);
          // }
        }
      }
    }

    // // ZOOM-OUT
    // else if (!zoomIn && isZoomStarted && closestInnerBookmarkLocation?.zoomFactor > 9) {
    //   // console.log('ZOOM OUT') // TEST
    //   const closestInnerLocation = locations.value.find(l => l.name === closestInnerBookmarkLocation?.name) as locationInterface
    //   if (closestInnerLocation?.upper_location !== currentLocation?.value?.id) {
    //     const locationFound = locations_found.value.find(l => l.id === closestInnerLocation?.upper_location) as locationFoundInterface;
    //     if (locationFound) {
    //       setCurrentLocation(locationFound as locationFoundInterface);
    //     } else {
    //       const newLocation = locations.value.find(l => l.id === closestInnerLocation?.upper_location) as locationInterface
    //       if (newLocation) {
    //         onLocationFound(newLocation as locationInterface);
    //       }
    //     }
    //   }
    // }
  }
}


export function updateBookmarkHasCharacter(inputBookmarks: bookmarkInterface[]) {
  
  // // STEP-B) SET CLOSEST NEARBY BOOKMARKS CHARACTER
  // let nearByBookmarksCharacter = [] as bookmarkInterface[];
  // for (let index = 0; index < inputBookmarks.length; index++) {
  //   if (
  //     inputBookmarks[index]?.intersectionInfo?.visibleBookmarkRatio >= 0.15 &&
  //     inputBookmarks[index]?.zoomFactor >= 0.1 &&
  //     inputBookmarks[index]?.zoomFactor <= 14.5 // le max de détection semble être vers les 17.5
  //   ) {
  //     nearByBookmarksCharacter.push(inputBookmarks[index] as bookmarkInterface);
  //   }
  // }
  // nearByBookmarksCharacter = nearByBookmarksCharacter.sort((a, b) => b.zoomFactor - a.zoomFactor);
  // const closestNearByBookmarkCharacter = nearByBookmarksCharacter[0] as bookmarkInterface;

  // // STEP-B.1) SET CHARACTER
  // if (closestNearByBookmarkCharacter) {
  //   const characterFound = characters_found.value.find(c => c.name === closestNearByBookmarkCharacter.name) as characterFoundInterface;
  //   if (characterFound) {
  //     setCurrentCharacter(characterFound as characterFoundInterface, closestNearByBookmarkCharacter as bookmarkInterface, inputBookmarks as bookmarkInterface[]);
  //     // TEST
  //     // console.log('TEST closestNearByBookmarkCharacter v/s/z/Zi', closestNearByBookmarkCharacter?.name, closestNearByBookmarkCharacter?.intersectionInfo?.visibleBookmarkRatio, closestNearByBookmarkCharacter?.intersectionInfo?.screenAreaToBookmarkRatio, closestNearByBookmarkCharacter?.zoomFactor)
  //   }
  // } else {
  //   emptyCurrentCharacter();
  // }

  // // STEP-B.2) Zoom in Character
  // if (closestNearByBookmarkCharacter) {
  //   if (closestNearByBookmarkCharacter?.name !== currentLocation?.value?.name) {
  //     const characterFound = characters_found.value.find(c => c.name === closestNearByBookmarkCharacter.name) as characterFoundInterface
  //     if (!characterFound) {
  //       const newCharacter = characters.value.find(c => c.name === closestNearByBookmarkCharacter.name) as characterInterface
  //       if (newCharacter) {
  //         onCharacterFound(newCharacter as characterInterface, closestNearByBookmarkCharacter as bookmarkInterface);
  //       }
  //     }
  //   }
  // }
}


