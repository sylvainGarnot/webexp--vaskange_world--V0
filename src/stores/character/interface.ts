export interface characterInterface {
  id: string,
  name: string,
  found: boolean,
  found_date: Date,
  dialog: string,
  callBubble: {
    width: number,
    height: number,
    top: number,
    left: number,
  },
  screenAreaToBookmarkRatio: number,
}