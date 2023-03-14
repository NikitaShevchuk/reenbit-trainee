import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { checkFacebookAuthInLocalStorage } from './utils/checkFacebookAuthInLocalStorage';
import { authorize } from '../thunks/authorize';

export interface IProfile {
    email: string;
    name: string;
    picture: string;
}

const initialState = {
    isAuthorized: false as boolean,
    isInitialized: false as boolean,
    access_token: null as string | null,
    profile: null as IProfile | null,
    isAuthorizedWithFacebook: false as boolean,
    isAuthorizedWithGoogle: false as boolean
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
            localStorage.setItem('isAuthorizedWithFacebook', 'false');
            state.isAuthorizedWithFacebook = false;
            state.isAuthorizedWithGoogle = false;
            state.isAuthorized = false;
            state.access_token = null;
            state.profile = null;
        },
        loginWithFacebook: (state, action: PayloadAction<IProfile>) => {
            if (state.isAuthorizedWithGoogle) return;
            localStorage.setItem('isAuthorizedWithFacebook', 'true');
            state.isAuthorizedWithFacebook = true;
            state.profile = {
                name: action.payload.name,
                email: action.payload.email,
                picture: action.payload.picture
            };
            state.isAuthorized = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorize.fulfilled, (state, action) => {
            console.log('resolved');
            state.isInitialized = true;
            state.isAuthorizedWithGoogle = true;
            state.profile = {
                name: action.payload.name,
                email: action.payload.email,
                picture: action.payload.picture
            };
            state.isAuthorized = true;
        });
        builder.addCase(authorize.rejected, (state) => {
            console.log('rejected');
            state.isAuthorizedWithGoogle = false;
            if (checkFacebookAuthInLocalStorage() && !state.isAuthorizedWithGoogle) {
                state.isAuthorizedWithFacebook = true;
            } else {
                state.isAuthorizedWithFacebook = false;
            }
            state.isInitialized = true;
            state.isAuthorized = false;
            state.profile = null;
        });
    }
});
