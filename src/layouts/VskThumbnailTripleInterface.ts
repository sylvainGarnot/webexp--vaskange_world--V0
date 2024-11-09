export interface VskThumbnailTripleInterface {
  id: string,
  background_url: string,
  elements: VskThumbnailTripleElementInterface[]
}

export interface VskThumbnailTripleElementInterface {
  id: string,
  image_url: string,
  date: Date | null
}