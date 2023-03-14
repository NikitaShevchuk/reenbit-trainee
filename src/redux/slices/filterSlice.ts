import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1 as number,
    searchString: localStorage.getItem('searchString') || ('' as string),
    scrollComponentKey: 0 as number
} as const;

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearchString: (state, action: PayloadAction<string>) => {
            localStorage.setItem('searchString', action.payload);
            state.searchString = action.payload;
        },
        remountScrollComponent(state) {
            state.scrollComponentKey += state.scrollComponentKey;
        }
    }
});
