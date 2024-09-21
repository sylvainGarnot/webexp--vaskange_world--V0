import { isActive, dialogs, author, stepNumber, image } from './state';


// PRIVATE


// EXPORT
export function setIsActive(input: boolean) {
  isActive.value = input as boolean;
};
export function setDialogs(input: string[]) {
  dialogs.value = input as string[];
};
export function setAuthor(input: string) {
  author.value = input as string;
};
export function setStepNumber(input: number) {
  stepNumber.value = input as number;
};
export function setImage(input: string) {
  image.value = input as string;
};