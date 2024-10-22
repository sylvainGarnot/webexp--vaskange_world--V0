import { ref } from 'vue';
import type { itemAcquiredInterface, itemInterface } from './interface';


export const items_acquired = ref([] as itemAcquiredInterface[]);

export const items = ref([
  {
    id: '0',
    name: 'Balon de Foot',
    description: 'cet objet est très spécial et il va te permettre de réaliser ta quête.',
    image_url: '/images/item/boomerang.webp',
  },
  {
    id: '1',
    name: 'Balle de tennis',
    description: 'cet objet est très spécial et il va te permettre de réaliser ta quête.',
    image_url: '/images/item/boomerang.webp',
  },
  // {
  //   id: '2',
  //   name: 'Ballon de Rugby',
  //   description: 'cet objet est très spécial et il va te permettre de réaliser ta quête.',
  //   image_url: '/images/item/boomerang.webp',
  // },
] as itemInterface[]);