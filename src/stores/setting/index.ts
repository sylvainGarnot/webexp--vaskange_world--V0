import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isFullscreen, cookies } from './state';
import { isCookiesEnough } from './getter';
import { setIsFullscreen, toggleFullscreen, getBrowserCookies, postBrowserCookie, deleteBrowserCookies } from './action';

export const useSettingStore = defineStore("Setting", () => {
  
  return {
    isFullscreen: readonly(isFullscreen),
    cookies: readonly(cookies),

    isCookiesEnough: readonly(isCookiesEnough),

    setIsFullscreen,
    toggleFullscreen,
    getBrowserCookies,
    postBrowserCookie,
    deleteBrowserCookies,
  }
})