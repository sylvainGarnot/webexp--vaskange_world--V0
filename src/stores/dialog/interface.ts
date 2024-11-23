export interface dialogInterface {
  id: string,
  speech_written: string[],
  item_provided: string,
  answers: string[],
  type: string,
  isLarge: boolean,
  openOnZoom: boolean
}