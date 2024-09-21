import type { SettingInterface } from './interface';
import { isFullscreen, effectVolume, musicVolume } from './state';
import { currentMusic } from '../music/state';

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

export function setEffectVolume(input: number) {
  effectVolume.value = input as number;
};

export function setMusicVolume(input: number) {
  musicVolume.value = input as number;
  currentMusic.value.volume = input as number;
};

export function setSettings(input: SettingInterface) {
  setEffectVolume(input.effectVolume);
  setMusicVolume(input.musicVolume);
  setIsFullscreen(input.isFullscreen);
};

