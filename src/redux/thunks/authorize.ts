/* eslint-disable prefer-destructuring */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { profileSlice } from '../slices/profileSlice';
import { RootState } from '../store';

export const baseURL = 'https://www.googleapis.com/oauth2/v2/userinfo';

const getTokenFromCookie = (): string | undefined => {
    let token: string | undefined;
    if (document.cookie.includes('access_token=')) {
        token = document.cookie.split('access_token=')[1];
        if (token.includes(';')) token = token.split(';')[0];
    }
    return token;
};

const getHeaders = (access_token: string) => ({
    Authorization: `Bearer ${access_token}`,
    Accept: 'application/json'
});

export const authorize = createAsyncThunk(
    'profile/authorize',
    async (_, { getState, rejectWithValue, dispatch }) => {
        const tokenInCookie = getTokenFromCookie();
        if (tokenInCookie) dispatch(profileSlice.actions.setAccessToken(tokenInCookie));

        const state = getState() as RootState;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { access_token } = state.profileSlice;

        if (!access_token) {
            return rejectWithValue('Access token is required!');
        }
        const profile = await axios
            .get(`${baseURL}?access_token=${access_token}`, { headers: getHeaders(access_token) })
            .then((response) => response.data);
        return profile;
    }
);
