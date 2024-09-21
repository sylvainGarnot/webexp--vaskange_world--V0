
export interface bookmarkInterface {
  id: string,
  intersectionInfo: {
    screenAreaToBookmarkRatio: number,
    visibleBookmarkRatio: number,
  },
  name: string,
  // value missing
  // screenSpacePosition: {
  //   bottomLeft: {
  //     x: number,
  //     y: number,
  //   },
  //   topRight: {
  //     x: number,
  //     y: number,
  //   },
  // }
  zoomFactor: number
}