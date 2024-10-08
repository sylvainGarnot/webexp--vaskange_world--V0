import { ref } from 'vue';
import type { dialogInterface } from './interface';

export const isDialogActive = ref(false as boolean);

export const dialogs = ref([
  {
    id: '0',
    speech_written: [
      'Veux tu commencer la quête 1',
      'Libero ab vero perferendis molestias ut dicta hic maxime',
      'voluptate iste minus facilis nobis?'
    ],
    item_provided: '',
    answers: ['1','0'],
    type: 'default',
  },
  {
    id: '1',
    speech_written: [
      'ipsum dolor sit amet elit.',
      'ab vero perferendis molestias ut dicta hic maxime',
    ],
    item_provided: '0',
    answers: [],
    type: 'gift',
  },
  {
    id: '2',
    speech_written: [
      'Bravo !',
      'Tu as trouvé un nouvel objet',
    ],
    item_provided: '1',
    answers: [],
    type: 'gift',
  },
] as dialogInterface[]);