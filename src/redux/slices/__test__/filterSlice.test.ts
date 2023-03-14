import { filterSlice } from '../filterSlice';
import { setupStore } from '../../store';

let store = setupStore();

describe('Filter slice', () => {
    beforeEach(() => {
        store = setupStore();
    });

    it('Should set page', () => {
        store.dispatch(filterSlice.actions.setPage(1));

        expect(store.getState().filterSlice.page).toBe(1);
    });

    it('Should set search string', () => {
        store.dispatch(filterSlice.actions.setSearchString('test'));

        expect(store.getState().filterSlice.searchString).toBe('test');
    });
});
