import { bookmark, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import type { bookmarkInterface } from './interface';

import { locations } from '../location/state';
import { onLocationFound } from '../location/action';
import type { locationInterface } from '../location/interface';

import { characters } from '../character/state';
import { updateCharacter } from '../character/action';
import type { characterFoundInterface } from '../character/interface';


// PRIVATE
function setBookmark(input: bookmarkInterface) {
  bookmark.value = input as bookmarkInterface;
};

function setInnerBookmarks(input: bookmarkInterface[]) {
  innerBookmarks.value = input as bookmarkInterface[];
};

function setUpperBookmarks(input: bookmarkInterface[]) {
  upperBookmarks.value = input as bookmarkInterface[];
};


// EXPORT
export function updateBookmark(bookmarks: bookmarkInterface[]) {

  // console.log('TEST bookmarks', bookmarks); // TEST

  const newInnerBookmarks = [] as bookmarkInterface[];
  const newUpperBookmarks = [] as bookmarkInterface[];
  const charactersFound = [] as characterFoundInterface[];

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
          // screenSpacePosition missing
          // const width = inputBookmark.screenSpacePosition.topRight.x - inputBookmark.screenSpacePosition.bottomLeft.x;
          // const height = inputBookmark.screenSpacePosition.bottomLeft.y - inputBookmark.screenSpacePosition.topRight.y;
          // const top = inputBookmark.screenSpacePosition.topRight.y;
          // const left = inputBookmark.screenSpacePosition.bottomLeft.x;

          const characterFound = JSON.parse(JSON.stringify(character)) as characterFoundInterface;
          // characterFound.callBubble.width = width*0.5,
          // characterFound.callBubble.height = height*0.25,
          // characterFound.callBubble.left = left - width*0.25,
          // characterFound.callBubble.top = top + height*0.125,
          characterFound.screenAreaToBookmarkRatio = bookmark.intersectionInfo.screenAreaToBookmarkRatio;

          charactersFound.push(characterFound as characterFoundInterface);
        }
      }
    }
  }
  setInnerBookmarks(newInnerBookmarks as bookmarkInterface[]);
  setUpperBookmarks(newUpperBookmarks as bookmarkInterface[]);
  updateCharacter(charactersFound as characterFoundInterface[]);

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
        onLocationFound(location as locationInterface);
      }
    }
  }
}
