import { computed } from 'vue';
import { cookies } from './state';
import type { cookieInterface } from './interface';

export const isCookiesEnough = computed(() => {
  const cookie_locations_found = cookies.value.find(c => c.key === 'locations_found') as cookieInterface
  const cookie_items_acquired = cookies.value.find(c => c.key === 'items_acquired') as cookieInterface

  return cookie_locations_found?.values?.length > 1 || cookie_items_acquired?.values?.length > 0 as boolean
})