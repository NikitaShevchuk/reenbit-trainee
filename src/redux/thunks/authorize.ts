import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

const baseURL = 'https://www.googleapis.com/oauth2/v2/userinfo';

const getHeaders = (access_token: string) => ({
    Authorization: `Bearer ${access_token}`,
    Accept: 'application/json'
});

export const authorize = createAsyncThunk(
    'profile/authorize',
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const access_token = state.profileSlice.user?.access_token;
        if (!access_token) {
            rejectWithValue('Access token is required!');
            return;
        }
        const profile = await axios
            .get(`${baseURL}?access_token=${access_token}`, { headers: getHeaders(access_token) })
            .then((response) => response.data);
        return profile;
    }
);
