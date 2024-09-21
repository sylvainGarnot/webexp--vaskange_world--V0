import { bookmark, lastBookmark, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import type { bookmarkInterface } from './interface';

import { locations } from '../location/state';
import { updateLocation } from '../location/action';
import type { locationInterface } from '../location/interface';

import { characters } from '../character/state';
import { addNearByCharacter, removeAllNearByCharaters } from '../character/action';
import type { characterInterface } from '../character/interface';


// PRIVATE
function setBookmark(input: bookmarkInterface) {
  lastBookmark.value = bookmark.value as bookmarkInterface;
  bookmark.value = input as bookmarkInterface;
};

function setInnerBookmarks(input: bookmarkInterface[]) {
  innerBookmarks.value = input as bookmarkInterface[];
};

function setUpperBookmarks(input: bookmarkInterface[]) {
  upperBookmarks.value = input as bookmarkInterface[];
};


// EXPORT
export function updateNearbyBookmarks(bookmarks: bookmarkInterface[]) {
  const newInnerBookmarks = [] as bookmarkInterface[];
  const newUpperBookmarks = [] as bookmarkInterface[];
  removeAllNearByCharaters();

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

        const character = characters.value.find(c => c.name === bookmark.name);
        if (character && bookmark.intersectionInfo.screenAreaToBookmarkRatio > 0.015) {
          addNearByCharacter(character as characterInterface, bookmark as bookmarkInterface);
        }
      }
    }
  }
  setInnerBookmarks(newInnerBookmarks as bookmarkInterface[]);
  setUpperBookmarks(newUpperBookmarks as bookmarkInterface[]);

  let newBookmark;
  if (innerBookmarksSorted.value.length > 0 && closestInnerBookmark.value.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
    newBookmark = closestInnerBookmark.value as bookmarkInterface;
  } else if (upperBookmarksSorted.value.length > 0) {
    newBookmark = closestUpperBookmark.value as bookmarkInterface;
  }
  if (newBookmark && newBookmark.name) {
    if (!bookmark || !bookmark.value || !bookmark.value.name || bookmark.value.name !== newBookmark.name) {
      setBookmark(newBookmark as bookmarkInterface);

      const location = locations.value.find(l => l.name === newBookmark.name);
      if (location) {
        updateLocation(location as locationInterface);
      }
    }
  }
}
