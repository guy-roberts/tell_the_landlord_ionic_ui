/**
 * An object used to get page information from the server
 */
export class Page {
  // The number of elements in the page
  size: number = 0;
  // The total number of elements
  totalElements: number = 0;
  // The total number of pages
  totalPages: number = 0;
  // The current page number
  pageNumber: number = 0;
  // The field to sort
  sortField: string = '';
  // asc or desc ?
  sortDirection: string = '';

  filterField: string = '';

  filterValue: string = '';
}
