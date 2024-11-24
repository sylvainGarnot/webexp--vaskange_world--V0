export interface musicInterface {
  id: string,
  file: string,
  audio: HTMLAudioElement,
}

export interface soundInterface extends musicInterface {
}