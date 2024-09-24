import { ref } from 'vue';
import type { itemAcquiredInterface, itemInterface } from './interface';


export const items_acquired = ref([] as itemAcquiredInterface[]);

export const items = ref([
  {
    id: '0',
    name: 'Balon de Foot',
    image_url: 'Balon de Foot',
  },
  {
    id: '1',
    name: 'Balle de tennis',
    image_url: 'Balle de tennis',
  },
  {
    id: '2',
    name: 'Ballon de Rugby',
    image_url: 'Ballon de Rugby',
  },
] as itemInterface[]);