import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isFullscreen, cookies, dateVisite } from './state';
import { isCookiesEnough } from './getter';
import { setIsFullscreen, toggleFullscreen, getBrowserCookies, postBrowserCookie, deleteBrowserCookies, newDateVisite } from './action';

export const useSettingStore = defineStore("Setting", () => {
  
  return {
    isFullscreen: readonly(isFullscreen),
    cookies: readonly(cookies),
    dateVisite: readonly(dateVisite),

    isCookiesEnough: readonly(isCookiesEnough),

    setIsFullscreen,
    toggleFullscreen,
    getBrowserCookies,
    postBrowserCookie,
    deleteBrowserCookies,
    newDateVisite
  }
})