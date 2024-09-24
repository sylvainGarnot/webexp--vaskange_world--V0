export interface characterInterface {
  id: string,
  name: string,
  dialog: string,
}

export interface characterFoundInterface extends characterInterface {
  found_date: Date,
  // callBubble: {
  //   width: number,
  //   height: number,
  //   top: number,
  //   left: number,
  // },
  screenAreaToBookmarkRatio: number,
}