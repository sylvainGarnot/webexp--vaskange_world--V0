export interface characterInterface {
  id: string,
  name: string,
  label: string,
  label_dialog: string,
  dialog: string,
  location: string,
  is_hidden: boolean,
  image_url: string,
  image_url_unfound: string,
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
    zoomFactor: number,
  },
  screenAreaToBookmarkRatio: number,
}