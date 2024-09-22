import { ref } from 'vue';
import type { characterInterface } from './interface';


export const nearByCharacters = ref([] as characterInterface[]);

export const characters = ref([
  {
    id: "1",
    name: "jump-q1",
    found: false,
    found_date: new Date(0),
    dialog: '1',
    callBubble: {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    },
    screenAreaToBookmarkRatio: 0,
  },
  {
    id: "2",
    name: "rick 🐝",
    found: false,
    found_date: new Date(0),
    dialog: '2',
    callBubble: {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    },
    screenAreaToBookmarkRatio: 0,
  },
  {
    id: "3",
    name: "astro 1",
    found: false,
    found_date: new Date(0),
    dialog: '3',
    callBubble: {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    },
    screenAreaToBookmarkRatio: 0,
  },
] as characterInterface[]);