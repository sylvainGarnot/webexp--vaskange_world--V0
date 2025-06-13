import { user } from './state';
import type { userInterface } from './interface';


// EXPORT
export function setUser(input: userInterface) {
  // console.log('TEST setCurrentBookmark', input.name); // TEST

  user.value = input as userInterface;

  localStorage.setItem('id', user.value.id);
  localStorage.setItem('jwt', user.value.jwt);
  localStorage.setItem('username', user.value.username);
  localStorage.setItem('email', user.value.email);
  localStorage.setItem('createdAt', user.value.createdAt);
};

export function logout() {
  // console.log('TEST setCurrentBookmark', input.name); // TEST

  user.value = null;

  localStorage.removeItem('id');
  localStorage.removeItem('jwt');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('createdAt');
};