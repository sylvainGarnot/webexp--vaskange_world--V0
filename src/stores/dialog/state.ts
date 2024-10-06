import { ref } from 'vue';
import type { dialogInterface } from './interface';

export const isDialogActive = ref(false as boolean);

export const dialogs = ref([
  {
    id: '0',
    speech_written: [
      'Veux tu commencer la quête 1',
      '111 Libero ab vero perferendis molestias ut dicta hic maxime',
      '111 voluptate iste minus facilis nobis?'
    ],
    item_provided: '',
    answers: ['1','0'],
    type: 'default',
  },
  {
    id: '1',
    speech_written: [
      '222222 ipsum dolor sit amet elit.',
      '222222 ab vero perferendis molestias ut dicta hic maxime',
      '222222 iste minus facilis nobis?'
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