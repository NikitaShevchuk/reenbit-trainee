import { profileSlice } from '../profileSlice';
import { setupStore } from '../../store';

let store = setupStore();

beforeEach(() => {
    store = setupStore();
});

describe('Profile slice', () => {
    it('Should set access token', () => {
        store.dispatch(profileSlice.actions.setAccessToken('test_token'));
        expect(store.getState().profileSlice.access_token).toBe('test_token');
    });

    it('Should clear all authorization data from state', () => {
        store.dispatch(profileSlice.actions.logout());
        expect(store.getState().profileSlice.isAuthorizedWithFacebook).toBe(false);
        expect(store.getState().profileSlice.isAuthorizedWithGoogle).toBe(false);
        expect(store.getState().profileSlice.isAuthorized).toBe(false);
        expect(store.getState().profileSlice.access_token).toBe(null);
        expect(store.getState().profileSlice.profile).toBe(null);
    });
});
