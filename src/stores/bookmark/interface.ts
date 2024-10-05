
export interface bookmarkInterface {
  id: string,
  intersectionInfo: {
    screenAreaToBookmarkRatio: number,
    visibleBookmarkRatio: number,
  },
  name: string,
  screenSpacePosition: {
    bottomLeft: {
      x: number,
      y: number,
    },
    topRight: {
      x: number,
      y: number,
    },
  }
  zoomFactor: number
}