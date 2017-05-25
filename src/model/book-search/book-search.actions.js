import { createAction } from '../../utils/action-helper';
import BOOKSEARCH from './book-search.types';

export const onChange = searchText => createAction(BOOKSEARCH.TERM_CHANGED, searchText);
export const onSearch = () => createAction(BOOKSEARCH.SEARCH_ATTEMPTED);
