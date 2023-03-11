import { TokenResponse } from '@react-oauth/google';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authorize } from '../thunks/authorize';

interface Profile {
    id: string;
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    picture: string;
    locale: 'en';
}

const initialState = {
    isAuthorized: false as boolean,
    user: null as TokenResponse | null,
    profile: null as Profile | null
} as const;

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TokenResponse>) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorize.fulfilled, (state, action) => {
            state.profile = action.payload;
            state.isAuthorized = true;
        });
    }
});
