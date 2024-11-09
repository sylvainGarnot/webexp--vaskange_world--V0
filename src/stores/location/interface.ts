export interface locationInterface {
  id: string,
  name: string,
  label: string,
  message: string,
  image_url: string,
  image_url_unfound: string,
  is_hidden: boolean,
  upper_location: string,
  musics: string[],
}

export interface locationFoundInterface extends locationInterface {
  found_date: Date,
  nbrItemsToAcquired: number,
  nbrItemsAcquired: number,
}