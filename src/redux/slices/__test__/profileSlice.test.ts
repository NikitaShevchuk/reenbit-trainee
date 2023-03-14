import { profileSlice } from '../profileSlice';
import { setupStore } from './../../store';
let store = setupStore();

beforeEach(() => {
    store = setupStore();
});

describe('Profile slice', () => {
    it('Should set access token', () => {
        store.dispatch(profileSlice.actions.setAccessToken('test_token'));
        expect(store.getState().profileSlice.access_token).toBe('test_token');
    });
});
