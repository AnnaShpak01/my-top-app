import { SortEnum } from '../components/Sort/Sort.props'
import { PagesData } from '../../../interfaces/page.interface'

export type SortActions =
  | { type: SortEnum }
  | { type: SortEnum.Rating }
  | { type: 'reset'; initialState: PagesData[] }

export interface SortReducerState {
  sort: SortEnum
  pages: PagesData[]
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        pages: state.pages.slice().sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      }
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        pages: state.pages.slice().sort((a, b) => (a.price > b.price ? 1 : -1)),
      }
    case 'reset':
      return {
        sort: SortEnum.Rating,
        pages: action.initialState,
      }
    default:
      throw new Error('Incorrect type of sort')
  }
}
