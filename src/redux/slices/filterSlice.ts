import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1 as number,
    searchString: '' as string
} as const;

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload;
        }
    }
});
