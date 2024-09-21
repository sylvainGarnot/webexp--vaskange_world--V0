import { isFullscreen } from './state';

// PRIVATE


// EXPORT
export function setIsFullscreen(input: boolean) {
  isFullscreen.value = input as boolean;
  if (input) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};