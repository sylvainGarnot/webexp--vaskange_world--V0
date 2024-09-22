import { ref } from 'vue';
import type { dialogInterface } from './interface';

export const dialogs = ref([
  {
    id: '1',
    speech_written: [
      'Lorem ipsum dolor sit amet elit.',
      'Libero ab vero perferendis molestias ut dicta hic maxime',
      'voluptate iste minus facilis nobis?'
    ],
    item_provided: '1',
    answers: ['1','2'],
  },
  {
    id: '2',
    speech_written: [
      '22222 ipsum dolor sit amet elit.',
      '222 ab vero perferendis molestias ut dicta hic maxime',
      '222222 iste minus facilis nobis?'
    ],
    item_provided: '2',
    answers: ['1','2'],
  },
] as dialogInterface[]);