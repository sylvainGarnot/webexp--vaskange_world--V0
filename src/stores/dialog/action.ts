import { isDialogActive } from './state';


// PRIVATE


// EXPORT
export function setIsDialogActive(input: boolean) {
  if (!input) {
    setTimeout(() => {
      isDialogActive.value = false as boolean;
    }, 0);
  } else {
    isDialogActive.value = true as boolean;
  }
};