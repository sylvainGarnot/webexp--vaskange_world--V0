import { nearByCharacters } from './state';
import type { characterInterface } from './interface';
import type { bookmarkInterface } from '../bookmark/interface';


// PRIVATE
function setNearByCharacters(input: characterInterface[]) {
  nearByCharacters.value = input as characterInterface[];
};

// EXPORT
export function addNearByCharacter(inputCharacter: characterInterface, inputBookmark: bookmarkInterface) {
  // console.log('TEST', inputCharacter, inputBookmark); // TEST
  // screenSpacePosition missing
  // const width = inputBookmark.screenSpacePosition.topRight.x - inputBookmark.screenSpacePosition.bottomLeft.x;
  // const height = inputBookmark.screenSpacePosition.bottomLeft.y - inputBookmark.screenSpacePosition.topRight.y;
  // const top = inputBookmark.screenSpacePosition.topRight.y;
  // const left = inputBookmark.screenSpacePosition.bottomLeft.x;

  const newNearByCharacter = JSON.parse(JSON.stringify(inputCharacter)) as characterInterface;
  // newNearByCharacter.callBubble.width = width*0.5,
  // newNearByCharacter.callBubble.height = height*0.25,
  // newNearByCharacter.callBubble.left = left - width*0.25,
  // newNearByCharacter.callBubble.top = top + height*0.125,

  nearByCharacters.value.push(newNearByCharacter as characterInterface);
};

export function removeAllNearByCharaters() {
  setNearByCharacters([]);
}