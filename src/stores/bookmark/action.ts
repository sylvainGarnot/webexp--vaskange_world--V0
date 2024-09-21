import { bookmark, lastBookmark, innerBookmarks, upperBookmarks } from './state';
import { innerBookmarksSorted, upperBookmarksSorted, closestInnerBookmark, closestUpperBookmark } from './getter';
import type { bookmarkInterface } from './interface';
import { updateCharacter } from '../character/action';


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

  let newBookmark;
  if (innerBookmarksSorted.value.length > 0 && closestInnerBookmark.value.intersectionInfo.screenAreaToBookmarkRatio > 0.2) {
    newBookmark = closestInnerBookmark.value as bookmarkInterface;
  } else if (upperBookmarksSorted.value.length > 0) {
    newBookmark = closestUpperBookmark.value as bookmarkInterface;
  }
  if (newBookmark && newBookmark.name !== bookmark.value.name ) {
    setBookmark(newBookmark as bookmarkInterface);

    // GET isBookmarkCharacter
    // if true then
    // updateCharacter()

    // GET isBookmarkLocation
    // if true then
    // updateLocation()
  }
}
