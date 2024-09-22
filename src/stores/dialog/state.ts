import { ref } from 'vue';
import type { dialogInterface } from './interface';

export const dialogs = ref([
  {
    id: '1',
    speech_written: [
      'Veux tu commencer la quête 1',
      '111 Libero ab vero perferendis molestias ut dicta hic maxime',
      '111 voluptate iste minus facilis nobis?'
    ],
    item_provided: '1',
    answers: ['1','2'],
  },
  {
    id: '2',
    speech_written: [
      '222222 ipsum dolor sit amet elit.',
      '222222 ab vero perferendis molestias ut dicta hic maxime',
      '222222 iste minus facilis nobis?'
    ],
    item_provided: '2',
    answers: ['1','2'],
  },
  {
    id: '3',
    speech_written: [
      '333333 ipsum dolor sit amet elit.',
      '333333 ab vero perferendis molestias ut dicta hic maxime',
      '333333 iste minus facilis nobis?'
    ],
    item_provided: '3',
    answers: ['1','2'],
  },
] as dialogInterface[]);