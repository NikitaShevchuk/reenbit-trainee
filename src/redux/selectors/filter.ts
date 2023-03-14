import { RootState } from '../store';

export const pageSelector = (state: RootState) => state.filterSlice.page;
export const searchStringSelector = (state: RootState) => state.filterSlice.searchString;
export const scrollComponentKeySelector = (state: RootState) =>
    state.filterSlice.scrollComponentKey;
