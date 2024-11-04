export interface characterInterface {
  id: string,
  name: string,
  dialog: string,
  location: string,
  image_url: string,
}

export interface characterFoundInterface extends characterInterface {
  found_date: Date,
  itemToAcquired: boolean,
  itemAcquired: boolean,
}

export interface currentCharacterInterface extends characterFoundInterface {
  bookmark: {
    width: number,
    height: number,
    top: number,
    left: number,
  },
  screenAreaToBookmarkRatio: number,
}