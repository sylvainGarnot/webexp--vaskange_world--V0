export interface itemInterface {
  id: string,
  name: string,
  description: string,
  image_url: string,
  image_url_unfound: string,
}

export interface itemAcquiredInterface extends itemInterface {
  acquired_date: Date,
}