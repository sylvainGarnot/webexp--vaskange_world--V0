import type { TagInterface } from './interface';
import { tags } from './state';


// PRIVATE


// EXPORT
export function getTags(input: number) {
  // GET Tags by id
  const response = [{
    id: '',
    name: '',
    image: '',
  }];
  tags.value = response as TagInterface[];
};