import { cookies, isFullscreen } from './state';
import type { cookieInterface } from './interface';

// PRIVATE
function setCookies(input: cookieInterface[]) {
  cookies.value = input as cookieInterface[];
}

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

export function getCookies() {
  let result = [] as cookieInterface[]

  let cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    let j = 0
    while (j < cookie.length) {
      if (cookie.charAt(j) === '=') {
        const cookieKey = cookie.substring(0, j).trim()

        let cookieValues = cookie.substring(j + 1).trim().split(',')

        result.push({
          key: cookieKey,
          values: Array.from(cookieValues)
        })

        j = cookie.length
      } else {
        j++
      }
    }
  }
  setCookies(result)
}