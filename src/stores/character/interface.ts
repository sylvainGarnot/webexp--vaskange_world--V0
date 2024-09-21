export interface characterInterface {
  id: string,
  name: string,
  effect: string,
  tags: string[],
  found_date: Date,
  state: {
    id: string,
    type: string,
    image: string,
    item_required_id: string,
    dialog_provided_id: string,
  },
}