export interface characterInterface {
  id: string,
  name: string,
  dialog: string,
}

export interface characterFoundInterface extends characterInterface {
  found_date: Date,
}

export interface currentCharacterInterface extends characterFoundInterface {
  // callBubble: {
  //   width: number,
  //   height: number,
  //   top: number,
  //   left: number,
  // },
  screenAreaToBookmarkRatio: number,
}