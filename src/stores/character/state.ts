import { ref } from 'vue';
import type { characterFoundInterface, characterInterface, currentCharacterInterface } from './interface';


export const currentCharacter = ref({} as currentCharacterInterface);

export const characters_found = ref([] as characterFoundInterface[]);

export const characters = ref([
  {
    id: "1",
    name: "jump-q1",
    dialog: '0',
    location: '1',
  },
  {
    id: "2",
    name: "rick 🐝",
    dialog: '2',
    location: '4',
  },
  {
    id: "3",
    name: "astro 1",
    dialog: '1',
    location: '1',
  },
  {
    id: '4',
    name: 'shop 🖼️',
    // dialog: '2',
    location: '1',
  },
] as characterInterface[]);