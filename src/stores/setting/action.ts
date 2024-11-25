import { cookies, cookiesKey, isFullscreen, isSecretEndSended } from './state';
import type { cookieInterface } from './interface';

// PRIVATE
function setCookies(input: cookieInterface[]) {
  cookies.value = input as cookieInterface[];
}

function setCookie(key: string, values: string[]) {
  const cookie = cookies.value.find(c => c.key === key)
  if (cookie) {
    cookie.values = values
  } else {
    cookies.value.push({
      key,
      values
    })
  }
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


export function setIsSecretEndSended(input: boolean, modePost:boolean=true) {
  isSecretEndSended.value = input as boolean;
  if (modePost) {
    if (input) {
      postBrowserCookie('is_secret_end_sended', ['1'] as string[])
    } else {
      postBrowserCookie('is_secret_end_sended', ['0'] as string[])
    }
  }
}

export function setIsSecretEndSendedFromCookies() {
  const cookieIsSecretEndSended = cookies.value.find(c => c.key === 'is_secret_end_sended') as cookieInterface
  if (cookieIsSecretEndSended) {
    const cookieIsSecretEndSendedIds = cookieIsSecretEndSended.values as string[]
    if (cookieIsSecretEndSendedIds && cookieIsSecretEndSendedIds.length > 0 && cookieIsSecretEndSendedIds.includes('1')) {
      setIsSecretEndSended(true, false)
    }
  }
}

export function getBrowserCookies() {
  let result = [] as cookieInterface[]

  let cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    let j = 0
    while (j < cookie.length) {
      if (cookie.charAt(j) === '=') {
        const cookieKey = cookie.substring(0, j).trim()

        if (cookieKey && cookiesKey.value.includes(cookieKey)) {
          let cookieValues = cookie.substring(j + 1).trim().split(',')

          if (cookieValues && cookieValues[0]) {
            result.push({
              key: cookieKey,
              values: Array.from(cookieValues)
            }) 
          }
        }

        j = cookie.length
      } else {
        j++
      }
    }
  }
  setCookies(result)
}

export function postBrowserCookie(key: string, values: string[]) {
  document.cookie = `${key}=${values}`
  setCookie(key as string, values as string[])
}

export function deleteBrowserCookies() {
  for (let index = 0; index < cookiesKey.value.length; index++) {
    document.cookie = `${cookiesKey.value[index]}=`
  }
  setCookies([])
}