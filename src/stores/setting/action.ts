import { isFullscreen } from './state';

// PRIVATE

// EXPORT
export function setIsFullscreen(input: boolean) {
  isFullscreen.value = input as boolean;
}

export function toggleFullscreen() {
  if (isFullscreen.value) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};