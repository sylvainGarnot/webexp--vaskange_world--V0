import axios from 'axios';

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

  localStorage.clear();
};


export function forgotPassword(email: string) {
  console.log('TEST forgotPassword', email); // TEST
  axios.post(`https://peaceful-symphony-bc24703d57.strapiapp.com/api/auth/forgot-password`, {
      email,
    })
    .then(response => {
      console.log('forgotPassword, SUCCESS', response); // TEST
      // You can check your email
    })
    .catch(error => {
      // console.log('forgotPassword, ERROR', error.response?.data?.error.message); // TEST
      console.log('forgotPassword, ERROR', error); // TEST
    })
}


export function resetPassword(code: string, password: string, passwordConfirmation: string) {
  // console.log('TEST resetPassword', code, password, passwordConfirmation); // TEST
  axios.post(`https://peaceful-symphony-bc24703d57.strapiapp.com/api/auth/reset-password`, {
      code,
      password,
      passwordConfirmation,
    })
    .then(response => {
      console.log('resetPassword, SUCCESS', response); // TEST
    })
    .catch(error => {
      // console.log('resetPassword, ERROR', error.response?.data?.error.message); // TEST
      console.log('resetPassword, ERROR', error); // TEST
    })
}