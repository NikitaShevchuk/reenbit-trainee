import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authorize } from '../thunks/authorize';

export interface IProfile {
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
    isInitialized: false as boolean,
    access_token: null as string | null,
    profile: null as IProfile | null
} as const;

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            document.cookie = `access_token=${action.payload}`;
            state.access_token = action.payload;
        },
        logout: (state) => {
            document.cookie = `access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
            state.isAuthorized = false;
            state.access_token = null;
            state.profile = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorize.fulfilled, (state, action) => {
            state.isInitialized = true;
            state.profile = action.payload;
            state.isAuthorized = true;
        });
        builder.addCase(authorize.rejected, (state) => {
            state.isInitialized = true;
            state.isAuthorized = false;
            state.profile = null;
        });
    }
});
