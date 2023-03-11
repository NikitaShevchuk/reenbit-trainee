import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterApi } from './services/characterApi';
import { filterSlice } from './slices/filterSlice';
import { profileSlice } from './slices/profileSlice';

const rootReducer = combineReducers({
    filterSlice: filterSlice.reducer,
    profileSlice: profileSlice.reducer,
    [characterApi.reducerPath]: characterApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(characterApi.middleware);
        }
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
