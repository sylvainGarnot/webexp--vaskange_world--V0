import { effect, effectVolume } from './state';


// PRIVATE


// EXPORT
export function setEffectVolume(value: number) {
  effect.value.volume = value as number;
  effectVolume.value = value as number;
};


export async function playEffect(effectName: string) {
  const audio = new Audio();
  audio.preload = "auto";
  audio.loop = false as boolean;
  audio.src = `/src/assets/effect/${effectName}.mp3` as string;
  audio.volume = effectVolume.value as number;
  
  effect.value = audio as HTMLAudioElement;
  effect.value.play();
}
  