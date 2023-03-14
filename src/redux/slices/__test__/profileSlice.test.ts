import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { IProfile } from '@/redux/slices/profileSlice';
import { profileSlice } from '../profileSlice';
import { setupStore } from '../../store';
import { authorize, baseURL } from '../../thunks/authorize';

let store = setupStore();

const testAccessToken = 'test_token';
const mockResponse: IProfile = {
    email: 'test@email',
    name: 'test name',
    picture: 'test picture'
};

const mockApiResponse = () => {
    const mock = new MockAdapter(axios, { delayResponse: 200 });
    mock.onGet(`${baseURL}?access_token=${testAccessToken}`).reply(200, mockResponse);
};

describe('Profile slice', () => {
    beforeEach(() => {
        store = setupStore();
    });
    beforeAll(() => {
        mockApiResponse();
    });

    it('Should set a access token', () => {
        store.dispatch(profileSlice.actions.setAccessToken('test_token'));
        expect(store.getState().profileSlice.access_token).toBe('test_token');
    });

    it('Should clear all authorization data from the state', () => {
        store.dispatch(profileSlice.actions.logout());

        const state = store.getState().profileSlice;
        expect(state.isAuthorizedWithFacebook).toBe(false);
        expect(state.isAuthorizedWithGoogle).toBe(false);
        expect(state.isAuthorized).toBe(false);
        expect(state.access_token).toBe(null);
        expect(state.profile).toBe(null);
    });

    it('Should set login data', () => {
        store.dispatch(
            profileSlice.actions.loginWithFacebook({
                email: 'test@email',
                name: 'test name',
                picture: 'test picture'
            })
        );

        const state = store.getState().profileSlice;
        expect(state.isAuthorizedWithFacebook).toBe(true);
        expect(state.profile).toStrictEqual({
            name: 'test name',
            email: 'test@email',
            picture: 'test picture'
        });
        expect(state.isAuthorized).toBe(true);
    });

    it('Should authorize and set profile data to the state', async () => {
        store.dispatch(profileSlice.actions.setAccessToken(testAccessToken));
        store.dispatch(authorize());
        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 500);
        });

        const state = store.getState().profileSlice;
        expect(state.profile).toStrictEqual(mockResponse);
        expect(state.isAuthorized).toBe(true);
        expect(state.isInitialized).toBe(true);
    });
});
