export interface locationInterface {
  id: string,
  name: string,
  message: string,
  is_map_element: boolean
  upper_location: string,
}

export interface locationFoundInterface extends locationInterface {
  found_date: Date,
}