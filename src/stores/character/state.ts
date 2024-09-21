import { ref } from 'vue';
import type { characterInterface } from './interface';


export const character = ref(null as unknown as characterInterface);
export const characters = ref([
  {
    id: "1",
    name: "jump-q1",
    found: false,
    found_date: new Date(0),
    dialog: '1',
  },
  {
    id: "2",
    name: "rick 🐝",
    found: false,
    found_date: new Date(0),
    dialog: '1',
  },
  {
    id: "3",
    name: "astro 1",
    found: false,
    found_date: new Date(0),
    dialog: '1',
  },
] as characterInterface[]);