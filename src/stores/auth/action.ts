import Cookies from 'js-cookie'

import { user } from './state';


// EXPORT
export function setUser(input: any) {
  // console.log('TEST setCurrentBookmark', input.name); // TEST
  user.value = input as any;
  Cookies.set('user', JSON.stringify(user.value))
};

export function logout() {
  // console.log('TEST setCurrentBookmark', input.name); // TEST
  user.value = null;
  Cookies.set('user', '')
};