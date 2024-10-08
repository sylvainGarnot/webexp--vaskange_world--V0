export interface locationInterface {
  id: string,
  name: string,
  message: string,
  image_url: string,
  is_hidden_place: boolean,
  upper_location: string,
  musics: string[],
}

export interface locationFoundInterface extends locationInterface {
  found_date: Date,
}

export interface locationFoundProgressionInterface extends locationFoundInterface {
  nbrItemsToAcquired: number,
  nbrItemsAcquired: number,
}