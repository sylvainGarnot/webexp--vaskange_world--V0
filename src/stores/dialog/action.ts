import { isDialogActive } from './state';


// PRIVATE


// EXPORT
export function setIsDialogActive(input: boolean) {
  if (!input) {
    setTimeout(() => {
      isDialogActive.value = input as boolean;
    }, 250);
  } else {
    isDialogActive.value = input as boolean;
  }
};